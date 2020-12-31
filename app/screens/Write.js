import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import * as Yup from 'yup';
import { Screen, AppText, ItemSeparator } from '../components'
import { AppForm, AppFormField, Send } from '../components/forms';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  naar: Yup.string().required().label('?aar'),
  title: Yup.string().required().label('Titel'),
  bericht: Yup.string().label('Bericht'),
})

export default function Write({ navigation }) {
  return (
    <Screen>
      <View>
        <View style={styles.header}>
          <Entypo name="mail" size={25} color={defaultStyles.colors.primary} />
          <AppText>Alec Meganck</AppText>
          <MaterialCommunityIcons name="face-profile" size={25} color={defaultStyles.colors.primary} onPress={() => navigation.navigate(routes.PROFIEL)} />
        </View>
        <ItemSeparator />
      </View>
      <View style={styles.container}>
        <View style={styles.block}>
          <AppForm
            initialValues={{ naar: '', title: '', bericht: '' }}
            onSubmit={() => navigation.navigate(routes.MAILS)}
            validationSchema={validationSchema}
          >
            <View style={styles.blockHeader}>
              <View style={styles.profile}>
                <Image style={styles.profilePic} source={require('../assets/profile.jpg')} />
              </View>
              <View style={styles.info}>
                <AppFormField
                  autoCorrect={false}
                  icon="account"
                  placeholder="Naar :"
                  name="Naar"
                  placeholderTextColor={defaultStyles.colors.orange}
                  style={styles.To}
                />
              </View>
            </View>
            <View style={styles.title}>
              <AppFormField
                name="Titel"
                numberOfLines={1}
                multiline
                placeholder="Titel"
                style={styles.infoTitle}
                placeholderTextColor={defaultStyles.colors.secundary}
              />
            </View>
            <View style={styles.description}>
              <AppFormField
                maxLength={255}
                name="Bericht"
                numberOfLines={10}
                multiline
                placeholder="Bericht"
                style={styles.infoTitle}
                placeholderTextColor={defaultStyles.colors.secundary}
              />
            </View>
            <Send />
          </AppForm>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 40,
    marginRight: 40,
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
  To: {
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors.orange,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: defaultStyles.colors.secundary,
    margin: 5
  },
  description: {
    height: "74%"
  }
})
