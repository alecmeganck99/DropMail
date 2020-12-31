import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import defaultStyles from '../../config/styles';

export default function AppTextInput({ icon, width = '100%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput style={styles.input} {...otherProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors.lighter,
  }
})
