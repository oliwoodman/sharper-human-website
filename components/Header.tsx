import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-8 md:px-12 py-4"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/SHARPER HUMAN_logo_Logo compact-black.png"
            alt="Sharper Human"
            width={4168}
            height={647}
            className="h-10 w-auto"
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