import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  BookOpen,
  Eye,
  Target,
  CheckCircle,
  Star,
  Flame,
  Quote,
  Cross,
  Sparkles,
} from 'lucide-react';
import { CHURCH_INFO, CORE_BELIEFS } from '@/lib/church-data';

const SectionReveal = dynamic(
  () => import('@/components/shared/SectionReveal'),
  { ssr: false }
);

const iconMap: Record<string, React.ElementType> = {
  'book-open': BookOpen,
  trinity: Star,
  cross: CheckCircle,
  flame: Flame,
  users: Eye,
  sunrise: Target,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── About Judah Asher Ministries header ── */}
        <SectionReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-royal-100 text-royal-700 jcwmm-eyebrow mb-4">
            Our Story
          </span>
          <h2 className="jcwmm-h2 mb-4">
            About <span className="text-gradient-blue">Judah Asher Ministries</span>
          </h2>
          <p className="jcwmm-body text-gray-600 max-w-3xl mx-auto">
            We are a Spirit-filled, Word-centered ministry committed to making disciples,
            transforming lives, and glorifying Jesus Christ in everything we do.
          </p>
        </SectionReveal>

        {/* Who We Are */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <SectionReveal delay={100}>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-royal-900/20 aspect-[4/3]">
                <Image
                  src="https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="JAM congregation in worship"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-900/40 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-[200px]">
                <div className="jcwmm-h2">18+</div>
                <div className="jcwmm-small text-gray-600">Years Serving the Community</div>
              </div>
              {/* Gold accent */}
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl gold-gradient opacity-80 -z-10" />
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div>
              <h3 className="jcwmm-h3 text-royal-900 mb-6">Who We Are</h3>
              <p className="jcwmm-body text-gray-600 leading-relaxed mb-6">
                Judah Asher Ministries is a vibrant, Christ-centered church based in Hyderabad, Telangana.
                Founded on God's Word and prayer, we are committed to sharing the love, grace, and transforming power of Jesus Christ,
                leading people into a life of faith, hope, and purpose through the truth of the Gospel.
              </p>
              <p className="jcwmm-body text-gray-600 leading-relaxed mb-8">
                Whether you are seeking a spiritual home, healing, hope, or a deeper relationship with Jesus Christ, you are warmly welcomed into our church family.
                At Judah Asher Ministries, you will experience heartfelt worship, biblical teaching, passionate prayer, the power and guidance of the Holy Spirit,
                and genuine fellowship as we grow together in God's presence. We believe that nothing is impossible with God, and through faith in Jesus Christ, lives are transformed, prayers are answered, and His love continues to change hearts for His glory.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Cross, label: 'Christ-Centered' },
                  { icon: BookOpen, label: 'Word-driven' },
                  { icon: Flame, label: 'Spirit-Led' },
                  { icon: Sparkles, label: 'Power-Filled' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-royal-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-royal-700" />
                    </div>
                    <span className="jcwmm-small text-gray-700">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Mission & Vision */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-stretch">
  <SectionReveal delay={100}>
    <div className="relative flex flex-col h-full overflow-hidden rounded-3xl p-8 blue-gradient text-white shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
          <Target className="w-6 h-6 text-white" />
        </div>

        <h3 className="jcwmm-h3 mb-4">
          Our Mission
        </h3>

        <p className="jcwmm-body text-blue-100 leading-relaxed flex-1">
          {CHURCH_INFO.mission}
        </p>
      </div>
    </div>
  </SectionReveal>

  <SectionReveal delay={200}>
    <div className="relative flex flex-col h-full overflow-hidden rounded-3xl p-8 gold-gradient text-white shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/5 -translate-y-8 translate-x-8" />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
          <Eye className="w-6 h-6 text-white" />
        </div>

        <h3 className="jcwmm-h3 mb-4">
          Our Vision
        </h3>

        <p className="jcwmm-body text-amber-100 leading-relaxed flex-1">
          {CHURCH_INFO.vision}
        </p>
      </div>
    </div>
  </SectionReveal>
</div>

        {/* ── Prophet section (inline) ── */}
        <div id="pastor" className="mb-24 scroll-mt-24">
          <SectionReveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 dark-badge-bg text-gold-700 dark-badge-text jcwmm-eyebrow mb-4">
              Leadership
            </span>
            <h2 className="jcwmm-h2 mb-4">
              A Message from <span className="jcwmm-yellow-heading">Our Prophet</span>
            </h2>
          </SectionReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Photo */}
              <SectionReveal className="lg:col-span-2" delay={100}>
                <div className="relative">
                  <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-royal-900/20 bg-white dark-card">
                    <Image
                      src="/images/Prophet.png"
                      alt="Prophet Judah Asher (Naresh) — JAM"
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="jcwmm-h3">Prophet Judah Asher</h3>
                      <p className="jcwmm-caption text-blue-200">Naresh · Founder & Lead Prophet, Judah Asher Ministries</p>
                    </div>
                  </div>
                  {/* Decorative gold card */}
                  <div className="absolute -bottom-4 -right-4 bg-white dark-card rounded-2xl shadow-xl p-4 border border-gold-100 dark-border">
                    <div className="jcwmm-h2">18+</div>
                    <div className="jcwmm-caption text-gray-500 dark-muted">Years in Ministry</div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl gold-gradient opacity-70" />
                </div>
              </SectionReveal>

              {/* Message */}
              <SectionReveal className="lg:col-span-3" delay={200}>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 w-12 h-12 text-royal-200 dark-muted-icon -z-10" />
                  <div className="bg-white dark-card rounded-3xl p-8 shadow-xl shadow-royal-100/50 border border-royal-50 dark-border">
                    <h3 className="jcwmm-h3 text-royal-900 dark-heading mb-6">
                      Welcome to Our Church Family
                    </h3>
                    <div className="space-y-4 jcwmm-body text-gray-700 dark-body leading-relaxed">
                      <p>
                        Beloved friend, it is with great joy and a heart full of gratitude that I welcome
                        you to Judah Asher Ministries. Whether you are joining us for the
                        first time or have been part of our family for years — you are deeply loved,
                        valued, and wanted here.
                      </p>
                      <p>
                        Our ministry was born out of a hunger for God's Word and a passion to see
                        miracles unfold in people's lives. We believe that the same Jesus who healed the
                        sick, opened blind eyes, and raised the dead is alive and at work today — and
                        He desires to move powerfully in <em>your</em> life.
                      </p>
                      <p>
                        I invite you to come, open your heart, and experience the transforming presence
                        of our Lord Jesus Christ. Come as you are — He accepts you, loves you, and has
                        a beautiful plan for your life.
                      </p>
                      <p className="font-semibold text-royal-900 dark-heading">
                        We look forward to worshipping together with you and walking this journey of
                        faith side by side.
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-100 dark-border flex items-center justify-between">
                      <div>
                        <div className="font-poppins font-bold text-royal-900 dark-heading">God Bless You,</div>
                        <div className="font-inter text-gray-500 dark-muted text-sm">Prophet Judah Asher (Naresh)</div>
                        <div className="font-inter text-royal-500 dark-accent text-xs">Founder & Lead Prophet, Judah Asher Ministries</div>
                      </div>
                      <div className="px-5 py-2.5 rounded-xl blue-gradient text-white font-poppins font-semibold text-sm cursor-default">
                        Est. 2008
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>

        {/* ── Prophet & Prophetess Couple section (inline) ── */}
        <div id="prophetess" className="mb-24 scroll-mt-24">
          <SectionReveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 dark-badge-bg text-gold-700 dark-badge-text jcwmm-eyebrow mb-4">
              Our Family
            </span>
            <h2 className="jcwmm-h2 mb-4">
              A Word from <span className="jcwmm-yellow-heading">Our Prophet & Prophetess</span>
            </h2>
          </SectionReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Couple Photo */}
              <SectionReveal className="lg:col-span-2" delay={100}>
                <div className="relative">
                  <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-royal-900/20 bg-gradient-to-br from-royal-50 to-gold-50 dark-card">
                    <Image
                      src="/images/both_pic.png"
                      alt="Prophet Judah Asher & Prophetess Judah Praisy — JAM Founders"
                      fill
                      sizes="(max-width: 768px) 80vw, 40vw"
                      className="object-cover object-top"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-royal-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-poppins font-bold text-xl">Prophet Judah Asher &amp; Prophetess Judah Praisy</h3>
                      <p className="font-inter text-blue-200 text-sm">Founders, Judah Asher Ministries</p>
                    </div>
                  </div>
                  {/* Decorative gold accent */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl gold-gradient opacity-70" />
                  <div className="absolute -bottom-4 -right-4 bg-white dark-card rounded-2xl shadow-xl p-4 border border-gold-100 dark-border">
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-gold-500" />
                      <div>
                        <div className="jcwmm-caption text-royal-900 dark-heading">One in Christ</div>
                        <div className="jcwmm-caption text-gray-500 dark-muted">A Family of Faith</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              {/* Message */}
              <SectionReveal className="lg:col-span-3" delay={200}>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-2 w-12 h-12 text-royal-200 dark-muted-icon -z-10" />
                  <div className="bg-white dark-card rounded-3xl p-8 shadow-xl shadow-royal-100/50 border border-royal-50 dark-border">
                    <h3 className="font-poppins font-bold text-2xl text-royal-900 dark-heading mb-6">
                      Together in Love &amp; Ministry
                    </h3>
                    <div className="space-y-4 font-inter text-gray-700 dark-body leading-relaxed text-[1.0625rem]">
                      <p>
                        Beloved, it is with hearts full of gratitude that we welcome you into our church family.
                        God has called us to walk together — not just as husband and wife, but as servants of His
                        Kingdom — to love, pray, and minister to every soul He brings our way.
                      </p>
                      <p>
                        We believe that a family built on Christ is a powerful testimony of His grace. Our prayer
                        is that every home that connects with Judah Asher Ministries would experience the same love, unity, and
                        restoration that God has so graciously poured into ours.
                      </p>
                      <p>
                        Come, let us journey together in faith. Whatever you are facing, know that you are not
                        alone — God is with you, and so are we.
                      </p>
                      <p className="font-semibold text-royal-900 dark-heading">
                        We love you, and we are praying for you every single day.
                      </p>
                    </div>
                     <div className="mt-8 pt-6 border-t border-gray-100 dark-border flex items-center justify-between">
                      <div>
                        <div className="font-poppins font-bold text-royal-900 dark-heading">With Love,</div>
                        <div className="font-inter text-gray-500 dark-muted text-sm">Prophet Judah Asher &amp; Prophetess Judah Praisy</div>
                        <div className="font-inter text-royal-500 dark-accent text-xs">Founders, Judah Asher Ministries</div>
                      </div>
                      <div className="px-5 py-2.5 rounded-xl gold-gradient text-white font-poppins font-semibold text-sm cursor-default">
                        Est. 2008
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>

        {/* ── Core Beliefs ── */}
        <SectionReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 text-xs font-semibold font-inter uppercase tracking-wider mb-4">
            What We Believe
          </span>
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl text-royal-900">
            Our Core Beliefs
          </h3>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_BELIEFS.map((belief, index) => {
            const Icon = iconMap[belief.icon] || BookOpen;
            return (
              <SectionReveal key={belief.title} delay={index * 80}>
                <div className="bg-white rounded-2xl p-6 shadow-lg shadow-royal-100/50 border border-royal-50 card-hover group">
                  <div className="w-12 h-12 rounded-xl blue-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-poppins font-semibold text-lg text-royal-900 mb-3">{belief.title}</h4>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed">{belief.description}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
