import Image from 'next/image';

export default function SharperHumanLongerSection() {
  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Two column layout - Image on LEFT, Content on RIGHT */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* LEFT column - Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/images/bag.png"
              alt="Sharper Human Bag"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* RIGHT column - Header and Content */}
          <div className="flex-1">
            <h2
              className="text-[clamp(1.8rem,4.5vw,3.2rem)] leading-[1.1] mb-8"
              style={{
                fontWeight: 200,
                letterSpacing: '-0.02em',
                color: '#fff'
              }}
            >
              Brain Nutrition - &ldquo;A Sharper Human, for Longer&rdquo;
            </h2>

            <p
              className="text-[clamp(1.1rem,2vw,1.3rem)] mb-8"
              style={{
                color: '#fff',
                fontWeight: 300,
                letterSpacing: '0.01em',
                lineHeight: 1.4,
                fontStyle: 'italic'
              }}
            >
              The Best Version Of Yourself, For as Long As Possible.
            </p>

            <div className="space-y-5">
              <p
                className="text-[clamp(1rem,2vw,1.15rem)]"
                style={{
                  color: '#fff',
                  fontWeight: 400,
                  letterSpacing: '0.01em',
                  lineHeight: 1.7
                }}
              >
                Our natural nootropic stack contains ingredients that enhance memory, focus, mood, concentration and cognitive function while being neuroprotective and non-synthetic.
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
                This stack is designed for individuals looking to grow, learn, and become the best versions of themselves without relying on medications or synthetic drugs.
              </p>

              {/* Core Philosophy Callout */}
              <div className="mt-10 pt-6 pb-6 border-t border-b border-[#333]">
                <p
                  className="text-[clamp(1.1rem,2vw,1.3rem)]"
                  style={{
                    color: '#fff',
                    fontWeight: 300,
                    letterSpacing: '0.01em',
                    lineHeight: 1.4,
                    fontStyle: 'italic'
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Core Philosophy:</span> Make your brain - and hence YOU - better. Everything flows from enhanced cognitive capacity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}