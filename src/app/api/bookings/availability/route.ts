import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Booking {
  preferredDate: string;
  preferredTime: string;
  duration?: string;
}

const getBookingsFilePath = () => {
  return path.join(process.cwd(), 'data', 'bookings.json');
};

async function readBookings(): Promise<Booking[]> {
  try {
    const filePath = getBookingsFilePath();
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return [];
  }
}

function slotsOverlap(
  date1: string,
  time1: string,
  duration1: string,
  date2: string,
  time2: string,
  duration2: string
): boolean {
  if (date1 !== date2) return false;

  const parseTime = (timeStr: string): number => {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
    if (period === 'AM' && hours === 12) totalMinutes -= 12 * 60;
    return totalMinutes;
  };

  const parseDuration = (durationStr: string): number => {
    const match = durationStr.match(/(\d+)/);
    if (match) {
      return parseInt(match[1]) * 60;
    }
    return 60;
  };

  const start1 = parseTime(time1);
  const end1 = start1 + parseDuration(duration1);
  const start2 = parseTime(time2);
  const end2 = start2 + parseDuration(duration2);

  return start1 < end2 && start2 < end1;
}

// GET - Get available time slots for a date
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const duration = searchParams.get('duration') || '2 hours';

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      );
    }

    const bookings = await readBookings();
    
    // Business hours: 7 AM - 7 PM
    const allTimeSlots = [
      '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
      '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
    ];

    // Check which slots are available
    const availableSlots = allTimeSlots.filter(timeSlot => {
      // Check if this slot conflicts with any existing booking
      const hasConflict = bookings.some(booking =>
        slotsOverlap(
          booking.preferredDate,
          booking.preferredTime,
          booking.duration || '2 hours',
          date,
          timeSlot,
          duration
        )
      );
      return !hasConflict;
    });

    return NextResponse.json({
      date,
      availableSlots,
      bookedSlots: allTimeSlots.filter(slot => !availableSlots.includes(slot)),
    });
  } catch (error) {
    console.error('Error checking availability:', error);
    return NextResponse.json(
      { error: 'Failed to check availability' },
      { status: 500 }
    );
  }
}

