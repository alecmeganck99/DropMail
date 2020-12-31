import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Screen, AppText, ItemSeparator, MailsItem, MailsItemDeleteActions } from '../components'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import routes from '../navigation/routes';
import defaultStyles from '../config/styles'

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

export default function Overzicht({ navigation }) {
  const [mails, setMails] = useState(initialMails)
  const [refreshing, setRefreshing] = useState(false)
  const handleDelete = mail => {
    const newMails = mails.filter(m => m.id != mail.id);
    setMails(newMails);
  }
  return (
    <Screen>
      <View>
        <View style={styles.header}>
          <Entypo name="mail" size={25} color={defaultStyles.colors.primary} onPress={() => navigation.navigate(routes.NEWMAIL)} />
          <AppText>Alec Meganck</AppText>
          <MaterialCommunityIcons name="face-profile" size={25} color={defaultStyles.colors.primary} onPress={() => navigation.navigate(routes.PROFIEL)} />
        </View>
        <ItemSeparator />
      </View>
      <View style={styles.container}>
        <FlatList
          data={mails}
          keyExtractor={mails => mails.id.toString()}
          renderItem={({ item }) =>
            <MailsItem
              sender={item.sender}
              title={item.title}
              image={item.image}
              onPress={() => navigation.navigate(routes.MAIL, item)}
              renderRightActions={() => <MailsItemDeleteActions onPress={() => handleDelete(item)} />}
            />
          }
          refreshing={refreshing}
          onRefresh={() => {
            setMails(initialMails)
          }}
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
