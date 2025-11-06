import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-6"
      style={{ backgroundColor: '#010101' }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/sh-logo.png"
            alt="Sharper Human"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>

        {/* Navigation - placeholder for future */}
        <nav className="flex items-center gap-8">
          {/* Add navigation items here later */}
        </nav>
      </div>
    </header>
  );
}