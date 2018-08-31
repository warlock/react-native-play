import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"
import t from 'tcomb-form-native'
import { formValidation } from '../utils/validation'
import { Card } from 'react-native-elements'
const Form = t.form.Form
import Toast from 'react-native-simple-toast'
import { apilogin } from '../utils/api'
import { store } from '../store/store'

export default class Login extends Component {
  constructor () {
    super()

    this.state = {
      isLogged: false,
      loaded: true,
      token: null
    }

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
      fetch(apilogin, {
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
        if (resp.response_code === 415 && resp.response_data.token && resp.response_data.token !== '' && resp.response_data.token !== null) {
          AsyncStorage.setItem('@app:token', resp.response_data.token)
            .then(() => {
              this.setState({
                isLogged: true,
                loaded: true,
                token: resp.response_data.token
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