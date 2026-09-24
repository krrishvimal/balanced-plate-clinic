import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Balanced Plate Nutrition Clinic | Personalised Diet Plans & Expert Guidance',
  description:
    'Personalised nutrition plans and expert guidance for Weight Loss, Type-2 Diabetes, IBS, PCOS/PCOD, and Lifestyle Disorders. Book a 100% virtual online consultation with expert dieticians.',
  keywords: [
    'Dietician',
    'Nutrition Clinic',
    'Balanced Plate',
    'Personalised Diet Plan',
    'PCOS Dietitian',
    'Diabetes Diet Plan',
    'Weight Loss Clinic Delhi',
    'Online Nutritionist Consultation',
  ],
  authors: [{ name: 'Balanced Plate Nutrition Clinic' }],
  openGraph: {
    title: 'Balanced Plate Nutrition Clinic | Nutrition that Balances Life',
    description:
      'Personalised nutrition plans and expert guidance to help you achieve better health, sustainably.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased selection:bg-[#C8A870] selection:text-stone-950">
        <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
        {children}
      </body>
    </html>
  );
}
