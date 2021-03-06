import React from 'react'
import styled, { keyframes } from 'styled-components'

import {
  NavText,
  NavBox,
  Line,
  TextRotator,
  SecondaryTitle,
} from '../../../Components'

const Container = NavBox.extend`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TextContainer = styled.ul`
  list-style-type: none;
  text-align: right;
  line-height: 61px;
  padding: 0;
  display: unset;
`

const initialGrowthLine = keyframes`
from {
  transform: scaleY(0);
}
to {
  transform: scaleY(1);
}
`

const delayPer = 0.15


export default (props) => {
  const lineDelay = 0.3
  const navTextDelay = 0.15

  const LinePadding = Line.extend`
    height: 219px;
    margin-left: 20px;
    margin-right: 20px;
    animation ${initialGrowthLine} cubic-bezier(.785, .135, .15, .86) 0.3s forwards;
    animation-delay: ${props.delay + lineDelay}s;
    transform: scaleY(0);
  `

  return (
    <Container>
      <TextContainer>
        {
          props.links.map((link, index) =>
            <NavText delay={(index * delayPer) + (props.delay || 0) + lineDelay + navTextDelay} key={link.name} href={link.url}>{link.name}</NavText>)
        }
      </TextContainer>
      <LinePadding />
      <TextRotator>
        <SecondaryTitle active padding="10px 0" delay={props.delay}>Camden Ko</SecondaryTitle>
      </TextRotator>
    </Container>
  )
}
