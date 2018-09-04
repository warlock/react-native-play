import React, { Component } from 'react'
import { Button } from 'react-native-elements'

export default class AppButton extends Component {
  render () {
    const { action, iconName, iconColor, title, bgColor } = this.props
    return (
      <Button
        onPress={action}
        buttonStyle={{
          backgroundColor: bgColor,
          height: 45,
          borderWidth: 0,
          borderRadius: 5,
          marginBottom: 5,
          width: '100%'
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