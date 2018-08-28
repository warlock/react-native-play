import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppButton from './application/components/AppButton'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open!</Text>
        <AppButton
          action={() => { alert('uoah') }}
          bgColor="red"
          title="Test"
          iconName="sign-in"
          iconSize={30}
          iconColor="#fff"
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
