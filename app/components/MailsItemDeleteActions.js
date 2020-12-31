import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

export default function ListItemDeleteActions({ onPress }) {
  return (
    <TouchableWithoutFeedback
      style={styles.container}
      onPress={onPress}
    >
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" size={35} color={defaultStyles.colors.primary} />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.red,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginBottom: 10,
  }
})
