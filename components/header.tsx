"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function Header({
  onContact,
}: {
  onContact: () => void
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 40)

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }
    
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
        className={`fixed top-0 left-0 right-0 z-[998] w-full hidden items-center justify-between
        border-b border-white/5 transition-all duration-300 md:flex px-8 py-4
        ${isScrolled ? "bg-[#050B14]/70 backdrop-blur-md" : "bg-transparent"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link
          href="/"
          className={`font-black italic tracking-tighter text-2xl text-[#F5F5F0] cursor-pointer`}
        >
          FORMYX
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden items-center justify-center gap-8 text-[15px] font-medium text-white/70 md:flex">
          {NAV_ITEMS.map((item) => (
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className="cursor-pointer transition-colors hover:text-[#F5F5F0]"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as string)}
                className="cursor-pointer transition-colors hover:text-[#F5F5F0]"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onContact}
            className="cursor-pointer rounded-md px-6 py-2 text-[15px] font-bold text-[#050B14] bg-[#F5F5F0] hover:bg-white transition-colors"
          >
            Contact Us
          </button>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] flex w-full items-center justify-between
        border-b border-white/5 transition-all duration-300 px-4 py-3 md:hidden
        ${isScrolled ? "bg-[#050B14]/70 backdrop-blur-md" : "bg-transparent"}
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <Link href="/" className="font-black italic tracking-tighter text-xl text-[#F5F5F0]">FORMYX</Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-md bg-white/5 border border-white/10"
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
        <div className="fixed inset-0 z-998 bg-[#050B14] flex flex-col items-center justify-center gap-8 text-white/70 text-lg font-medium">
          {NAV_ITEMS.map((item) => (
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer transition-colors hover:text-[#F5F5F0]"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id as string)}
                className="cursor-pointer transition-colors hover:text-[#F5F5F0]"
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
            className="cursor-pointer rounded-md px-8 py-3 text-lg font-bold text-[#050B14] bg-[#F5F5F0] hover:bg-white transition-colors mt-4"
          >
            Contact Us
          </button>
        </div>
      )}
    </>
  )
}