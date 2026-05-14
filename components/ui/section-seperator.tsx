"use client"

interface SectionHeaderProps {
  badgeText: string
  accentColor?: string
}

export function SectionSeperator({
  badgeText,
  accentColor = "#3F0071",
}: SectionHeaderProps) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="
          group relative z-60 mx-auto
          rounded-full
          border border-white/20
          bg-white/5
          px-8 py-2
          backdrop-blur
          transition-all duration-300
          hover:scale-[1.06]
          hover:shadow-2xl
          active:scale-100
        "
      >
        {/* Top hairline */}
        <div
          className="
            absolute inset-x-0 -top-px mx-auto
            h-[2px] w-2/3
            transition-all duration-500
            group-hover:w-4/5
          "
          style={{
            background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
          }}
        />

        {/* Bottom hairline */}
        <div
          className="
            absolute inset-x-0 -bottom-px mx-auto
            h-[2px] w-2/3
            transition-all duration-500
            group-hover:w-4/5
          "
          style={{
            background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
          }}
        />

        {/* Text */}
        <span
          className="
            relative
            text-sm md:text-base
            font-medium
            tracking-wide
          "
        >
          {badgeText}
        </span>
      </button>
    </div>
  )
}
