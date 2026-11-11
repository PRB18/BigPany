import test from 'node:test'
import assert from 'node:assert/strict'
import {
  HB_IMAGES,
  HB_INTERVAL_MS,
  HB_TAGLINE,
  HB_TARGET_URL,
  getNextSlideIndex,
  getPrevSlideIndex,
  formatSlideFraction,
} from './haiybellbottom'

test('Haiybellbottom target URL, tagline, and slideshow progression speed match specification', () => {
  assert.equal(HB_TARGET_URL, 'https://hairybellbottom.bigpany.in/')
  assert.equal(HB_TAGLINE, 'For the fathoming')
  assert.equal(HB_INTERVAL_MS, 5000)
  assert.equal(HB_IMAGES.length, 3)
  assert.equal(HB_IMAGES[0].src, '/assets/aistudio/Ponduru_Khadi_saree__d6c225d3.jpg')
  assert.equal(
    HB_IMAGES[1].src,
    '/assets/aistudio/Royal_Purple_Banarasi_Silk_Saree_with_Golden_Zari_Border_36463bd7.jpg'
  )
  assert.equal(HB_IMAGES[2].src, '/assets/aistudio/curated_design_1_18b11e05.jpeg')
})

test('getNextSlideIndex cycles cleanly through all 3 slides and wraps around', () => {
  assert.equal(getNextSlideIndex(0, 3), 1)
  assert.equal(getNextSlideIndex(1, 3), 2)
  assert.equal(getNextSlideIndex(2, 3), 0)
})

test('getPrevSlideIndex cycles backward and wraps from 0 to last slide', () => {
  assert.equal(getPrevSlideIndex(0, 3), 2)
  assert.equal(getPrevSlideIndex(2, 3), 1)
  assert.equal(getPrevSlideIndex(1, 3), 0)
})

test('formatSlideFraction formats 1-indexed padded slide numbers', () => {
  assert.equal(formatSlideFraction(0, 3), '01 / 03')
  assert.equal(formatSlideFraction(1, 3), '02 / 03')
  assert.equal(formatSlideFraction(2, 3), '03 / 03')
})
