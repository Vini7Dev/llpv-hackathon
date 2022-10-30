import React from 'react'

import {
  TopBar,
  Container,
  PageTitle,
  DateInputsContainer,
  DateInputsDivisor,
} from './styles'
import { DateInput } from '../../components/DateInput'

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
      </Container>
    </>
  )
}
