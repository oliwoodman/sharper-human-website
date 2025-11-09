'use client';

import { useState } from 'react';

export default function SynergisticBenefitsSection() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const benefits = [
    {
      id: 'physical',
      title: "Physical Performance",
      description: "Phosphatidylserine has shown improvements in runners, cyclists, and golfers. Rhodiola Rosea links to enhanced strength outputs and endurance."
    },
    {
      id: 'vision',
      title: "Vision Enhancement",
      description: "Lutein accumulates in brain regions crucial for visual processing speed and eye health."
    },
    {
      id: 'stress',
      title: "Stress & Anxiety Reduction",
      description: "Multiple ingredients provide adaptogenic stress relief and anxiety reduction."
    },
    {
      id: 'mood',
      title: "Mood Optimization",
      description: "L-Tyrosine supports improved mood and helps with ADHD/ADD symptoms."
    },
    {
      id: 'libido',
      title: "Enhanced Libido",
      description: "Rhodiola Rosea and Acetyl-L-Carnitine have been linked to improved sex drive and reduced ED."
    },
    {
      id: 'flow',
      title: "Flow State Access",
      description: "Users report easier entry into and maintenance of flow states, leading to enhanced productivity across all domains."
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-6"
            style={{
              fontWeight: 100,
              letterSpacing: '-0.02em',
              color: '#fff'
            }}
          >
            Synergistic Benefits Beyond Focus & Longevity
          </h2>
          <p
            className="text-[clamp(1rem,2vw,1.15rem)] max-w-[900px] mx-auto"
            style={{
              color: '#fff',
              fontWeight: 300,
              letterSpacing: '0.01em',
              lineHeight: 1.7
            }}
          >
            Sharper Human ingredients have been linked to multiple benefits beyond brain performance
          </p>
        </div>

        {/* Centered Accordion Layout */}
        <div className="max-w-[900px] mx-auto space-y-4 mb-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="border-b border-[#333] pb-4"
              style={{ cursor: 'pointer' }}
              onClick={() => toggleSection(benefit.id)}
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
                  {benefit.title}
                </h3>
                <span
                  className="text-[1.5rem] transition-transform duration-300"
                  style={{
                    color: '#fff',
                    transform: openSection === benefit.id ? 'rotate(45deg)' : 'rotate(0deg)',
                    display: 'inline-block'
                  }}
                >
                  +
                </span>
              </div>
              {openSection === benefit.id && (
                <p
                  className="text-[clamp(1rem,2vw,1.15rem)] animate-fade-in-up mt-4"
                  style={{
                    color: '#fff',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                    lineHeight: 1.7
                  }}
                >
                  {benefit.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p
          className="text-[clamp(0.9rem,1.8vw,1rem)] text-center"
          style={{
            color: '#999',
            fontWeight: 300,
            letterSpacing: '0.01em',
            fontStyle: 'italic'
          }}
        >
          Complete research documentation available on our ingredient detail pages.
        </p>
      </div>
    </section>
  );
}