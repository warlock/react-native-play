import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import BackgroundImage from '../components/BackgroundImage'
import AppButton from "../components/AppButton"
import t from 'tcomb-form-native'
import { registerValidation } from '../utils/validation'
import { Card } from 'react-native-elements'
import firebase from 'firebase/app'
const Form = t.form.Form

export default class Register extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        password_clear: '',
        confirm_password: '',
        email: ''
      }
    }
    
    this.samePassword = t.refinement(t.String, s => {
      return s === this.state.user.password_clear
    })

    this.registerForm = t.struct({
      email: registerValidation.email,
      password_clear: registerValidation.password_clear,
      confirm_password: this.samePassword
    })

    this.options = {
      fields: {
        email: {
          label: 'Email',
          help: 'Introduce tu email'
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
      firebase.auth().createUserWithEmailAndPassword(this.validate.email, this.validate.password).catch((error) => {
        alert(error.message)
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