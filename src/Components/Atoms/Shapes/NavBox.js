import React from 'react'
import styled from 'styled-components'

import { media } from '../../../theme'
import {
  Disappearer,
  Rotator,
} from '../../../Components'

const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${({ theme }) => theme.yellow};
  transform: rotate(10deg);
  ${
    media.phonePhone`
      width: 318px;
      height: 245px;
    `
  }
`

export default props => (
  <Rotator degrees={-10}>
    <Container>
      {props.children}
    </Container>
  </Rotator>
)
