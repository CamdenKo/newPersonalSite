import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`

export default (props) => {
  const Container = styled.div`
    color: ${({ theme }) => props.active ? theme.white : theme.black};
    background-image: linear-gradient(to right, transparent 50.1%, ${({ theme }) => theme.black} 49.9%);
    background-size: 200% 100%;
    transition: background-position .5s, color .2s;
    font-size: 30px;
    font-weight: 200;
    font-family: Raleway;
    width: 100%;
    cursor: pointer;

    &:hover {
      background-position: -100% 0;
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
