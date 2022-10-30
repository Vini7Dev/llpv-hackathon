import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

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
  SelectDateIntervalAlert,
  SuccessArea,
  ModalDescription,
  ModalTitle,
  ModalQuestion,
  ModalButtonsContainer,
  ModalButtonPrimary,
  ModalButtonSecondary,
  ModalButtonSecondaryContainer,
  ModalButtonPrimaryContainer,
} from './styles'
import { DateInput } from '../../components/DateInput'
import { CashFlowItem } from '../../components/CashFlowItem'
import { api } from '../../services/api'
import { Modal } from '../../components/Modal'

interface ICashFlowItemProps {
  Data: string
  Entry: number
  Out: number
  Amount: number
}

const TEMP_DATA = [
  { Data:"2022-03-02T03:00:00Z",Amount:15000,Entry:15000,Out:0 },
  { Data:"2022-03-10T03:00:00Z",Amount:14455.01,Entry:0,Out:-544.99 },
  { Data:"2022-04-07T03:00:00Z",Amount:14453.99,Entry:0,Out:-1.02 },
  { Data:"2022-05-10T03:00:00Z",Amount:15453.99,Entry:1000,Out:0 },
  { Data:"2022-05-11T03:00:00Z",Amount:15253.99,Entry:0,Out:-200 },
  { Data:"2022-08-01T03:00:00Z",Amount:15258.87,Entry:4.88,Out:0 },
  { Data:"2022-08-30T03:00:00Z",Amount:15278.37,Entry:19.5,Out:0 },
  { Data:"2022-09-01T03:00:00Z",Amount:-721.63,Entry:0,Out:-16000 },
  { Data:"2022-09-05T03:00:00Z",Amount:-802.17,Entry:19.46,Out:0 },
  { Data:"2022-09-05T03:00:00Z",Amount:-821.63,Entry:0,Out:-100 },
  { Data:"2022-09-10T03:00:00Z",Amount:633.47,Entry:1435.64,Out:0 },
  { Data:"2022-09-11T03:00:00Z",Amount:1534.25,Entry:900.78,Out:0 },
  { Data:"2022-09-12T03:00:00Z",Amount:1234.25,Entry:0,Out:-300 }
]

export const CashFlow: React.FC = () => {
  const [cashFlowList, setCashFlowList] = useState<ICashFlowItemProps[]>(TEMP_DATA)
  const [fromDate, setFromDate] = useState<string>()
  const [toDate, setToDate] = useState<string>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleGetCashFlow = async () => {
      if (!fromDate || !toDate) {
        return
      }
      
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
  
      const result = await api.get('/entrepeneur/cashflow')
  
      setCashFlowList(result.data)
    }

    handleGetCashFlow()
  }, [fromDate, toDate])

  return (
    <>
      <TopBar />
      
      <Container>
        <PageTitle>Fluxo de caixa</PageTitle>

        <DateInputsContainer>
          <DateInput label="Início" placeholder={fromDate ?? 'dd/mm/yyyy'} onDateChange={setFromDate} />
          
          <DateInputsDivisor />

          <DateInput label="Fim" placeholder={toDate ?? 'dd/mm/yyyy'} onDateChange={setToDate} />
        </DateInputsContainer>

        {
          loading
          ? <LoadingComponent />
          : !fromDate || !toDate
            ? <SelectDateIntervalAlert>Selecione um intervalo de datas</SelectDateIntervalAlert>
            : (
              <CashFlowList keyboardShouldPersistTaps="handled">
                <CashFlowMonth>Resultado</CashFlowMonth>
                {
                  cashFlowList.map((data, i) => (
                    <CashFlowPerMonth>
                      <CashFlowItem
                        key={i}
                        data={data.Data}
                        entry={data.Entry}
                        out={data.Out}
                      />
                    </CashFlowPerMonth>
                  ))
                }
                
                <CashFlowTotalContainer>
                  <CashFlowTotalIcon name="arrow-right" color="#2F6FED" size={23} />
                  <CashFlowTotalDescription>Saldo total</CashFlowTotalDescription>
                  <CashFlowValue>
                    R$ <CashFlowValueBold>{TEMP_DATA[TEMP_DATA.length - 1].Amount}</CashFlowValueBold>
                  </CashFlowValue>
                </CashFlowTotalContainer>
              </CashFlowList>
            )
        }
      </Container>

      {
        /**
        <Modal>
          <ModalTitle>Autorizar Visualização?</ModalTitle>
          <ModalDescription>Você recebeu uma solitação para autorizar a visualização dos seus dados bancários. </ModalDescription>
          <ModalQuestion>Deseja autorizar a visualização?</ModalQuestion>
          <ModalButtonsContainer>
            <ModalButtonSecondaryContainer>
              <ModalButtonSecondary>Não Autorizar</ModalButtonSecondary>
            </ModalButtonSecondaryContainer>

            <ModalButtonPrimaryContainer>
              <ModalButtonPrimary>Autorizar</ModalButtonPrimary>
            </ModalButtonPrimaryContainer>
          </ModalButtonsContainer>
        </Modal>
        */
      }
    </>
  )
}

const LoadingComponent: React.FC = () => {
  return (
    <SuccessArea>
      <ActivityIndicator color="#2F6FED" size={52} />
    </SuccessArea>
  )
}
