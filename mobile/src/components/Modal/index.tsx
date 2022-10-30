import React from 'react'

import { ModalContainer, ModalContent } from './styles'

export const Modal: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ModalContainer>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}