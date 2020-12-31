import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppText from '../AppText';
import defaultStyles from '../../config/styles';


export default function ErrorMessage({error, visible }) {
  if (!error || !visible) return null;

  return (
    <View>
      <AppText style={styles.error}>{error}</AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.danger,
  }
})
