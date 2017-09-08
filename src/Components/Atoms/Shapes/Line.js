import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
  margin: 0 10px 10px 0;
  box-sizing: border-box;
  height: 100%;
  width: 5px;
  box-shadow: 5px 0 0 0 ${({ theme }) => theme.black};
  border-radius: 10px;
`

export default () => (
  <Line />
)
