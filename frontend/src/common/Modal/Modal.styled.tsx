import { colors } from '@/styles/theme'
import styled from 'styled-components'

export const Container = styled.div<{ $open: boolean }>`
  display: flex;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 375px;
  height: 100vh;
  background-color: #fff;
  visibility: ${props => (props.$open ? 'visible' : 'hidden')};
`

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ModalName = styled.div`
  display: flex;
  justify-content: center;
  padding-block: 1em;
  border-bottom: 2px solid ${colors.gray02};
`

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  margin: 1em;
  img {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
`
