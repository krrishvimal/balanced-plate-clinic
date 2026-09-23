import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(request: Request) {
  try {
    const { amount, option, patientName } = await request.json();

    const key_id = process.env.RAZORPAY_KEY_ID || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    const key_secret = process.env.RAZORPAY_KEY_SECRET;

    if (!key_id || !key_secret) {
      // If Razorpay keys are not provided in env yet, return placeholder order for client preview
      return NextResponse.json({
        success: true,
        isMock: true,
        order: {
          id: 'order_mock_' + Math.random().toString(36).substring(7),
          amount: (amount || 1) * 100,
          currency: 'INR',
          notes: { option, patientName },
        },
      });
    }

    const instance = new Razorpay({
      key_id,
      key_secret,
    });

    const order = await instance.orders.create({
      amount: (amount || 1) * 100, // Amount in paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        option: option || '1-on-1 Personalised Consultation',
        patientName: patientName || 'Patient',
        diet_assessment_form: 'https://docs.google.com/forms/d/1K03_NXHtmo-_8kl_iqrTuHU4BZMT9aU6qRyqt9P7Ewk/viewform',
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (error: any) {
    console.error('Razorpay order creation error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Server error creating Razorpay order' },
      { status: 500 }
    );
  }
}
