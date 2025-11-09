'use client';

import { useState } from 'react';

export default function WhosThisForSection() {
  const [openSection, setOpenSection] = useState<string>('personal-story');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Full width header */}
        <h2
          className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-12 text-center"
          style={{
            fontWeight: 100,
            letterSpacing: '-0.02em',
            color: '#fff'
          }}
        >
          Who&apos;s This For? - &ldquo;Brain Performance & Longevity&rdquo;<br />Focus for Decades not Minutes
        </h2>

        {/* Two column layout - Intro on LEFT, Accordion on RIGHT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* LEFT column - intro */}
          <div className="flex-[0.45]">
            <p
              className="text-[clamp(1rem,2vw,1.15rem)]"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              When your brain is healthy and functioning optimally, you naturally find it easier to make higher quality decisions for longer periods. Sharper Human is a leading all-natural brain enhancement supplement developed specifically for founders, entrepreneurs and business owners to enhance focus and boost brain longevity.
            </p>
          </div>

          {/* RIGHT column - Accordion */}
          <div className="flex-[0.55] space-y-4 flex flex-col justify-center">
            {/* Accordion Item 1: The Personal Story */}
            <div
              className="border-b border-[#333] pb-4"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleSection('personal-story')}
            >
              <div className="flex items-center justify-between mb-1">
                <h3
                  className="text-[clamp(1.1rem,2vw,1.3rem)]"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#fff'
                  }}
                >
                  The Personal Story
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === 'personal-story' ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block'
                  }}
                >
                  +
                </span>
              </div>
              {openSection === 'personal-story' && (
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)] animate-fade-in-up"
                  style={{
                    color: '#fff',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  &ldquo;I built this product for myself and my dad. I&apos;ve been an entrepreneur for 15 years and demand peak performance and focus. But for my dad, I wanted something that would give him a healthier brain for longer, improve his memory, and help offset the cognitive decline that was starting to appear. That&apos;s why Sharper Human has focused on both immediate performance AND longevity from day one - to stay sharp and keep the ones you love sharp around you too.&rdquo;
                </p>
              )}
            </div>

            {/* Accordion Item 2: Our Mission */}
            <div
              className="border-b border-[#333] pb-4"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleSection('mission')}
            >
              <div className="flex items-center justify-between mb-1">
                <h3
                  className="text-[clamp(1.1rem,2vw,1.3rem)]"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#fff'
                  }}
                >
                  Our Mission
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === 'mission' ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block'
                  }}
                >
                  +
                </span>
              </div>
              {openSection === 'mission' && (
                <div className="space-y-6 animate-fade-in-up">
                  <p
                    className="text-[clamp(1rem,2vw,1.15rem)]"
                    style={{
                      color: '#fff',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7
                    }}
                  >
                    As a result, 5% of profits go to brain health related charities supporting Alzheimer&apos;s, Parkinson&apos;s, and brain health research.
                  </p>
                  <p
                    className="text-[clamp(1rem,2vw,1.15rem)]"
                    style={{
                      color: '#fff',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7
                    }}
                  >
                    If your brain works optimally and you feel sharper, making better decisions throughout the day becomes effortless - whether that&apos;s choosing the right business strategy or maintaining the discipline to hit the gym. These benefits stack up exponentially, accelerating your progress as a human.
                  </p>
                </div>
              )}
            </div>

            {/* Accordion Item 3: Who This Is For */}
            <div
              className="border-b border-[#333] pb-4"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleSection('who-for')}
            >
              <div className="flex items-center justify-between mb-1">
                <h3
                  className="text-[clamp(1.1rem,2vw,1.3rem)]"
                  style={{
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: '#fff'
                  }}
                >
                  Who This Is For
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === 'who-for' ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block'
                  }}
                >
                  +
                </span>
              </div>
              {openSection === 'who-for' && (
                <ul className="space-y-4 animate-fade-in-up">
                  <li
                    className="text-[clamp(1rem,2vw,1.15rem)] flex gap-4"
                    style={{
                      color: '#fff',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7
                    }}
                  >
                    <span style={{ color: '#666', flexShrink: 0 }}>•</span>
                    <span><span style={{ fontWeight: 600 }}>Entrepreneurs + Founders</span> seeking sustainable cognitive enhancement without the dips of caffeine or nicotine.</span>
                  </li>
                  <li
                    className="text-[clamp(1rem,2vw,1.15rem)] flex gap-4"
                    style={{
                      color: '#fff',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7
                    }}
                  >
                    <span style={{ color: '#666', flexShrink: 0 }}>•</span>
                    <span><span style={{ fontWeight: 600 }}>Business leaders</span> who think in terms of decades, not quarters.</span>
                  </li>
                  <li
                    className="text-[clamp(1rem,2vw,1.15rem)] flex gap-4"
                    style={{
                      color: '#fff',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7
                    }}
                  >
                    <span style={{ color: '#666', flexShrink: 0 }}>•</span>
                    <span><span style={{ fontWeight: 600 }}> High performers</span> who refuse to accept mental fatigue as normal.</span>
                  </li>
                  <li
                    className="text-[clamp(1rem,2vw,1.15rem)] flex gap-4"
                    style={{
                      color: '#fff',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.7
                    }}
                  >
                    <span style={{ color: '#666', flexShrink: 0 }}>•</span>
                    <span>Anyone who wants to become sharper in their profession, <span style={{ fontWeight: 600 }}>sharper trader, sharper leader, sharper father, sharper human.</span></span>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}