import React from 'react'
import { StyleSheet, View } from 'react-native'
import * as Yup from 'yup';
import { Screen, AppText } from '../components'
import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import defaultStyles from '../config/styles'
import routes from '../navigation/routes';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
})

export default function Registreer({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <AppText style={styles.logo}>DM</AppText>
      </View>
      <AppForm
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={() => navigation.navigate(routes.MAILS)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          icon="account"
          placeholder="Naam :"
          name="name"
          style={styles.name}
        />
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
        <SubmitButton />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  // addImage: {
  //   alignSelf: 'center',
  //   marginTop: 40,
  //   backgroundColor: defaultStyles.colors.lighter,
  //   padding: 40,
  //   borderRadius: 80,
  //   borderColor: defaultStyles.colors.orange,
  //   borderWidth: 2,
  // },
  header: {
    marginTop: 100,
    marginBottom: 90,
  },
  logo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: defaultStyles.colors.orange,
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
