import { createStackNavigator  } from 'react-navigation'
import { HeaderLogged } from './HeaderLogged'
import { drawerStack } from './DrawerStack'
import React from 'react'

export default createStackNavigator({
    drawerStack
  },
  {
    /*
    navigationOptions: {
      header: HeaderLogged
    }
    */
    navigationOptions: ({ navigation }) => ({
      header: <HeaderLogged navigation={navigation} />,
    })
  }
)