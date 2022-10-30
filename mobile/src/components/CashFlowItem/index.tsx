import React from 'react'

import {
  CashFlowItemContainer,
  CashFlowPositiveIcon,
  CashFlowNegativeIcon,
  CashFlowDate,
  CashFlowValue,
  CashFlowValueBold,
} from './styles'

interface ICashFlowItemProps {
  data: string
  entry: number
  out: number
}

export const CashFlowItem: React.FC<ICashFlowItemProps> = ({
  data,
  entry,
  out,
}) => {
  return (
    <CashFlowItemContainer>
      {
        out
        ? <CashFlowNegativeIcon name="minus" size={23} />
        : <CashFlowPositiveIcon name="plus" size={23} />
      }

      <CashFlowDate>{data}</CashFlowDate>
      
      <CashFlowValue>
        {out ? '-' : null}R$ <CashFlowValueBold>{
          (entry || out * -1).toFixed(2)
        }</CashFlowValueBold>
      </CashFlowValue>
    </CashFlowItemContainer>
  )
}
