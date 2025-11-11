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
          className="text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] mb-8 text-center"
          style={{
            fontWeight: 200,
            letterSpacing: '-0.02em',
            color: '#fff'
          }}
        >
          Who&apos;s This For? - &ldquo;Brain Performance & Longevity&rdquo;<br />Focus for Decades not Minutes
        </h2>

        {/* Full width intro paragraph */}
        <p
          className="text-[clamp(1rem,2vw,1.15rem)] text-center max-w-[1000px] mx-auto mb-16"
          style={{
            color: '#fff',
            fontWeight: 400,
            letterSpacing: '0.01em',
            lineHeight: 1.8
          }}
        >
          When your brain is healthy and functioning optimally, you naturally find it easier to make higher quality decisions for longer periods. Sharper Human is a leading all-natural brain enhancement supplement developed specifically for founders, entrepreneurs and business owners to enhance focus and boost brain longevity.
        </p>

        {/* Two column layout - Accordion buttons on LEFT, Content on RIGHT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* LEFT column - Accordion buttons only */}
          <div className="flex-[0.4] space-y-4">
            {/* Accordion Item 1: The Personal Story */}
            <div
              className="pb-4 cursor-pointer transition-all duration-200 hover:opacity-70"
              style={{
                borderBottom: openSection === 'personal-story' ? '2px solid #fff' : '1px solid #333'
              }}
              onClick={() => toggleSection('personal-story')}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-[clamp(1.2rem,2vw,1.4rem)] transition-opacity duration-200"
                  style={{
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: '#fff',
                    opacity: openSection === 'personal-story' ? 1 : 0.6
                  }}
                >
                  The Personal Story
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === 'personal-story' ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    opacity: openSection === 'personal-story' ? 1 : 0.6
                  }}
                >
                  +
                </span>
              </div>
            </div>

            {/* Accordion Item 2: Our Mission */}
            <div
              className="pb-4 cursor-pointer transition-all duration-200 hover:opacity-70"
              style={{
                borderBottom: openSection === 'mission' ? '2px solid #fff' : '1px solid #333'
              }}
              onClick={() => toggleSection('mission')}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-[clamp(1.2rem,2vw,1.4rem)] transition-opacity duration-200"
                  style={{
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: '#fff',
                    opacity: openSection === 'mission' ? 1 : 0.6
                  }}
                >
                  Our Mission
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === 'mission' ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    opacity: openSection === 'mission' ? 1 : 0.6
                  }}
                >
                  +
                </span>
              </div>
            </div>

            {/* Accordion Item 3: Who This Is For */}
            <div
              className="pb-4 cursor-pointer transition-all duration-200 hover:opacity-70"
              style={{
                borderBottom: openSection === 'who-for' ? '2px solid #fff' : '1px solid #333'
              }}
              onClick={() => toggleSection('who-for')}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-[clamp(1.2rem,2vw,1.4rem)] transition-opacity duration-200"
                  style={{
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    color: '#fff',
                    opacity: openSection === 'who-for' ? 1 : 0.6
                  }}
                >
                  Who This Is For
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === 'who-for' ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    opacity: openSection === 'who-for' ? 1 : 0.6
                  }}
                >
                  +
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT column - Content display area */}
          <div className="flex-[0.6] flex items-start">
            {openSection === 'personal-story' && (
              <div className="animate-fade-in-up w-full">
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  &ldquo;I built this product for myself and my dad. I&apos;ve been an entrepreneur for 15 years and demand peak performance and focus. But for my dad, I wanted something that would give him a healthier brain for longer, improve his memory, and help offset the cognitive decline that was starting to appear. That&apos;s why Sharper Human has focused on both immediate performance AND longevity from day one - to stay sharp and keep the ones you love sharp around you too.&rdquo;
                </p>
              </div>
            )}

            {openSection === 'mission' && (
              <div className="space-y-5 animate-fade-in-up w-full">
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 400,
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
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  If your brain works optimally and you feel sharper, making better decisions throughout the day becomes effortless - whether that&apos;s choosing the right business strategy or maintaining the discipline to hit the gym. These benefits stack up exponentially, accelerating your progress as a human.
                </p>
              </div>
            )}

            {openSection === 'who-for' && (
              <div className="space-y-5 animate-fade-in-up w-full">
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Entrepreneurs + Founders</span> seeking sustainable cognitive enhancement without the dips of caffeine or nicotine.
                </p>
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Business leaders</span> who think in terms of decades, not quarters.
                </p>
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  <span style={{ fontWeight: 600 }}>High performers</span> who refuse to accept mental fatigue as normal.
                </p>
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 400,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  Anyone who wants to become sharper in their profession, <span style={{ fontWeight: 600 }}>sharper trader, sharper leader, sharper father, sharper human.</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}