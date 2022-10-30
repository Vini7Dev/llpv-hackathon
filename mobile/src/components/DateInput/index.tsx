import React, { useState, useCallback } from 'react'
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
  name: string
  label: string
  placeholder: string
}

export const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  placeholder,
}) => {
  const [showCalendar, setShowCalendar] = useState(false)

  const handleUpdateSelectedDate = useCallback((date: any) => {
    setShowCalendar(false)
    console.log('===> date', date)
  }, [])

  return (
    <>
      <ComponentContainer>
        <DateInputLabel>{label}</DateInputLabel>
      
        <DateInputContainer>
          <DateInputIcon name="calendar" size={27} color="#2F6FED" />

          <DateInputButton onPress={() => setShowCalendar(true)}>
            <DateInputButtonText>{placeholder}</DateInputButtonText>
          </DateInputButton>
        </DateInputContainer>
      </ComponentContainer>
      
      {
        showCalendar && (
          <CalendarModal>
            <CalendarModalContent>
              <CalendarPicker onDateChange={(date) => handleUpdateSelectedDate(date)} />
            </CalendarModalContent>
          </CalendarModal>
        )
      }
    </>
  )
}
