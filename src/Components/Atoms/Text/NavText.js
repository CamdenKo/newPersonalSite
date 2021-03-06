import React from 'react'
import styled, { keyframes } from 'styled-components'

import { media } from '../../../theme'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

const loadAnimation = keyframes`
  0% {
    backgr
    background-position: 0;
  }

  to {
    background-position: -100%;
  }
`

const opacity = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

export default (props) => {
  const delay = props.delay || 0

  const Container = styled.li`
    color: ${({ theme }) => theme.black};
    background-image: linear-gradient(to left, transparent 51%, black 49%);
    background-size: 202% 100%;
    background-position: 100%;
    transition: background-position .5s, color .3s;
    -webkit-transition: background-position .5s, color .3s;
    font-size: 30px;
    font-weight: 200;
    font-family: Raleway;
    width: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    animation ${loadAnimation} .5s ease-in, ${opacity} .5s ease-in forwards;
    animation-delay: ${delay}s;
    padding-right: 17px;
    ${
      media.phoneTablet`
        padding-right: 10px;
        padding-left: 10px;
      `
    }

    &:hover {
      background-position: 0;
      color: ${({ theme }) => theme.white};
    }
  `

  return (
    <Container>
      <Link href={props.href}>
        {props.children}
      </Link>
    </Container>
  )
}
