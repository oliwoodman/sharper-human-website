export default function QualityStandardsSection() {
  const standards = [
    {
      title: "Made in the EU",
      description: "All products manufactured in GMP-certified facilities with rigorous quality control as well as third-party-testing every batch."
    },
    {
      title: "Third-Party Tested",
      description: "Every batch undergoes independent testing for purity, potency, and contamination."
    },
    {
      title: "Sustainable & Ethical",
      description: "Our DHA is algae-derived (not fish-based), making it both environmentally sustainable and vegetarian-friendly."
    }
  ];

  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Title on LEFT, Standards on RIGHT */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* LEFT column - Header */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1]"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              What are Your Quality & Manufacturing Standards?
            </h2>
          </div>

          {/* RIGHT column - Three standards stacked */}
          <div className="flex-1 space-y-10">
            {standards.map((standard, index) => (
              <div key={index}>
                <h3
                  className="text-[clamp(1.1rem,2vw,1.3rem)] mb-4"
                  style={{
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    color: '#fff'
                  }}
                >
                  {standard.title}
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
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}