export default function ReviewsSection() {
  const reviews = [
    {
      name: "Constantinos Santis",
      role: "Trader",
      memberSince: "2024",
      image: "/images/placeholder-reviewer-1.jpg", // Placeholder
      quote: "One of the most unexpected benefits I've noticed is people commenting that I've been using my phone less. I'm not sure if this is due to finding it easier to get into flow state while trading, or just being more present in social situations, but it's a benefit I never expected that's been directly related to taking Sharper Human for the past few months."
    },
    {
      name: "Edward Bristow",
      role: "Ex Military",
      memberSince: "2024",
      image: "/images/placeholder-reviewer-2.jpg", // Placeholder
      quote: "[Testimonial coming soon - Edward's experience with focus, discipline, and mental clarity through transition from military to civilian life]"
    },
    {
      name: "[Name]",
      role: "Founder",
      memberSince: "2024",
      image: "/images/placeholder-reviewer-3.jpg", // Placeholder
      quote: "[Testimonial coming soon - Founder's experience with decision-making, productivity, and sustained focus]"
    }
  ];

  return (
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12" style={{ backgroundColor: '#010101' }}>
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] mb-4"
            style={{
              fontWeight: 100,
              letterSpacing: '-0.02em',
              color: '#fff'
            }}
          >
            Sharper Human Feedback & Reviews From Founders
          </h2>
          <h3
            className="text-[clamp(1.1rem,2vw,1.3rem)]"
            style={{
              fontWeight: 200,
              letterSpacing: '0.05em',
              color: '#fff',
              fontStyle: 'italic'
            }}
          >
            Real User Feedback
          </h3>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="mb-6 aspect-[4/3] relative overflow-hidden rounded-sm">
                <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>Image placeholder</span>
                </div>
              </div>

              {/* Name */}
              <h3
                className="text-[clamp(1.1rem,2vw,1.3rem)] mb-2"
                style={{
                  fontWeight: 300,
                  letterSpacing: '0.02em',
                  color: '#fff'
                }}
              >
                {review.name}
              </h3>

              {/* Role & Member Since */}
              <p
                className="text-[clamp(0.85rem,1.6vw,0.95rem)] mb-6"
                style={{
                  color: '#999',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase'
                }}
              >
                {review.role} • MEMBER SINCE {review.memberSince}
              </p>

              {/* Quote */}
              <p
                className="text-[clamp(0.95rem,1.8vw,1.05rem)]"
                style={{
                  color: '#ccc',
                  fontWeight: 300,
                  letterSpacing: '0.01em',
                  lineHeight: 1.6
                }}
              >
                &ldquo;{review.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
