import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import defaultStyles from '../config/styles'

export default function SendButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <AntDesign name="arrowright" size={20} color={defaultStyles.colors.primary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: defaultStyles.colors.orange,
    marginLeft: 4
  },
})
