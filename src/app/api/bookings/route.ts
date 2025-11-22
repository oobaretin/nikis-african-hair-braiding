import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Types
interface Booking {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  preferredDate: string;
  preferredTime: string;
  serviceId?: string;
  serviceName?: string;
  duration?: string;
  paymentMethod: string;
  notes?: string;
  createdAt: string;
}

interface BookingSlot {
  date: string;
  time: string;
  duration: string;
}

// Helper function to get bookings file path
const getBookingsFilePath = () => {
  return path.join(process.cwd(), 'data', 'bookings.json');
};

// Helper function to read bookings
async function readBookings(): Promise<Booking[]> {
  try {
    const filePath = getBookingsFilePath();
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

// Helper function to write bookings
async function writeBookings(bookings: Booking[]): Promise<void> {
  const filePath = getBookingsFilePath();
  const dir = path.dirname(filePath);
  
  // Create directory if it doesn't exist
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  await fs.writeFile(filePath, JSON.stringify(bookings, null, 2), 'utf8');
}

// Helper function to check if time slots overlap
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
    // Parse duration like "2-3 hours" or "4-5 hours"
    const match = durationStr.match(/(\d+)/);
    if (match) {
      return parseInt(match[1]) * 60; // Convert to minutes
    }
    return 60; // Default 1 hour
  };

  const start1 = parseTime(time1);
  const end1 = start1 + parseDuration(duration1);
  const start2 = parseTime(time2);
  const end2 = start2 + parseDuration(duration2);

  return start1 < end2 && start2 < end1;
}

// GET - Check availability
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    const time = searchParams.get('time');
    const duration = searchParams.get('duration');

    const bookings = await readBookings();

    // If checking specific date/time/duration
    if (date && time && duration) {
      const isAvailable = !bookings.some(booking => 
        slotsOverlap(
          booking.preferredDate,
          booking.preferredTime,
          booking.duration || '1 hour',
          date,
          time,
          duration
        )
      );

      return NextResponse.json({ available: isAvailable });
    }

    // If checking all bookings for a date
    if (date) {
      const dateBookings = bookings.filter(b => b.preferredDate === date);
      return NextResponse.json({ bookings: dateBookings });
    }

    // Return all bookings
    return NextResponse.json({ bookings });
  } catch (error) {
    console.error('Error reading bookings:', error);
    return NextResponse.json(
      { error: 'Failed to read bookings' },
      { status: 500 }
    );
  }
}

// POST - Create new booking
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      clientName,
      clientEmail,
      clientPhone,
      preferredDate,
      preferredTime,
      serviceId,
      serviceName,
      duration,
      paymentMethod,
      notes,
    } = body;

    // Validate required fields
    if (!clientName || !clientEmail || !clientPhone || !preferredDate || !preferredTime || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const bookings = await readBookings();

    // Check for conflicts
    const hasConflict = bookings.some(booking =>
      slotsOverlap(
        booking.preferredDate,
        booking.preferredTime,
        booking.duration || '1 hour',
        preferredDate,
        preferredTime,
        duration || '1 hour'
      )
    );

    if (hasConflict) {
      return NextResponse.json(
        { error: 'This time slot is already booked. Please select another time.' },
        { status: 409 }
      );
    }

    // Create new booking
    const newBooking: Booking = {
      id: `booking-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      clientName,
      clientEmail,
      clientPhone,
      preferredDate,
      preferredTime,
      serviceId,
      serviceName,
      duration: duration || '1 hour',
      paymentMethod,
      notes,
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);
    await writeBookings(bookings);

    return NextResponse.json(
      { success: true, booking: newBooking },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

