import React, { Component } from 'react'
import { Button } from 'react-native-elements'
import { Dimensions } from 'react-native' 

export default class AppButton extends Component {
  render () {
    const { action, iconName, iconColor, title, bgColor } = this.props
    const { width } = Dimensions.get('window')
    return (
      <Button
        onPress={action}
        buttonStyle={{
          backgroundColor: bgColor,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5,
          marginBottom: 5,
          width
        }}
        title={title}
        size={15}
        icon={{ name: iconName, type: 'font-awesome' }}
        rightIcon={{ color: iconColor }}
        text={title}
      >
      </Button>
    )
  }
}