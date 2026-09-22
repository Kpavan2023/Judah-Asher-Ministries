import type { Metadata } from 'next';
import GiveNowClient from './GiveNowClient';

export const metadata: Metadata = {
  title: 'Give Now | Judah Asher Ministries',
  description:
    'Sow into the Kingdom of God. Support Judah Asher Ministries through online giving via UPI, PhonePe, GPay, Paytm, or bank transfer.',
};

export default function GiveNowPage() {
  return <GiveNowClient />;
}
