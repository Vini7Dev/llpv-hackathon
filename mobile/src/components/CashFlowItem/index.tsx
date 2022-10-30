import React from 'react'

import {
  CashFlowItemContainer,
  CashFlowPositiveIcon,
  CashFlowNegativeIcon,
  CashFlowDescriptionContainer,
  CashFlowDescription,
  CashFlowDate,
  CashFlowValue,
  CashFlowValueBold,
} from './styles'

interface ICashFlowItemProps {
  description: string
  date: string
  value: number
}

export const CashFlowItem: React.FC<ICashFlowItemProps> = () => {
  return (
    <CashFlowItemContainer>
      <CashFlowPositiveIcon name="plus" color="#08875D" size={23} />
      {
        //<CashFlowNegativeIcon name="plus" color="#08875D" size={23} />
      }

      <CashFlowDescriptionContainer>
        <CashFlowDescription>Vendas e-commerce</CashFlowDescription>
        <CashFlowDate>10/10/2022</CashFlowDate>
      </CashFlowDescriptionContainer>
      
      <CashFlowValue>
        R$ <CashFlowValueBold>50,00</CashFlowValueBold>
      </CashFlowValue>
    </CashFlowItemContainer>
  )
}
