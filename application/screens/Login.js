import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'

import t from 'tcomb-form-native'

import { formValidation } from '../utils/validation'

import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"

import firebase from 'firebase/app'

const Form = t.form.Form

@connect()
class Login extends Component {
  constructor () {
    super()

    this.tryLogin = this.tryLogin.bind(this)

    this.userForm = t.struct({
      email: formValidation.email,
      password: formValidation.password
    })

    this.options = {
      fields: {
        email: {
          help: 'Introduce tu email',
          error: 'Email incorrecto',
          autoCapitalize: 'none'
        },
        password: {
          label: 'Contraseña',
          help: 'Introducte tu password',
          error: 'Password incorrecto',
          password: true,
          secureTextEntry: true
        }
      }
    }
  }

  tryLogin () {
    const validate = this.refs.form.getValue()
    if (validate) {
      firebase.auth().signInWithEmailAndPassword(validate.email, validate.password).catch((error) => {
        alert(error.message)
      })
    }
  }

  render () {
    //Form ref="form" -> Hace referencia al this.ref.form

    const dades = {
      email: 'jimcuenta1@anpro21.com',
      password: '1234567890'
    }

    return (
      <BackgroundImage
        source={require('../../assets/images/cityback.jpeg')}
      >
        <View>
          <Card wrapperStyle={{ paddingLeft: 10 }} title="Iniciar sesion">
            <Form
              ref="form"
              type={this.userForm}
              options={this.options}
              value={dades}
            />
            <AppButton
              bgColor="rgba(111, 38, 74, 07)"
              title="Login"
              action={this.tryLogin}
              iconName="sign-in"
              iconSize={30}
              iconColor="#fff"
            />
          </Card>
        </View>
      </BackgroundImage>
    )
  }
}

export default Login