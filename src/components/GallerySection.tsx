"use client"

import MorphGallery from "@/components/ui/morph-gallery"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const ITEMS = [
  {
    src: "https://cdn.21st.dev/assets/mirror/ec/eceae69f56b5b3e29b9372032b5c22e96bd5fc9c167ce072813868aa871d52af.jpg",
    thumb: "https://cdn.21st.dev/assets/mirror/69/69dbb246d917da410f7e79e87e53aaf6302023baa9db05f1075fca5bcb255410.jpg",
    alt: "Sun rays through a forest",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/95/95b854c8c5fc73249ba12e729548a432ff171dab87d960e2aaf098f1db941828.jpg",
    thumb: "https://cdn.21st.dev/assets/mirror/3d/3d637a6ebf76a17643434f0a6939ae4a0e15853797ba886588071bf792dd12d9.jpg",
    alt: "Snow-capped mountain peak at night",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/15/15a4a367001c723a22cc1f5b480cfdc6abc1e50fdf87e0555ddd324f404fb98a.jpg",
    thumb: "https://cdn.21st.dev/assets/mirror/b8/b88e4af2580633f65cd2fce4867c647be4e317e3bf54c47dac854aab211e6dde.jpg",
    alt: "Mountain reflected in a still lake",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/69/6947b2d1b15fc6614fe30af02282fe6418b3c43556fbfe6ad8e2fa16c72ae700.jpg",
    thumb: "https://cdn.21st.dev/assets/mirror/e0/e025ceb111646f4030ac36225aa4997e5024d098c4c939c409cddd281bd2c314.jpg",
    alt: "Aerial view of green hills",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/40/40907f0afb67e9bf2767a5982d24f0d56e6f49dd12b859cf92eb9b3b9771f4a4.jpg",
    thumb: "https://cdn.21st.dev/assets/mirror/38/38b66ef8fe46060a916db605710e709522a9534ff72aa549c1233c543f0a92a9.jpg",
    alt: "Orange wildflower field",
  },
  {
    src: "https://cdn.21st.dev/assets/mirror/ef/ef4b96d0e0de49e89f600b77edbe0a150e1f93f8ba92ae1422d285d267b7bd47.jpg",
    thumb: "https://cdn.21st.dev/assets/mirror/f8/f8ee65346d7a36d4a795ca4628042627baa2f3f5e1c79d1dd471f874c8a6f0a4.jpg",
    alt: "Tropical beach with clear water",
  },
]


gsap.registerPlugin(ScrollTrigger)

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title on scroll when section enters viewport
      gsap.from(".hero-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      // Animate the gallery component itself on scroll
      gsap.from(".morph-gallery-wrapper", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert() // Cleanup on unmount
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full py-24 bg-black overflow-hidden gallery-section">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
        <h2 className="hero-title text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-difference">
          Discover The World
        </h2>
      </div>
      <div className="morph-gallery-wrapper relative w-full px-4 md:px-12 mx-auto max-w-[1400px]">
        <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <MorphGallery items={ITEMS} autoplay={4500} height="80vh" />
        </div>
      </div>
    </section>
  )
}
