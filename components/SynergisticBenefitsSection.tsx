export default function SynergisticBenefitsSection() {
  const benefits = [
    {
      title: "Physical Performance",
      description: "Phosphatidylserine has shown improvements in runners, cyclists, and golfers. Rhodiola Rosea links to enhanced strength outputs and endurance."
    },
    {
      title: "Vision Enhancement",
      description: "Lutein accumulates in brain regions crucial for visual processing speed and eye health."
    },
    {
      title: "Stress & Anxiety Reduction",
      description: "Multiple ingredients provide adaptogenic stress relief and anxiety reduction."
    },
    {
      title: "Mood Optimization",
      description: "L-Tyrosine supports improved mood and helps with ADHD/ADD symptoms."
    },
    {
      title: "Enhanced Libido",
      description: "Rhodiola Rosea and Acetyl-L-Carnitine have been linked to improved sex drive and reduced ED."
    },
    {
      title: "Flow State Access",
      description: "Users report easier entry into and maintenance of flow states, leading to enhanced productivity across all domains."
    }
  ];

  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-16">
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
            Sharper Human ingredients have been linked to multiple benefits beyond brain performance:
          </p>
        </div>

        {/* 2x3 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index}>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-4"
                style={{
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  color: '#fff'
                }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-[clamp(0.95rem,1.8vw,1.05rem)]"
                style={{
                  color: '#ccc',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6
                }}
              >
                {benefit.description}
              </p>
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