export default function DosageSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Header/Intro on LEFT, Problem/Solution on RIGHT */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          {/* LEFT column - Header and intro text */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Dosage Matters - What Most Get Wrong
            </h2>
            <div className="space-y-6">
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                Our dosages are <span style={{ fontWeight: 600 }}>higher than many</span> but <span style={{ fontWeight: 600 }}>strategically lower than clinical studies</span> for one critical reason: <span style={{ fontWeight: 600 }}>longevity</span>.
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
                <span style={{ fontWeight: 600 }}>Clinical trials use higher dosages because timeframes are shorter.</span> We're building focus for decades, not just days or weeks. Each ingredient is dosed at the <span style={{ fontWeight: 600 }}>minimum effective level</span> to avoid the pitfalls of long-term overdosing while ensuring therapeutic benefit.
              </p>
            </div>
          </div>

          {/* RIGHT column - Problem and Solution stacked */}
          <div className="flex-1 space-y-10">
            {/* The Industry Problem */}
            <div>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-6"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}
              >
                The Industry Problem:
              </h3>
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                Most brands either under-dose ingredients below the Minimum Effective Dose making benefits negligible (usually to save cost) or over-dose for short-term "feel-good" effects of easily "feel-able" nootropics that aren't sustainable (such as caffeine).
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-6"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}
              >
                Our Solution:
              </h3>
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                All dosages are pulled directly from peer-reviewed scientific studies, optimized for both immediate cognitive enhancement and long-term brain health, confirmed by multiple nootropic experts in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}