'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCheck,
  Copy,
  Heart,
  Landmark,
  Phone,
  QrCode,
  ShieldCheck,
  Sparkles,
  Smartphone,
  WalletCards,
} from 'lucide-react';

import ThemeToggle from '@/components/shared/ThemeToggle';
import {
  PAYMENT_METHODS,
  GIVE_NOW_VERSE,
} from '@/lib/give-now-data';

/* =========================================================
   COPY BUTTON
   ========================================================= */

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Clipboard may be unavailable in some browser contexts.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title={`Copy ${text}`}
      aria-label={`Copy ${text}`}
      className="give-copy-button"
    >
      {copied ? (
        <CheckCheck className="h-3.5 w-3.5" />
      ) : (
        <Copy className="h-3.5 w-3.5" />
      )}
    </button>
  );
}

/* =========================================================
   BANK DETAIL ROW
   ========================================================= */

function BankRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="give-bank-row">
      <span className="give-bank-label">{label}</span>

      <div className="flex min-w-0 items-center justify-end">
        <span className="give-bank-value">{value}</span>
        <CopyButton text={value} />
      </div>
    </div>
  );
}

/* =========================================================
   SECTION EYEBROW
   ========================================================= */

function SectionEyebrow({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="jcwmm-eyebrow">
      {children}
    </p>
  );
}

/* =========================================================
   PAGE
   ========================================================= */

export default function GiveNowClient() {
  const upiPayment = PAYMENT_METHODS.find(
    (item) => item.id === 'upi-sbi'
  );

  const bankPayment = PAYMENT_METHODS.find(
    (item) => item.id === 'sbi-main'
  );

  const upiId = upiPayment?.upiId ?? 'JCWMM@SBI';
  const merchantName =
    upiPayment?.merchantName ?? 'JUDAH ASHER';

  const phones = upiPayment?.phones ?? [
    '+91 8686861836',
    '+91 9700545494',
  ];

  return (
    <main className="give-page">

      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div className="give-page-ambient" aria-hidden="true">
        <div className="give-ambient-glow give-ambient-glow-gold" />
        <div className="give-ambient-glow give-ambient-glow-blue" />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="give-topbar">
        <div className="give-topbar-inner">

          <Link
            href="/"
            className="give-back-link"
          >
            <ArrowLeft className="h-4 w-4" />

            <span className="hidden sm:inline">
              Back to Home
            </span>

            <span className="sm:hidden">
              Home
            </span>
          </Link>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />

            <div className="give-brand-image">
              <Image
                src="/images/both_pic.png"
                alt="Judah Asher Ministries — Founders"
                width={34}
                height={34}
                className="h-full w-full object-contain"
              />
            </div>

            <span className="give-brand-name hidden sm:block">
              Judah Asher Ministries
            </span>
          </div>
        </div>
      </header>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="give-intro">
        <div className="give-container give-intro-inner">

          <div className="give-support-chip">
            <WalletCards className="h-3.5 w-3.5" />

            <span>
              Give &amp; Support
            </span>
          </div>

          <h1 className="give-main-title">
            Sow into the{' '}
            <span className="give-yellow-title">
              Kingdom of God
            </span>
          </h1>

          <p className="give-intro-copy">
            Your generosity helps Judah Asher Ministries
            preach the Gospel, reach lives, and
            continue the work God has entrusted to us.
          </p>

          {/* Verse */}
          <div className="give-verse-card">

            <div className="give-verse-top-line" />

            <p className="give-verse-text">
              {GIVE_NOW_VERSE.text}
            </p>

            <div className="give-verse-reference">
              <span />
              <span>{GIVE_NOW_VERSE.reference}</span>
              <span />
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="give-container give-main">


        {/* ===================================================
            ABRAHAMIC COVENANT PARTNER
        =================================================== */}

        <section>

          <div className="give-section-heading">
            <div>
              <SectionEyebrow>
                Monthly Partnership
              </SectionEyebrow>

              <h2 className="give-section-title">
                Become an Abrahamic Covenant Partner
              </h2>

              <p className="give-section-description">
                Partner consistently with the ministry and help
                us carry the Gospel farther.
              </p>
            </div>

            <div className="give-heading-icon">
              <Sparkles className="h-4 w-4" />
            </div>
          </div>


          {/* Partnership feature */}
          <div className="give-feature-card">

            {/* Image */}
            <div className="give-feature-image-area">
              <div className="give-image-frame">
                <Image
                  src="/images/BECOME_A_ABRAHAMIC_COVENANT_PARTNER.jpg"
                  alt="Become an Abrahamic Covenant Partner"
                  width={2048}
                  height={2048}
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>


            {/* Information */}
            <div className="give-feature-content">

              <div className="give-mini-label">
                <span />
                <span>Abrahamic Covenant</span>
              </div>

              <h3 className="give-feature-title">
                Partner with the{' '}
                <span className="give-yellow-title">
                  Ministry
                </span>
              </h3>

              <p className="give-feature-description">
                Become a monthly partner and sow consistently
                into the work of the ministry. Your partnership
                helps us preach the Gospel, conduct crusades,
                and reach more people with the Word of God.
              </p>


              {/* Divider */}
              <div className="give-divider">
                <span className="give-divider-gold" />
                <span className="give-divider-dot" />
                <span className="give-divider-line" />
              </div>


              {/* UPI compact */}
              <div className="give-upi-module">

                <div className="give-upi-heading">
                  <div>
                    <p className="give-mini-label-text">
                      Give Monthly
                    </p>

                    <p className="give-upi-subtitle">
                      Scan with any supported UPI app
                    </p>
                  </div>

                  <div className="give-payment-icon">
                    <QrCode className="h-4 w-4" />
                  </div>
                </div>


                <div className="give-upi-grid">

                  <div className="give-qr-box">
                    <Image
                      src="/images/qrrr.jpeg"
                      alt="Judah Asher Ministries UPI QR Code"
                      width={2048}
                      height={2048}
                      sizes="112px"
                      className="block aspect-square h-auto w-full object-contain"
                    />
                  </div>


                  <div className="min-w-0">

                    <p className="give-field-label">
                      UPI ID
                    </p>

                    <div className="mt-1 flex items-center">
                      <span className="give-upi-id">
                        {upiId}
                      </span>

                      <CopyButton text={upiId} />
                    </div>

                    <p className="give-merchant">
                      Merchant:{' '}
                      <span>
                        {merchantName}
                      </span>
                    </p>

                    <div className="give-app-pills">
                      {[
                        'GPay',
                        'PhonePe',
                        'Paytm',
                        'BHIM',
                      ].map((app) => (
                        <span key={app}>
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>


              {/* Contact numbers */}
              <div className="give-phone-list">
                {phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="give-phone-pill"
                  >
                    <Phone className="h-3 w-3" />
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ===================================================
            PAYMENT METHODS
        =================================================== */}

        <section>

          <div className="give-section-heading">
            <div>
              <SectionEyebrow>
                Giving Methods
              </SectionEyebrow>

              <h2 className="give-section-title">
                Choose Your Way to Give
              </h2>

              <p className="give-section-description">
                Use UPI for a quick digital gift or transfer
                directly through the bank.
              </p>
            </div>
          </div>


          <div className="grid gap-6 lg:grid-cols-2">


            {/* =================================================
                UPI
            ================================================= */}

            <article className="give-payment-card">

              <div className="give-payment-image-area">
                <div className="give-payment-image-frame">
                  <Image
                    src="/images/JCWMM_OFFERING_QR_CODE_2.jpg"
                    alt="JCWMM UPI payment QR code"
                    width={1920}
                    height={1080}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>


              <div className="give-payment-content">

                <div className="give-payment-title-row">
                  <div>
                    <SectionEyebrow>
                      Digital Giving
                    </SectionEyebrow>

                    <h3 className="give-payment-title">
                      UPI &amp; Mobile Payments
                    </h3>
                  </div>

                  <div className="give-payment-icon">
                    <Smartphone className="h-4 w-4" />
                  </div>
                </div>


                <div className="give-data-box">

                  <p className="give-field-label">
                    UPI ID
                  </p>

                  <div className="mt-1 flex items-center">
                    <span className="give-upi-id give-upi-id-large">
                      {upiId}
                    </span>

                    <CopyButton text={upiId} />
                  </div>
                </div>


                <div className="give-data-box">

                  <p className="give-field-label">
                    Merchant Name
                  </p>

                  <p className="give-merchant-name">
                    {merchantName}
                  </p>
                </div>


                <div className="give-app-section">

                  <p className="give-field-label">
                    Supported Apps
                  </p>

                  <div className="give-app-pills give-app-pills-large">
                    {[
                      'GPay',
                      'PhonePe',
                      'Paytm',
                      'BHIM UPI',
                      'WhatsApp Pay',
                    ].map((app) => (
                      <span key={app}>
                        {app}
                      </span>
                    ))}
                  </div>
                </div>


                <div className="give-help-section">

                  <p className="give-field-label">
                    Need Help?
                  </p>

                  <div className="give-phone-list">
                    {phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, '')}`}
                        className="give-phone-pill"
                      >
                        <Phone className="h-3 w-3" />
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </article>


            {/* =================================================
                BANK
            ================================================= */}

            <article className="give-payment-card">

              <div className="give-payment-image-area">
                <div className="give-payment-image-frame">
                  <Image
                    src="/images/offering-2.jpeg"
                    alt="JCWMM bank transfer offering"
                    width={1671}
                    height={2048}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="block h-auto w-full object-contain"
                  />
                </div>
              </div>


              <div className="give-payment-content">

                <div className="give-payment-title-row">

                  <div>
                    <SectionEyebrow>
                      Direct Transfer
                    </SectionEyebrow>

                    <h3 className="give-payment-title">
                      Bank Transfer — SBI
                    </h3>

                    <p className="give-payment-note">
                      NEFT · RTGS · IMPS · Internet Banking
                    </p>
                  </div>

                  <div className="give-payment-icon">
                    <Landmark className="h-4 w-4" />
                  </div>
                </div>


                <div className="give-bank-details">

                  <BankRow
                    label="Account Name"
                    value={
                      bankPayment?.accountName ??
                      'MR. JUDAH ASHER'
                    }
                  />

                  <BankRow
                    label="Account No."
                    value={
                      bankPayment?.accountNumber ??
                      '20385704769'
                    }
                  />

                  <BankRow
                    label="IFSC"
                    value={
                      bankPayment?.ifscCode ??
                      'SBIN0018395'
                    }
                  />

                  <BankRow
                    label="Branch Code"
                    value={
                      bankPayment?.branchCode ??
                      '018395'
                    }
                  />

                  <BankRow
                    label="Bank"
                    value={
                      bankPayment?.bankName ??
                      'State Bank of India'
                    }
                  />

                  <BankRow
                    label="Branch"
                    value={
                      bankPayment?.branch ??
                      'Hyderabad'
                    }
                  />
                </div>


                <div className="give-phone-list give-bank-phones">
                  {phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="give-phone-pill"
                    >
                      <Phone className="h-3 w-3" />
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>


        {/* ===================================================
            TRUST STRIP
        =================================================== */}

        <section>

          <div className="give-trust-grid">
            {[
              {
                icon: Heart,
                title: 'Give in Faith',
                description:
                  'Every gift is an expression of faith and generosity.',
              },
              {
                icon: ShieldCheck,
                title: 'Give Securely',
                description:
                  'Choose the payment method that works best for you.',
              },
              {
                icon: Sparkles,
                title: 'Kingdom Impact',
                description:
                  'Your generosity helps advance the work of the ministry.',
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="give-trust-card"
                >
                  <div className="give-trust-icon">
                    <Icon className="h-4 w-4" />
                  </div>

                  <h3 className="give-trust-title">
                    {item.title}
                  </h3>

                  <p className="give-trust-description">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>


        {/* ===================================================
            CONTACT
        =================================================== */}

        <section className="give-contact-section">

          <div className="give-contact-line" />

          <p className="give-contact-text">
            For giving-related queries, contact{' '}
            <a
              href="mailto:jcwmm.off@gmail.com"
              className="give-contact-email"
            >
              jcwmm.off@gmail.com
            </a>
          </p>

        </section>

      </div>
    </main>
  );
}