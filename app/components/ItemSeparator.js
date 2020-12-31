import React from 'react'
import { StyleSheet, View } from 'react-native'
import defaultStyles from '../config/styles'

export default function ListItemSeparator() {
  return (
    <View style={styles.seperator} />
  )
}

const styles = StyleSheet.create({
  seperator: {
    width: '100%',
    height: 1,
    backgroundColor: defaultStyles.colors.lighter,
    marginTop: 5,
    marginBottom: 20,
  }
})
