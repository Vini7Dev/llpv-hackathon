import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker'

import {
  ComponentContainer,
  DateInputContainer,
  DateInputLabel,
  DateInputButton,
  DateInputButtonText,
  DateInputIcon,
  CalendarModal,
  CalendarModalContent,
} from './styles'

interface DateInputProps extends TextInputProps {
  label: string
  placeholder: string
  onDateChange(date: string): void
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  placeholder,
  onDateChange,
}) => {
  const [showCalendar, setShowCalendar] = useState(false)

  return (
    <>
      <ComponentContainer>
        <DateInputLabel>{label}</DateInputLabel>
      
        <DateInputContainer>
          <DateInputIcon name="calendar" size={27} color="#2F6FED" />

          <DateInputButton onPress={() => {
            console.log('====> setShowCalendar(true)')
            setShowCalendar(true)
          }}>
            <DateInputButtonText>{placeholder}</DateInputButtonText>
          </DateInputButton>
        </DateInputContainer>
      </ComponentContainer>
      
      {
        showCalendar && (
          <CalendarModal>
            <CalendarModalContent>
              <CalendarPicker onDateChange={(date) => {
                const dateDay = new Date(date.toString()).getDate()
                const dateMonth = new Date(date.toString()).getMonth()
                const dateYear = new Date(date.toString()).getFullYear()

                onDateChange(`${dateDay}/${dateMonth + 1}/${dateYear}`)
                setShowCalendar(false)
              }} />
            </CalendarModalContent>
          </CalendarModal>
        )
      }
    </>
  )
}
