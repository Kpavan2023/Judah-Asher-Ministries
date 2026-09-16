'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, Play, Radio } from 'lucide-react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <Image
          src="/MegaChruch_back.jpeg"
          alt=""
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-background-overlay" />
        <div className="hero-background-atmosphere" />
        <div className="hero-background-vignette" />
      </div>

      <div className="hero-inner">
        <div className={`hero-founder-image-shell ${mounted ? 'hero-enter hero-enter-delay-1' : ''}`}>
          <div className="hero-founder-image-frame">
            <Image
              src="/images/both_pic.png"
              alt="Prophet Judah Asher and Prophetess Judah Praisy"
              fill
              priority
              sizes="(max-width: 767px) 88vw, 46vw"
              className="hero-founder-image"
            />
            <div className="hero-founder-image-fade" aria-hidden="true" />
          </div>
          <span className="hero-image-caption">Founders · JCWMM</span>
        </div>

        <div className="hero-content">
          <p className={`hero-eyebrow ${mounted ? 'hero-enter hero-enter-delay-1' : ''}`}>
            Founders <span aria-hidden="true">•</span> JCWMM
          </p>

          <p className={`hero-welcome ${mounted ? 'hero-enter hero-enter-delay-2' : ''}`}>
            Welcome to
          </p>

          <h1 id="hero-title" className={`hero-title ${mounted ? 'hero-enter hero-enter-delay-3' : ''}`}>
            JCWMM
          </h1>

          <span className="hero-founder-welcome-divider" aria-hidden="true" />

          <div className={`hero-founder-block ${mounted ? 'hero-enter hero-enter-delay-4' : ''}`}>
            <div className="hero-founder-name-row">
              <div>
                <span className="hero-founder-role">Prophet</span>
                <h2>Judah Asher</h2>
              </div>
              <div className="hero-name-divider" aria-hidden="true">
                <span />
                <b>&amp;</b>
                <span />
              </div>
              <div>
                <span className="hero-founder-role">Prophetess</span>
                <h2>Judah Praisy</h2>
              </div>
            </div>
          </div>

          <p className={`hero-ministry-name ${mounted ? 'hero-enter hero-enter-delay-5' : ''}`}>
            Jesus Christ Word Miracles Ministry
          </p>
          <p className={`hero-tagline ${mounted ? 'hero-enter hero-enter-delay-5' : ''}`}>
            Sharing God&apos;s Word <span aria-hidden="true">•</span> Transforming Lives <span aria-hidden="true">•</span> Walking in Faith
          </p>

          <div className={`hero-cta-dock ${mounted ? 'hero-enter hero-enter-delay-6' : ''}`} aria-label="Hero actions">
            <button type="button" onClick={() => scrollTo('#services')} className="hero-cta hero-cta-primary">
              <Play className="h-4 w-4 fill-current" aria-hidden="true" />
              Join Worship
            </button>
            <button type="button" onClick={() => scrollTo('#live')} className="hero-cta hero-cta-live">
              <Radio className="h-4 w-4" aria-hidden="true" />
              Watch Live
            </button>
            <button type="button" onClick={() => scrollTo('#prayer')} className="hero-cta hero-cta-prayer">
              <Heart className="h-4 w-4" aria-hidden="true" />
              Prayer Request
            </button>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollTo('#services')}
        className="hero-scroll-cue"
        aria-label="Scroll to weekly services"
      >
        <span>Scroll to explore</span>
        <span className="hero-scroll-line" aria-hidden="true" />
      </button>
    </section>
  );
}
