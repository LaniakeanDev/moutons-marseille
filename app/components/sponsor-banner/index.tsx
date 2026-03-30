"use client";

import Image from "next/image";


interface SponsorBannerProps {
  sponsors: Sponsor[];
  speed?: number; // seconds for one complete cycle
  gap?: number;
}

export default function SponsorBanner({ 
  sponsors, 
  speed = 30, 
  gap = 48 
}: SponsorBannerProps) {
  // Duplicate sponsors for seamless loop
  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    // <div className="relative w-full overflow-hidden bg-gray-50 py-8 sponsor-banner">
    <div className="relative w-full overflow-hidden py-8">
      <div 
        className="flex animate-scroll"
        style={{ 
          gap: `${gap}px`,
          animationDuration: `${speed}s`
        }}
      >
        {duplicatedSponsors.map((sponsor, index) => (
          <a
            key={`sponsor-${String(index)}`}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 transition-opacity hover:opacity-70"
          >
            <div className="relative h-12 w-32 md:h-16 md:w-40">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll linear infinite;
          width: fit-content;
        }
      `}</style>
    </div>
  );
}