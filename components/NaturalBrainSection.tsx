export default function NaturalBrainSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Brain image on left, white box on right */}
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Left column - Brain image with white outline and rounded left corners */}
          <div className="flex-[0.7] flex items-center justify-center">
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderTop: '2px solid #fff',
                borderBottom: '2px solid #fff',
                borderLeft: '2px solid #fff',
                borderTopLeftRadius: '1rem',
                borderBottomLeftRadius: '1rem'
              }}
            >
              <img
                src="/images/brain visual.png"
                alt="Brain Visual"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right column - White box with all content and rounded right corners */}
          <div
            className="flex-1 p-8 md:p-10 lg:p-12"
            style={{
              backgroundColor: '#fff',
              borderTopRightRadius: '1rem',
              borderBottomRightRadius: '1rem'
            }}
          >
            {/* Header */}
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#1a1a1a'
              }}
            >
              An All Natural Brain Performance Supplement for<br />Founders & Entrepreneurs
            </h2>

            {/* Description */}
            <p
              className="text-[clamp(1.1rem,2vw,1.3rem)] mb-12"
              style={{
                color: '#1a1a1a',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              We built Sharper Human to help business owners improve focus, cognition and clear thinking while simultaneously supporting long-term brain health, <span style={{ fontWeight: 600 }}>WITHOUT</span> the use of caffeine or stimulants.
            </p>

            {/* Three core drivers */}
            <h3
              className="text-[clamp(1.1rem,2vw,1.3rem)] mb-10"
              style={{
                fontWeight: 300,
                letterSpacing: '0.01em',
                color: '#000'
              }}
            >
              Our 3 Core Drivers:
            </h3>

            <div className="space-y-8">
              {/* Driver 1 */}
              <div className="flex gap-6">
                <span
                  className="text-[2rem] flex-shrink-0"
                  style={{
                    fontWeight: 100,
                    color: '#000',
                    lineHeight: 1
                  }}
                >
                  1.
                </span>
                <p
                  className="text-[clamp(1.1rem,2vw,1.25rem)]"
                  style={{
                    fontWeight: 300,
                    color: '#000',
                    letterSpacing: '0.01em',
                    lineHeight: 1.6
                  }}
                >
                  Enhance Cognition - <span style={{ color: '#666' }}>Think more clearly, become more effective.</span>
                </p>
              </div>

              {/* Driver 2 */}
              <div className="flex gap-6">
                <span
                  className="text-[2rem] flex-shrink-0"
                  style={{
                    fontWeight: 100,
                    color: '#000',
                    lineHeight: 1
                  }}
                >
                  2.
                </span>
                <p
                  className="text-[clamp(1.1rem,2vw,1.25rem)]"
                  style={{
                    fontWeight: 300,
                    color: '#000',
                    letterSpacing: '0.01em',
                    lineHeight: 1.6
                  }}
                >
                  Improve Focus & Memory - <span style={{ color: '#666' }}>Sustain attention and recall with precision</span>
                </p>
              </div>

              {/* Driver 3 */}
              <div className="flex gap-6">
                <span
                  className="text-[2rem] flex-shrink-0"
                  style={{
                    fontWeight: 100,
                    color: '#000',
                    lineHeight: 1
                  }}
                >
                  3.
                </span>
                <p
                  className="text-[clamp(1.1rem,2vw,1.25rem)]"
                  style={{
                    fontWeight: 300,
                    color: '#000',
                    letterSpacing: '0.01em',
                    lineHeight: 1.6
                  }}
                >
                  Brain Longevity - <span style={{ color: '#666' }}>Help slow brain degradation and aging</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}