import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"
import t from 'tcomb-form-native'
import { registerValidation } from '../utils/validation'
import { Card } from 'react-native-elements'
const Form = t.form.Form
import Toast from 'react-native-simple-toast'

export default class Register extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        birthdate: '',
        password_clear: '',
        confirm_password: '',
        first_name: '',
        last_name: ''
      }
    }
    
    this.samePassword = t.refinement(t.String, s => {
      return s === this.state.user.password_clear
    })

    this.registerForm = t.struct({
      first_name: registerValidation.first_name,
      last_name: registerValidation.last_name,
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
        birthdate: {
          label: 'Fecha de nacimiento',
          help: 'Introduce tu email',
          error: 'Email incorrecto',
          autoCapitalize: 'none'
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
      alert('ok')
    } else {
      alert('buh')
    }
    /*
    if (this.validate) {
      fetch('', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          birthdate: validate.birthdate,
          confirm_password: validate.confirm_password,
          email: validate.email,
          first_name: validate.first_name,
          last_name: validate.last_name,
          password_clear: validate.password_clear
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
    */
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
              title="Register"
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