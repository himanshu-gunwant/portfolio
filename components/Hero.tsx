import Image from "next/image";
import { siteConfig } from "@/data/site";
import { SocialLinks } from "./SocialLinks";

export function Hero() {
  return (
    <header className="animate-enter delay-1 flex flex-row items-center gap-5 sm:gap-6">
      <a
        href="/profile.jpg"
        target="_blank"
        rel="noopener noreferrer"
        title="Open high-quality profile photo"
        aria-label="Open high-quality profile photo in a new tab"
        className="group relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 block rounded-2xl sm:rounded-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
      >
        <Image
          src={siteConfig.avatar}
          alt={`${siteConfig.name}'s profile avatar`}
          width={112}
          height={112}
          sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
          priority
          className="w-full h-full rounded-2xl sm:rounded-[24px] object-cover ring-1 ring-white/10 group-hover:ring-white/30 group-hover:scale-[1.02] transition-all duration-200 shadow-sm"
        />
      </a>

      <div className="space-y-1 sm:space-y-1.5 min-w-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-muted font-normal tracking-normal leading-snug">
          {siteConfig.tagline}
        </p>
        <div className="pt-1">
          <SocialLinks links={siteConfig.socials} />
        </div>
      </div>
    </header>
  );
}
