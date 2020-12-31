import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Screen, AppText, ItemSeparator, MailDetail } from '../components'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import routes from '../navigation/routes';

const initialMails = [
  {
    id: 1,
    sender: "Yoda",
    title: "I'm a child",
    image: require('../assets/profile.jpg'),
    description: "Hello I'm looking for Jedi Master"
  }, {
    id: 2,
    sender: "Santa Claus",
    title: "Ho Ho Ho",
    image: require('../assets/santa.jpg'),
    description: "Merry Christmas!!!"
  }, {
    id: 3,
    sender: "Groot",
    title: "BOOOM",
    image: require('../assets/groot.jpg'),
    description: "I'm Groot"
  },
]

export default function Mail({ route, navigation }) {
  const mail = route.params;

  return (
    <Screen>
      <View>
        <View style={styles.header}>
          <Entypo name="home" size={25} color={defaultStyles.colors.primary} onPress={() => navigation.navigate(routes.MAILS)} />
          <AppText>Alec Meganck</AppText>
          <MaterialCommunityIcons name="face-profile" size={25} color={defaultStyles.colors.primary} onPress={() => navigation.navigate(routes.PROFIEL)} />
        </View>
        <ItemSeparator />
      </View>
      <View style={styles.container}>
        <MailDetail
          sender={mail.sender}
          title={mail.title}
          image={mail.image}
          description={mail.description}
        />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    height: "100%",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
  }
})
