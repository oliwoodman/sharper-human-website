export default function NaturalBrainSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#000' }}>
      <div className="max-w-[1200px] mx-auto">

        {/* Headline - split across two lines for impact */}
        <h2
          className="text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] mb-4 text-center"
          style={{
            fontWeight: 200,
            letterSpacing: '-0.02em',
            color: '#fff'
          }}
        >
          An All Natural Brain Performance Supplement for
        </h2>
        <h2
          className="text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] mb-12 text-center"
          style={{
            fontWeight: 200,
            letterSpacing: '-0.02em',
            color: '#fff'
          }}
        >
          Founders & Entrepreneurs
        </h2>

        {/* Subtle divider */}
        <div
          className="w-16 h-px mx-auto mb-16"
          style={{ backgroundColor: '#333' }}
        />

        {/* Three core drivers - clean horizontal layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 lg:gap-24 max-w-[1100px] mx-auto mb-16">
          {/* Driver 1 */}
          <div className="text-center">
            <div
              className="text-[0.7rem] mb-4"
              style={{
                fontWeight: 300,
                color: '#666',
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}
            >
              01
            </div>
            <h3
              className="text-[clamp(1.2rem,2vw,1.4rem)] mb-3"
              style={{
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '0.01em'
              }}
            >
              Enhance Cognition
            </h3>
            <p
              className="text-[clamp(0.95rem,1.8vw,1.05rem)]"
              style={{
                color: '#fff',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              Think more clearly, become more effective.
            </p>
          </div>

          {/* Driver 2 */}
          <div className="text-center">
            <div
              className="text-[0.7rem] mb-4"
              style={{
                fontWeight: 300,
                color: '#666',
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}
            >
              02
            </div>
            <h3
              className="text-[clamp(1.2rem,2vw,1.4rem)] mb-3"
              style={{
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '0.01em'
              }}
            >
              Improve Focus & Memory
            </h3>
            <p
              className="text-[clamp(0.95rem,1.8vw,1.05rem)]"
              style={{
                color: '#fff',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              Sustain attention and recall with precision
            </p>
          </div>

          {/* Driver 3 */}
          <div className="text-center">
            <div
              className="text-[0.7rem] mb-4"
              style={{
                fontWeight: 300,
                color: '#666',
                letterSpacing: '0.25em',
                textTransform: 'uppercase'
              }}
            >
              03
            </div>
            <h3
              className="text-[clamp(1.2rem,2vw,1.4rem)] mb-3"
              style={{
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '0.01em'
              }}
            >
              Brain Longevity
            </h3>
            <p
              className="text-[clamp(0.95rem,1.8vw,1.05rem)]"
              style={{
                color: '#fff',
                fontWeight: 400,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              Help slow brain degradation and aging
            </p>
          </div>
        </div>

        {/* Subtle divider */}
        <div
          className="w-16 h-px mx-auto mb-16"
          style={{ backgroundColor: '#333' }}
        />

        {/* Description - centered, refined */}
        <p
          className="text-[clamp(1rem,2vw,1.15rem)] text-center max-w-[800px] mx-auto"
          style={{
            color: '#fff',
            fontWeight: 400,
            letterSpacing: '0.01em',
            lineHeight: 1.7
          }}
        >
          We built Sharper Human to help business owners improve focus, cognition and clear thinking while simultaneously supporting long-term brain health, <span style={{ fontWeight: 600 }}>WITHOUT</span> the use of caffeine or stimulants.
        </p>
      </div>
    </section>
  );
}