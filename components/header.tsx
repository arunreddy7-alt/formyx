"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Header({
  onContact,
}: {
  onContact: () => void
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (id: string) => {
    // If not on homepage, go home first, wait a bit, then scroll
    if (pathname !== "/") {
      router.push(`/#${id}`)
      setIsMobileMenuOpen(false)
      return
    }

    const el = document.getElementById(id)
    if (!el) {
      setIsMobileMenuOpen(false)
      return
    }
    const offset = el.getBoundingClientRect().top + window.scrollY - 120
    window.scrollTo({ top: offset, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const NAV_ITEMS = [
    { label: "Capabilities", id: "features" },
    { label: "Process", id: "process" },
    { label: "Use Cases", id: "usage" },
    { label: "Live Examples", href: "/live-examples" },
    { label: "Blogs", href: "/blogs" },
  ]
  

  return (
    <>
      {/* ================= DESKTOP HEADER ================= */}
      <header
        className={`sticky top-4 z-998 mx-auto hidden w-full items-center justify-between rounded-full
        bg-black/70 backdrop-blur-sm border border-white/15 shadow-lg transition-all duration-300 md:flex
        ${isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"} py-2`}
      >
        <Link
          href="/"
          className={`font-semibold tracking-wide text-white cursor-pointer ${
            isScrolled ? "ml-4" : ""
          }`}
        >
          FORMYX
        </Link>

        <nav className="pointer-events-none absolute inset-0 hidden items-center justify-center gap-2 text-sm font-medium text-white/60 md:flex">
          {NAV_ITEMS.map((item) => (
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="pointer-events-auto px-4 py-2 cursor-pointer transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as string)}
                className="pointer-events-auto px-4 py-2 cursor-pointer transition-colors hover:text-white"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onContact}
            className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white
              bg-gradient-to-b from-[#610094] to-[#3F0071]
              shadow-md transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className="sticky top-4 z-[9999] mx-4 flex items-center justify-between rounded-full
        bg-black/70 backdrop-blur-sm border border-white/15 shadow-lg px-4 py-3 md:hidden"
      >
        <Link href="/" className="font-semibold tracking-wide text-white">FORMYX</Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col justify-center w-5 h-5 space-y-1">
            <span
              className={`block h-0.5 w-4 bg-white transition-all ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-white transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-4 bg-white transition-all ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-998 bg-black/90 backdrop-blur flex flex-col items-center justify-center gap-6 text-white text-lg">
          {NAV_ITEMS.map((item) => (
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer transition-colors hover:text-[#610094]"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as string)}
                className="cursor-pointer transition-colors hover:text-[#610094]"
              >
                {item.label}
              </button>
            )
          ))}

          <button
            onClick={() => {
              setIsMobileMenuOpen(false)
              onContact()
            }}
            className="cursor-pointer text-[#610094] font-medium"
          >
            Contact
          </button>
        </div>
      )}
    </>
  )
}