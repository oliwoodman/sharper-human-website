export default function WhosThisForSection() {
  return (
    <section className="relative py-16 md:py-20 px-8 md:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Header/Story on LEFT, Mission/Benefits/Audience on RIGHT */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-20">
          {/* LEFT column - Header, intro, personal story */}
          <div className="flex-1">
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 100,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Who's This For? - "Brain Performance & Longevity" Focus for Decades not Minutes
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
                When your brain is healthy and functioning optimally, you naturally find it easier to make higher quality decisions for longer periods. Sharper Human is a leading all-natural brain enhancement supplement developed specifically for founders, entrepreneurs and business owners to enhance focus and boost brain longevity.
              </p>

              <div>
                <h3
                  className="text-[clamp(1.1rem,2vw,1.3rem)] mb-4"
                  style={{
                    fontWeight: 200,
                    letterSpacing: '0.05em',
                    color: '#fff'
                  }}
                >
                  The Personal Story:
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
                  "I built this product for myself and my dad. I've been an entrepreneur for 15 years and demand peak performance and focus. But for my dad, I wanted something that would give him a healthier brain for longer, improve his memory, and help offset the cognitive decline that was starting to appear. That's why Sharper Human has focused on both immediate performance AND longevity from day one - to stay sharp and keep the ones you love sharp around you too."
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT column - Mission, Benefits and target audience */}
          <div className="flex-1 space-y-10">
            <div>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-4"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}
              >
                Our Mission:
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
                As a result, 5% of profits go to brain health related charities supporting Alzheimer's, Parkinson's, and brain health research.
              </p>
            </div>

            <p
              className="text-[clamp(1rem,2vw,1.15rem)]"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.7
              }}
            >
              If your brain works optimally and you feel sharper, making better decisions throughout the day becomes effortless - whether that's choosing the right business strategy or maintaining the discipline to hit the gym. These benefits stack up exponentially, accelerating your progress as a human.
            </p>

            <div>
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-6"
                style={{
                  fontWeight: 200,
                  letterSpacing: '0.05em',
                  color: '#fff'
                }}
              >
                Who This Is For:
              </h3>

              <ul className="space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}