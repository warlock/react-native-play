import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackgroundImage from '../application/components/BackgroundImage'

export default class App extends Component {
  render() {
    return (
      <BackgroundImage
        source={require('./assets/images/cityback.jpeg')}
      >
        <View>
          <Text style={{ color: '#fff', marginTop: 100 }}>Holaa</Text>
        </View>
      </BackgroundImage>
    )
  }
}