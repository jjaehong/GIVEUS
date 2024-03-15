import { colors } from '@styles/theme'
import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  background-color: ${colors.blue01};
  min-height: 300px;
  height: 40vh;
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
`

export const Nickname = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 1.2em;
`