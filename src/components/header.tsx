"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, ChevronDown } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface NavChild {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

const leistungenItems: NavChild[] = [
  { label: "Terrassenüberdachung", href: "/leistungen/terrassenueberdachung" },
  { label: "Markisen", href: "/leistungen/markisen" },
  { label: "Wintergarten", href: "/leistungen/wintergarten" },
  { label: "Fenster", href: "/leistungen/fenster" },
  { label: "Haustüren", href: "/leistungen/haustueren" },
  { label: "Insektenschutz", href: "/leistungen/insektenschutz" },
  { label: "Raff-Store-Anlagen", href: "/leistungen/raff-store-anlagen" },
]

const navItems: NavItem[] = [
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Leistungen", href: "/leistungen", children: leistungenItems },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Jobs", href: "/jobs" },
  { label: "Kontakt", href: "/kontakt" },
]

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [leistungenOpen, setLeistungenOpen] = useState(false)
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false)

  // Track scroll position to toggle header background (throttled with rAF)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close desktop dropdown when clicking outside
  const closeDesktopDropdown = useCallback(() => {
    setDesktopDropdownOpen(false)
  }, [])

  useEffect(() => {
    if (desktopDropdownOpen) {
      document.addEventListener("click", closeDesktopDropdown)
      return () => document.removeEventListener("click", closeDesktopDropdown)
    }
  }, [desktopDropdownOpen, closeDesktopDropdown])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 30 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-lg shadow-brand-secondary/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ----------------------------------------------------------------- */}
        {/* Logo                                                              */}
        {/* ----------------------------------------------------------------- */}
        <Link
          href="/"
          className="relative z-10 flex shrink-0 items-center gap-3 min-h-[44px] min-w-[44px]"
          aria-label="HBW Bremen — Startseite"
        >
          <Image
            src="/images/logo.png"
            alt="HBW Bremen Logo"
            width={160}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        {/* ----------------------------------------------------------------- */}
        {/* Desktop Navigation                                                */}
        {/* ----------------------------------------------------------------- */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
          {navItems.map((item) =>
            item.children ? (
              // Leistungen with dropdown
              <div key={item.label} className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setDesktopDropdownOpen(!desktopDropdownOpen)
                  }}
                  className={`group flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 min-h-[44px] ${
                    scrolled
                      ? "text-brand-secondary hover:bg-brand-primary/10 hover:text-brand-primary"
                      : "text-white hover:bg-white/10"
                  }`}
                  aria-expanded={desktopDropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {desktopDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 top-full mt-2 w-64 origin-top-left overflow-hidden rounded-2xl border border-brand-surface bg-white p-2 shadow-xl shadow-brand-secondary/10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* "Alle Leistungen" link */}
                      <Link
                        href={item.href}
                        onClick={() => setDesktopDropdownOpen(false)}
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-brand-secondary transition-colors hover:bg-brand-accent/15 hover:text-brand-primary min-h-[44px]"
                      >
                        <span className="flex size-2 rounded-full bg-brand-accent" />
                        Alle Leistungen
                      </Link>
                      <div className="my-1 h-px bg-brand-surface" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setDesktopDropdownOpen(false)}
                          className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-brand-secondary/80 transition-colors hover:bg-brand-primary/8 hover:text-brand-primary min-h-[44px]"
                        >
                          <span className="flex size-1.5 rounded-full bg-brand-primary/30 transition-colors group-hover:bg-brand-primary" />
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              // Regular nav item
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 min-h-[44px] flex items-center ${
                  scrolled
                    ? "text-brand-secondary hover:bg-brand-primary/10 hover:text-brand-primary"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* ----------------------------------------------------------------- */}
        {/* Desktop Right Actions                                             */}
        {/* ----------------------------------------------------------------- */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Phone */}
          <a
            href="tel:+4915207128739"
            className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 min-h-[44px] ${
              scrolled
                ? "text-brand-secondary hover:text-brand-primary"
                : "text-white/90 hover:text-white"
            }`}
            aria-label="Anrufen: 0152 07128739"
          >
            <Phone className="size-4" />
            <span className="hidden xl:inline">0152 07128739</span>
          </a>

          {/* CTA */}
          <Link
            href="/kontakt"
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-bold text-brand-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-brand-accent/30 active:scale-[0.98] min-h-[44px]"
          >
            <span className="relative z-10">Termin vereinbaren</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-accent to-[#c8e234] opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </Link>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Mobile: Phone + Hamburger                                         */}
        {/* ----------------------------------------------------------------- */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:+4915207128739"
            className={`flex items-center justify-center rounded-xl p-2 transition-colors min-h-[44px] min-w-[44px] ${
              scrolled
                ? "text-brand-primary hover:bg-brand-primary/10"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Anrufen: 0152 07128739"
          >
            <Phone className="size-5" />
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              className={`flex items-center justify-center rounded-xl p-2 transition-colors min-h-[44px] min-w-[44px] ${
                scrolled
                  ? "text-brand-secondary hover:bg-brand-primary/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Menü öffnen"
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent side="right" className="w-[85vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b border-brand-surface px-6 py-5">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="min-h-[44px] flex items-center"
                >
                  <Image
                    src="/images/logo.png"
                    alt="HBW Bremen Logo"
                    width={140}
                    height={42}
                    className="h-9 w-auto"
                  />
                </Link>
              </SheetHeader>

              {/* Mobile nav links */}
              <nav className="flex flex-col px-4 py-4" aria-label="Mobile Navigation">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      {/* Leistungen toggle */}
                      <button
                        onClick={() => setLeistungenOpen(!leistungenOpen)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-bold text-brand-secondary transition-colors hover:bg-brand-primary/8 min-h-[44px]"
                        aria-expanded={leistungenOpen}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-5 text-brand-muted transition-transform duration-300 ${
                            leistungenOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {leistungenOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="ml-3 flex flex-col border-l-2 border-brand-accent/40 pl-3 pb-2">
                              <SheetClose
                                render={
                                  <Link
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                  />
                                }
                                className="rounded-lg px-3 py-2.5 text-sm font-bold text-brand-primary transition-colors hover:bg-brand-primary/8 min-h-[44px] flex items-center"
                              >
                                Alle Leistungen
                              </SheetClose>
                              {item.children.map((child) => (
                                <SheetClose
                                  key={child.href}
                                  render={
                                    <Link
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                    />
                                  }
                                  className="rounded-lg px-3 py-2.5 text-sm text-brand-secondary/75 transition-colors hover:bg-brand-primary/8 hover:text-brand-primary min-h-[44px] flex items-center"
                                >
                                  {child.label}
                                </SheetClose>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <SheetClose
                      key={item.label}
                      render={
                        <Link
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                        />
                      }
                      className="rounded-xl px-3 py-3 text-base font-bold text-brand-secondary transition-colors hover:bg-brand-primary/8 min-h-[44px] flex items-center"
                    >
                      {item.label}
                    </SheetClose>
                  )
                )}
              </nav>

              {/* Mobile bottom actions */}
              <div className="mt-auto border-t border-brand-surface px-4 py-5 flex flex-col gap-3">
                <a
                  href="tel:+4915207128739"
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-brand-secondary font-semibold transition-colors hover:bg-brand-primary/8 min-h-[44px]"
                >
                  <Phone className="size-5 text-brand-primary" />
                  0152 07128739
                </a>
                <SheetClose
                  render={
                    <Link
                      href="/kontakt"
                      onClick={() => setMobileOpen(false)}
                    />
                  }
                  className="flex items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-base font-bold text-brand-secondary transition-all hover:brightness-110 active:scale-[0.98] min-h-[44px]"
                >
                  Termin vereinbaren
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
