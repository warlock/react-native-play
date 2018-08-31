import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"
import t from 'tcomb-form-native'
import { registerValidation } from '../utils/validation'
import { Card } from 'react-native-elements'
const Form = t.form.Form
import { apiregister } from '../utils/api'

export default class Register extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        birthdate: '',
        password_clear: '',
        confirm_password: '',
        first_name: '',
        last_name: '',
        email: ''
      }
    }
    
    this.samePassword = t.refinement(t.String, s => {
      return s === this.state.user.password_clear
    })

    this.registerForm = t.struct({
      first_name: registerValidation.first_name,
      last_name: registerValidation.last_name,
      email: registerValidation.email,
      birthdate: registerValidation.birthdate,
      password_clear: registerValidation.password_clear,
      confirm_password: this.samePassword
    })

    this.options = {
      fields: {
        first_name: {
          label: 'Nombre',
          help: 'Introduce tu nombre',
          autoCapitalize: 'words'
        },
        last_name: {
          label: 'Apellidos',
          help: 'Introduce tu apellido',
          autoCapitalize: 'words'
        },
        email: {
          label: 'Email',
          help: 'Introduce tu email'
        },
        birthdate: {
          label: 'Fecha de nacimiento',
          help: 'Introduce tu fecha de nacimiento',
          error: 'Fecha incorrecta',
        },
        password_clear: {
          label: 'Contraseña',
          help: 'Introducte tu password',
          error: 'El password debe tener mas de 8 caracteres',
          password: true,
          secureTextEntry: true
        },
        confirm_password: {
          label: 'Confirma contraseña',
          help: 'Introducte tu password',
          error: 'Los passwords no coinciden',
          password: true,
          secureTextEntry: true
        }
      }
    }

    this.validate = null
  }

  onChange (user) {
    this.setState({ user })
  }

  register () {
    this.validate = this.refs.form.getValue()
    if (this.validate) {
      fetch(apiregister, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          birthdate: this.validate.birthdate,
          confirm_password: this.validate.confirm_password,
          email: this.validate.email,
          first_name: this.validate.first_name,
          last_name: this.validate.last_name,
          password_clear: this.validate.password_clear
        })
      })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  render () {
    return (
      <BackgroundImage
        source={require('../../assets/images/cityback.jpeg')}
      >
      <View>
        <ScrollView>
          <Card wrapperStyle={{ paddingLeft: 10 }} title="Registrar usuario">
            <Form
              ref="form"
              type={this.registerForm}
              options={this.options}
              onChange={v => this.onChange(v)}
              value={this.state.user}
            />
            <AppButton
              bgColor="rgba(111, 38, 74, 07)"
              title="Registra"
              action={this.register.bind(this)}
              iconName="sign-in"
              iconSize={30}
              iconColor="#fff"
            />
          </Card>
        </ScrollView>
        </View>
      </BackgroundImage>
    )
  }
}