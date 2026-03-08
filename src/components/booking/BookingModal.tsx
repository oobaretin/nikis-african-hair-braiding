'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { services } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { SALON_DATA } from '@/lib/salonData';

const bookingSchema = z.object({
  serviceId: z.string().optional(),
  clientName: z.string().min(2, 'Name must be at least 2 characters'),
  clientEmail: z.string().email('Please enter a valid email address'),
  clientPhone: z.string().min(10, 'Please enter a valid phone number'),
  preferredDate: z.string().min(1, 'Please select a date'),
  preferredTime: z.string().min(1, 'Please select a time'),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
  notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

const timeSlots = [
  '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedService
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceId: selectedService || '',
    }
  });

  const selectedServiceId = watch('serviceId');
  const selectedServiceData = services.find(s => s.id === selectedServiceId);
  
  // Handle service from ServiceMenu (format: "Category - Subcategory - Variation")
  const isServiceMenuService = selectedService && selectedService.includes(' - ');
  const serviceMenuData = isServiceMenuService ? selectedService.split(' - ') : null;

  // Get duration for the selected service
  const getServiceDuration = (): string | null => {
    // If a regular service is selected from the list
    if (selectedServiceData) {
      return selectedServiceData.duration;
    }
    // If a ServiceMenu service is selected (from prop)
    if (isServiceMenuService && serviceMenuData) {
      const [category, subcategory, variation] = serviceMenuData;
      const categoryData = SALON_DATA[category];
      if (categoryData) {
        const subcategoryData = categoryData[subcategory];
        if (subcategoryData) {
          const variationData = subcategoryData.variations.find(v => v.name === variation);
          return variationData?.duration || null;
        }
      }
    }
    return null;
  };

  const serviceDuration = getServiceDuration();

  // Fetch availability when date changes
  const fetchAvailability = useCallback(async (date: string) => {
    if (!date || !serviceDuration) {
      setAvailableSlots([]);
      return;
    }

    setLoadingAvailability(true);
    try {
      const response = await fetch(
        `/api/bookings/availability?date=${date}&duration=${serviceDuration}`
      );
      const result = await response.json();
      
      if (response.ok) {
        setAvailableSlots(result.availableSlots || []);
      } else {
        console.error('Error fetching availability:', result.error);
        setAvailableSlots(timeSlots); // Fallback to all slots
      }
    } catch (error) {
      console.error('Error fetching availability:', error);
      setAvailableSlots(timeSlots); // Fallback to all slots
    } finally {
      setLoadingAvailability(false);
    }
  }, [serviceDuration]);

  // Watch for date changes
  const watchedDate = watch('preferredDate');
  useEffect(() => {
    if (watchedDate && watchedDate !== selectedDate && serviceDuration) {
      setSelectedDate(watchedDate);
      fetchAvailability(watchedDate);
    }
  }, [watchedDate, selectedDate, serviceDuration, fetchAvailability]);

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare booking data
      const bookingData = {
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        clientPhone: data.clientPhone,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        serviceId: data.serviceId,
        serviceName: isServiceMenuService 
          ? selectedService 
          : selectedServiceData?.name,
        duration: serviceDuration || '2 hours',
        paymentMethod: data.paymentMethod,
        notes: data.notes,
      };

      // Submit booking to API
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          // Conflict - time slot already booked
          alert(result.error || 'This time slot is no longer available. Please select another time.');
          // Refresh availability
          if (data.preferredDate) {
            await fetchAvailability(data.preferredDate);
          }
          return;
        }
        throw new Error(result.error || 'Failed to book appointment');
      }
      
      // Reset form and close modal
      reset();
      setSelectedDate('');
      setAvailableSlots([]);
      onClose();
      
      // Show success message
      alert('Appointment booked successfully! We will contact you to confirm.');
      
    } catch (error) {
      console.error('Booking error:', error);
      alert(error instanceof Error ? error.message : 'There was an error booking your appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl mx-auto"
            >
              <Card className="max-h-[90vh] overflow-y-auto shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-primary-50 to-primary-100 border-b border-primary-200">
                  <div>
                    <h2 className="font-bold text-2xl text-secondary-900">
                      Book Your Appointment
                    </h2>
                    <p className="text-secondary-600 mt-1 font-medium">
                      Fill out the form below to schedule your appointment
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/50 rounded-lg transition-colors duration-200"
                  >
                    <XMarkIcon className="w-6 h-6 text-secondary-500" />
                  </button>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Service Selection */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-secondary-900 border-b border-secondary-200 pb-2">
                        {isServiceMenuService ? 'Selected Service' : 'Select a Service'}
                      </h3>
                      
                      {isServiceMenuService ? (
                        <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <h4 className="font-semibold text-secondary-900">
                                {serviceMenuData?.[1]} - {serviceMenuData?.[2]}
                              </h4>
                              <p className="text-secondary-600 text-sm mt-1">
                                Category: {serviceMenuData?.[0]}
                              </p>
                              <div className="flex items-center mt-2 text-sm text-secondary-500">
                                <ClockIcon className="w-4 h-4 mr-1" />
                                {serviceDuration || 'Duration varies by style'}
                              </div>
                            </div>
                            
                            <div className="text-right ml-4">
                              <div className="text-lg font-bold text-primary-600">
                                Contact for Pricing
                              </div>
                              <div className="text-xs text-accent-600 font-medium">
                                Custom Service
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="grid gap-4">
                          {services.map((service) => (
                            <label
                              key={service.id}
                              className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all duration-200 ${
                                selectedServiceId === service.id
                                  ? 'border-primary-500 bg-primary-50'
                                  : 'border-secondary-200 hover:border-secondary-300'
                              }`}
                            >
                              <input
                                type="radio"
                                value={service.id}
                                {...register('serviceId')}
                                className="sr-only"
                              />
                              
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-secondary-900">
                                    {service.name}
                                  </h4>
                                  <p className="text-secondary-600 text-sm mt-1">
                                    {service.description}
                                  </p>
                                  <div className="flex items-center mt-2 text-sm text-secondary-500">
                                    <ClockIcon className="w-4 h-4 mr-1" />
                                    {service.duration}
                                  </div>
                                </div>
                                
                                <div className="text-right ml-4">
                                  <div className="text-lg font-bold text-primary-600">
                                    {formatPrice(service.price)}
                                  </div>
                                  {service.popular && (
                                    <div className="text-xs text-accent-600 font-medium">
                                      Popular
                                    </div>
                                  )}
                                </div>
                              </div>
                            </label>
                          ))}
                        </div>
                      )}
                      
                      {errors.serviceId && (
                        <p className="text-red-600 text-sm">{errors.serviceId.message}</p>
                      )}
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-secondary-900 border-b border-secondary-200 pb-2">
                        Your Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            {...register('clientName')}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                            placeholder="Your full name"
                          />
                          {errors.clientName && (
                            <p className="text-red-600 text-sm mt-1">{errors.clientName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            {...register('clientEmail')}
                            className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                            placeholder="your@email.com"
                          />
                          {errors.clientEmail && (
                            <p className="text-red-600 text-sm mt-1">{errors.clientEmail.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          {...register('clientPhone')}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                          placeholder="(281) 555-0123"
                        />
                        {errors.clientPhone && (
                          <p className="text-red-600 text-sm mt-1">{errors.clientPhone.message}</p>
                        )}
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-secondary-900 border-b border-secondary-200 pb-2">
                        Select Date & Time
                      </h3>
                      
                      {(selectedServiceId || isServiceMenuService) && serviceDuration && (
                        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <ClockIcon className="w-5 h-5 text-primary-600" />
                            <div>
                              <p className="text-sm font-medium text-secondary-700">Estimated Duration</p>
                              <p className="text-lg font-bold text-primary-600">{serviceDuration}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          {...register('preferredDate')}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 hover:border-primary-300"
                        />
                        {errors.preferredDate && (
                          <p className="text-red-600 text-sm mt-1">{errors.preferredDate.message}</p>
                        )}
                        {loadingAvailability && watchedDate && (
                          <p className="text-primary-600 text-sm mt-2">Checking availability...</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Preferred Time *
                        </label>
                        {watchedDate && availableSlots.length === 0 && !loadingAvailability && (
                          <div className="mb-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <p className="text-yellow-800 text-sm">
                              ⚠️ No available slots for this date. Please select another date.
                            </p>
                          </div>
                        )}
                        {watchedDate && availableSlots.length > 0 && (
                          <p className="text-sm text-secondary-600 mb-2">
                            Available slots: {availableSlots.length} of {timeSlots.length}
                          </p>
                        )}
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => {
                            const isAvailable = !watchedDate || availableSlots.includes(time);
                            const isSelected = watch('preferredTime') === time;
                            
                            return (
                              <label
                                key={time}
                                className={`relative rounded-lg border-2 p-3 text-center transition-all duration-200 ${
                                  !isAvailable
                                    ? 'border-red-200 bg-red-50 text-red-400 cursor-not-allowed opacity-60'
                                    : isSelected
                                    ? 'border-primary-500 bg-primary-50 text-primary-700 cursor-pointer'
                                    : 'border-secondary-200 hover:border-secondary-300 cursor-pointer'
                                }`}
                              >
                                <input
                                  type="radio"
                                  value={time}
                                  {...register('preferredTime')}
                                  className="sr-only"
                                  disabled={!isAvailable}
                                />
                                <div className="flex items-center justify-center space-x-1">
                                  <span>{time}</span>
                                  {!isAvailable && (
                                    <span className="text-xs">✗</span>
                                  )}
                                </div>
                              </label>
                            );
                          })}
                        </div>
                        {errors.preferredTime && (
                          <p className="text-red-600 text-sm mt-1">{errors.preferredTime.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          {...register('notes')}
                          rows={3}
                          className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-all duration-200 hover:border-primary-300"
                          placeholder="Any special requests or information we should know..."
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg text-secondary-900 border-b border-secondary-200 pb-2">
                        Preferred Payment Method *
                      </h3>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {/* Cash Option */}
                        <label className={`relative cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 transform hover:scale-[1.02] ${
                          watch('paymentMethod') === 'cash'
                            ? 'border-primary-500 bg-gradient-to-r from-primary-50 to-primary-100 shadow-lg'
                            : 'border-secondary-200 hover:border-primary-300 hover:shadow-md bg-white'
                        }`}>
                          <input
                            type="radio"
                            value="cash"
                            {...register('paymentMethod')}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                              <span className="text-2xl">💰</span>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-secondary-900">Cash</h4>
                              <p className="text-sm text-secondary-600 mt-1">Pay in person at appointment</p>
                              <div className="flex items-center mt-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                <span className="text-xs text-green-600 font-medium">Instant Payment</span>
                              </div>
                            </div>
                            {watch('paymentMethod') === 'cash' && (
                              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                        </label>

                        {/* Zelle Option */}
                        <label className={`relative cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 transform hover:scale-[1.02] ${
                          watch('paymentMethod') === 'zelle'
                            ? 'border-primary-500 bg-gradient-to-r from-primary-50 to-primary-100 shadow-lg'
                            : 'border-secondary-200 hover:border-primary-300 hover:shadow-md bg-white'
                        }`}>
                          <input
                            type="radio"
                            value="zelle"
                            {...register('paymentMethod')}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center p-2">
                              <img 
                                src="/images/zelle-logo1.png" 
                                alt="Zelle" 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-secondary-900">Zelle</h4>
                              <p className="text-sm text-secondary-600 mt-1">Send to: [Your Zelle Info]</p>
                              <div className="flex items-center mt-2">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                                <span className="text-xs text-primary-600 font-medium">Bank Transfer</span>
                              </div>
                            </div>
                            {watch('paymentMethod') === 'zelle' && (
                              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                        </label>

                        {/* CashApp Option */}
                        <label className={`relative cursor-pointer rounded-xl border-2 p-5 transition-all duration-300 transform hover:scale-[1.02] ${
                          watch('paymentMethod') === 'cashapp'
                            ? 'border-primary-500 bg-gradient-to-r from-primary-50 to-primary-100 shadow-lg'
                            : 'border-secondary-200 hover:border-primary-300 hover:shadow-md bg-white'
                        }`}>
                          <input
                            type="radio"
                            value="cashapp"
                            {...register('paymentMethod')}
                            className="sr-only"
                          />
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center p-2">
                              <img 
                                src="/images/cashapp.logo1.png" 
                                alt="CashApp" 
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-lg text-secondary-900">CashApp</h4>
                              <p className="text-sm text-secondary-600 mt-1">Send to: [Your CashApp Info]</p>
                              <div className="flex items-center mt-2">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                                <span className="text-xs text-primary-600 font-medium">Mobile Payment</span>
                              </div>
                            </div>
                            {watch('paymentMethod') === 'cashapp' && (
                              <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              </div>
                            )}
                          </div>
                        </label>
                      </div>
                      
                      {errors.paymentMethod && (
                        <p className="text-red-600 text-sm">{errors.paymentMethod.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6 border-t border-secondary-200">
                      <Button
                        type="submit"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                        className="px-8 py-3 font-medium bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg"
                      >
                        {isSubmitting ? 'Booking...' : '✨ Book Appointment'}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
