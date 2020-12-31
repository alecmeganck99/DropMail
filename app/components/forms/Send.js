import { useFormikContext } from 'formik'
import React from 'react'
import SendButton from '../SendButton'

export default function Send({ title }) {
  const { handleSubmit } = useFormikContext()

  return (
    <SendButton title={title} onPress={handleSubmit} />
  )
}
