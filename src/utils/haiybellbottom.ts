/* =============================================================
   haiybellbottom.ts — Pure data & slide progression utilities
   ============================================================= */

export interface HaiybellbottomSlide {
  src: string
  alt: string
  code: string
  title: string
  detail: string
}

export const HB_TARGET_URL = 'https://hairybellbottom.bigpany.in/'

export const HB_TAGLINE = 'For the fathoming'

export const HB_INTERVAL_MS = 5000

export const HB_IMAGES: readonly HaiybellbottomSlide[] = [
  {
    src: '/assets/aistudio/Ponduru_Khadi_saree__d6c225d3.jpg',
    alt: 'Haiybellbottom — Ponduru Khadi handloom saree with crimson and gold zari border',
    code: '01',
    title: 'Ponduru Khadi Weave',
    detail: 'Handspun Heritage Cotton · Crimson & Pure Gold Zari',
  },
  {
    src: '/assets/aistudio/Royal_Purple_Banarasi_Silk_Saree_with_Golden_Zari_Border_36463bd7.jpg',
    alt: 'Haiybellbottom — Royal purple Banarasi silk saree with golden floral zari border',
    code: '02',
    title: 'Royal Banarasi Silk',
    detail: 'Mulberry Silk Drape · Antique Floral Zari Brocade',
  },
  {
    src: '/assets/aistudio/curated_design_1_18b11e05.jpeg',
    alt: 'Haiybellbottom — Ivory and midnight blue Kanjeevaram silk saree with gold temple zari border',
    code: '03',
    title: 'Imperial Kanjeevaram',
    detail: 'Ivory & Midnight Indigo · Temple Motif Gold Zari',
  },
]

export function getNextSlideIndex(currentIndex: number, length: number = HB_IMAGES.length): number {
  if (length <= 0) return 0
  const normalized = ((currentIndex % length) + length) % length
  return (normalized + 1) % length
}

export function getPrevSlideIndex(currentIndex: number, length: number = HB_IMAGES.length): number {
  if (length <= 0) return 0
  const normalized = ((currentIndex % length) + length) % length
  return (normalized - 1 + length) % length
}

export function formatSlideFraction(currentIndex: number, length: number = HB_IMAGES.length): string {
  const safeIndex = Math.min(Math.max(currentIndex, 0), Math.max(length - 1, 0)) + 1
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(safeIndex)} / ${pad(Math.max(length, 1))}`
}
