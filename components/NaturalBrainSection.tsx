export default function NaturalBrainSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20">
          {/* Left column - Header and Description */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              An All Natural Brain Performance Supplement for Founders & Entrepreneurs
            </h2>
            <p
              className="text-[clamp(1rem,2vw,1.15rem)]"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              We built Sharper Human to help business owners improve focus, cognition and clear thinking while simultaneously supporting long-term brain health, <span style={{ fontWeight: 600 }}>WITHOUT</span> the use of caffeine or stimulants.
            </p>
          </div>

          {/* Right column - Three core drivers */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-[500px]">
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-10"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
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
                    color: '#666',
                    lineHeight: 1
                  }}
                >
                  1.
                </span>
                <div>
                  <h4
                    className="text-[clamp(1.1rem,2vw,1.25rem)] mb-2"
                    style={{
                      fontWeight: 300,
                      color: '#fff',
                      letterSpacing: '0.01em'
                    }}
                  >
                    Enhance Cognition
                  </h4>
                  <p
                    className="text-[clamp(0.95rem,2vw,1.05rem)]"
                    style={{
                      color: '#999',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.6
                    }}
                  >
                    Think more clearly, become more effective.
                  </p>
                </div>
              </div>

              {/* Driver 2 */}
              <div className="flex gap-6">
                <span
                  className="text-[2rem] flex-shrink-0"
                  style={{
                    fontWeight: 100,
                    color: '#666',
                    lineHeight: 1
                  }}
                >
                  2.
                </span>
                <div>
                  <h4
                    className="text-[clamp(1.1rem,2vw,1.25rem)] mb-2"
                    style={{
                      fontWeight: 300,
                      color: '#fff',
                      letterSpacing: '0.01em'
                    }}
                  >
                    Improve Focus & Memory
                  </h4>
                  <p
                    className="text-[clamp(0.95rem,2vw,1.05rem)]"
                    style={{
                      color: '#999',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.6
                    }}
                  >
                    Sustain attention and recall with precision
                  </p>
                </div>
              </div>

              {/* Driver 3 */}
              <div className="flex gap-6">
                <span
                  className="text-[2rem] flex-shrink-0"
                  style={{
                    fontWeight: 100,
                    color: '#666',
                    lineHeight: 1
                  }}
                >
                  3.
                </span>
                <div>
                  <h4
                    className="text-[clamp(1.1rem,2vw,1.25rem)] mb-2"
                    style={{
                      fontWeight: 300,
                      color: '#fff',
                      letterSpacing: '0.01em'
                    }}
                  >
                    Brain Longevity
                  </h4>
                  <p
                    className="text-[clamp(0.95rem,2vw,1.05rem)]"
                    style={{
                      color: '#999',
                      fontWeight: 300,
                      letterSpacing: '0.01em',
                      lineHeight: 1.6
                    }}
                  >
                    Help slow brain degradation and aging
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}