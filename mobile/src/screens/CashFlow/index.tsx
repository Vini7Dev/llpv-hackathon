import React from 'react'

import {
  TopBar,
  Container,
  PageTitle,
  DateInputsContainer,
  DateInputsDivisor,
  CashFlowList,
  CashFlowMonth,
  CashFlowPerMonth,
  CashFlowTotalContainer,
  CashFlowTotalDescription,
  CashFlowTotalIcon,
  CashFlowValue,
  CashFlowValueBold,
} from './styles'
import { DateInput } from '../../components/DateInput'
import { CashFlowItem } from '../../components/CashFlowItem'

export const CashFlow: React.FC = () => {
  return (
    <>
      <TopBar />
      
      <Container>
        <PageTitle>Fluxo de caixa</PageTitle>

        <DateInputsContainer>
          <DateInput label="Início" name="from" placeholder="dd/mm/yyyy" />
          
          <DateInputsDivisor />

          <DateInput label="Fim" name="to" placeholder="dd/mm/yyyy" />
        </DateInputsContainer>

        <CashFlowList keyboardShouldPersistTaps="handled">
          <CashFlowMonth>Janeiro</CashFlowMonth>
          {
            [1, 2, 3, 4, 5].map((_, i) => (
              <CashFlowPerMonth>
                <CashFlowItem key={i} date="10/10/10" description="123" value={10} />
              </CashFlowPerMonth>
            ))
          }
          
          <CashFlowTotalContainer>
            <CashFlowTotalIcon name="arrow-right" color="#2F6FED" size={23} />
            <CashFlowTotalDescription>Saldo total</CashFlowTotalDescription>
            <CashFlowValue>
              R$ <CashFlowValueBold>150,00</CashFlowValueBold>
            </CashFlowValue>
          </CashFlowTotalContainer>
        </CashFlowList>
      </Container>
    </>
  )
}
