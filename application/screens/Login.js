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
      const data = {
        email: validate.email,
        password: validate.password
      }
      fetch(apilogin, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.response_code === 415 && resp.response_data.token) {
          console.log(resp.response_data.token)
          AsyncStorage.setItem('@app:token', resp.response_data.token)
            .then(() => {
              this.props.dispatch({
                type: 'SIGN_IN',
                payload: resp.response_data.token
              })
            })
            .catch(error => {
              console.log(error)
              alert(error)
            })
        } else {
          console.log('Error iftoken: ' + error)
          alert(error)
        }
      })
      .catch((error) => {
        if (error.response_code === 416) {
          alert('El usuario o la contraseña son incorrectos!')
        } else {
          console.log(JSON.stringify(error))
          alert('Problemas al contactar con el servidor, intentelo mas tarde!')
        }
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

export default connect()(Login)