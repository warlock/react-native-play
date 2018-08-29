import React, { Component } from 'react'
import { View } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"
import t from 'tcomb-form-native'
import { formValidation } from '../utils/validation'
import { Card } from 'react-native-elements'
const Form = t.form.Form
import Toast from 'react-native-simple-toast'

export default class Login extends Component {
  constructor () {
    super()
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

  login () {
    const validate = this.refs.form.getValue()

    if (validate) {
      console.log('success')
      fetch('', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: validate.email,
          password: validate.password,
        })
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        Toast.showWithGravity("Benvingut!", Toast.LONG, Toast.BOTTOM)
      })
      .catch((error) => {
        if (error.response_code === 416) {
          Toast.showWithGravity("El usuario o la contraseña son incorrectos!", Toast.LONG, Toast.BOTTOM)
        } else {
          Toast.showWithGravity("Problemas al contactar con el servidor, intentelo mas tarde!", Toast.LONG, Toast.BOTTOM)
        }
        console.log(error)

      })
    }
  }

  render () {
    //Form ref="form" -> Hace referencia al this.ref.form

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
            />
            <AppButton
              bgColor="rgba(111, 38, 74, 07)"
              title="Login"
              action={this.login.bind(this)}
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