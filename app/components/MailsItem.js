import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from './AppText'
import defaultStyles from '../config/styles'

export default function ListItem({ sender, title, image, onPress, renderRightActions, IconComponent }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={defaultStyles.colors.light}>
        <View style={styles.block}>
          <View style={styles.profile}>
            <Image style={styles.profilePic} source={image} />
          </View>
          <View style={styles.info}>
            <AppText style={styles.infoName}>{sender}</AppText>
            <AppText style={styles.infoTitle}>{title}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: defaultStyles.colors.white,
  },
  block: {
    backgroundColor: defaultStyles.colors.lighter,
    flexDirection: 'row',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  profile: {
    borderRightColor: defaultStyles.colors.secundary,
    borderRightWidth: 1,
  },
  profilePic: {
    backgroundColor: defaultStyles.colors.secundary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
    borderRadius: 80,
    borderColor: defaultStyles.colors.orange,
    borderWidth: 2,
    width: 60,
    height: 60,
    margin: 8,
  },
  info: {
    margin: 10,
  },
  infoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: defaultStyles.colors.secundary,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: defaultStyles.colors.orange,
  }
})
