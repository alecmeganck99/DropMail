import React from 'react'
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import AppText from './AppText'
import defaultStyles from '../config/styles'

export default function MailDetail({ sender, title, image, description }) {
  return (
    <View style={styles.block}>
      <View style={styles.blockHeader}>
        <View style={styles.profile}>
          <Image style={styles.profilePic} source={image} />
        </View>
        <View style={styles.info}>
          <AppText style={styles.infoName}>{sender}</AppText>
        </View>
      </View>
      <View style={styles.title}>
        <AppText style={styles.infoTitle}>{title}</AppText>
      </View>
      <View style={styles.description}>
        <AppText style={styles.infoTitle}>{description}</AppText>
      </View>
    </View>
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  blockHeader: {
    flexDirection: 'row',
  },
  profile: {
    borderRightColor: defaultStyles.colors.secundary,
    borderRightWidth: 1,
  },
  profilePic: {
    backgroundColor: defaultStyles.colors.secundary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 80,
    borderColor: defaultStyles.colors.orange,
    borderWidth: 2,
    width: 30,
    height: 30,
    margin: 8,
  },
  info: {
    margin: 10,
    justifyContent: "center",
    width: "70%",
    alignItems: "center"
  },
  infoName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: defaultStyles.colors.orange,
  },
  title: {
    borderTopColor: defaultStyles.colors.secundary,
    borderTopWidth: 1,
    borderBottomColor: defaultStyles.colors.secundary,
    borderBottomWidth: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: defaultStyles.colors.secundary,
    margin: 5
  },
  description: {
    height: "70%"
  }
})
