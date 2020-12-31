import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Yup from 'yup';
import { Screen, AppText } from '../components'
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import defaultStyles from '../config/styles'

import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

export default function Startscherm({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.logo}>DM</AppText>
        <AppText style={styles.title}>Welkom bij DropMail, de snelste mail app.</AppText>
      </View>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={() => navigation.navigate(routes.MAILS)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email :"
          name="email"
          textContentType="emailAddress"
          style={styles.email}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Wachtwoord :"
          textContentType="password"
          name="password"
          secureTextEntry
          style={styles.wachtwoord}
        />
        <SubmitButton title='Login' />
      </AppForm>
      <View>
        <AppText style={styles.link} onPress={() => navigation.navigate(routes.REGISTER)}>Geen account? Maak nu een aan.</AppText>
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
    marginTop: 100,
    marginBottom: 90,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: defaultStyles.colors.orange,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: defaultStyles.colors.primary,
    marginTop: 30,
  },
  link: {
    fontSize: 16,
    marginTop: 70,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors.lighter,
  },
  email: {
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors.lighter,
    marginTop: 20,
  },
  wachtwoord: {
    fontSize: 20,
    fontWeight: 'bold',
    color: defaultStyles.colors.lighter,
    marginTop: 20,
  }
})
