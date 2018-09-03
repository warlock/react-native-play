import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import { Card } from 'react-native-elements'

import t from 'tcomb-form-native'

import { formValidation } from '../utils/validation'
import { apilogin } from '../utils/api'

import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"

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

  async tryLogin () {
    const validate = this.refs.form.getValue()
    if (validate) {
      try {
        const resp = await fetch('https://reqres.in/api/users', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "name": "morpheus",
            "job": "leader"
          })
        })
        const jsonmsg = await resp.json()
        console.log("OK: " + JSON.stringify(jsonmsg))
      } catch (error) {
        console.log('error: ' + error)
      }
  
      try {
        const body = JSON.stringify({
          email: validate.email,
          password: validate.password
        })
        const resp = await fetch('http://j1.jimcrickapp.com:8080/bulltect-integration-platform/api/v1/parents/auth', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body
        })
        const jsonmsg = await resp.json()
        console.log("OK: " + JSON.stringify(jsonmsg))
        if (jsonmsg && jsonmsg.response_data && jsonmsg.response_data.token) {
          await AsyncStorage.setItem('@app:token', jsonmsg.response_data.token)
          this.props.dispatch({
            type: 'SIGN_IN',
            payload: jsonmsg.response_data.token
          })
        } else {
          console.log(`No ha retornat token: ${JSON.stringify(jsonmsg)}`)
        }
      } catch (error) {
        console.log(`fetch error: ${JSON.stringify(error)}`)
      }
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