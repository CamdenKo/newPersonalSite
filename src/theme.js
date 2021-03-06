import { css, keyframes } from 'styled-components'

export default {
  red: '#FF0773',
  yellow: '#FFF86A',
  purple: '#8B56FF',
  black: 'black',
  white: 'white',
  primaryFontFamily: 'Raleway',
  secondaryFontFamily: 'Open Sans',
}

const sizes = {
  phonePhone: 300,
  phoneTablet: 600,
  tabletTablet: 900,
  tabletDesktop: 1200,
  desktopBigDesktop: 1800,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const mediaHeight = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-height: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const animations = {
  wiggle: keyframes`
    60% {
      transform: rotate(20deg);
    }
    100% {
      transform: rotate(10deg);
    }
  `,
  fadeInBottom: keyframes`
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,
}
