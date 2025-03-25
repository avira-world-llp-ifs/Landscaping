"use client"

import { useEffect, useState, type ReactNode } from "react"
import MegaMenuNavbar from "@/components/Navbar/Navbar"
import SubNavbar from "@/components/SubNavbar/SubNavbar"
import GlobalHero from "@/components/Hero/GlobalHero"
import MultiLineSlideHero from "@/components/Hero/HomeCarousel"

interface ClientLayoutProps {
  children: ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [scrolled, setScrolled] = useState(false)
  const [subNavVisible, setSubNavVisible] = useState(false)
  const [heroHeight, setHeroHeight] = useState(0)

  useEffect(() => {
    const heroElement = document.getElementById("global-hero")
    if (heroElement) {
      setHeroHeight(heroElement.offsetHeight)
    }

    const subNavElement = document.getElementById("sub-navbar")
    setSubNavVisible(!!subNavElement)

    const handleScroll = () => {
      const isScrolled = window.scrollY > heroHeight
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled, heroHeight])

  return (
    <>
      {/* Main Navbar - Always fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <MegaMenuNavbar />
      </div>

      {/* Hero Section - Scrolls away */}
      <div id="global-hero" className="pt-16">
        {/* <GlobalHero />
         */}
         <MultiLineSlideHero/>
      </div>

      {/* SubNavbar - Becomes fixed after scrolling past hero */}
      <div
        id="sub-navbar"
        className={`${
          scrolled && subNavVisible ? "fixed top-16 left-0 right-0" : "relative"
        } z-40 transition-all duration-300`}
      >
        <SubNavbar />
      </div>

      {/* Main Content - Adjusted padding to account for fixed elements */}
      <div >{children}</div>
    </>
  )
}

