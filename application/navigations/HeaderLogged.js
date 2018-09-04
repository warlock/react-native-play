import React from 'react'
import { View } from 'react-native'
import { Icon, Avatar } from 'react-native-elements'
import { SafeAreaView  } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

export const HeaderLogged = (props) => (
  <SafeAreaView style={{ backgroundColor: 'grey' }}>
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
    <View>
      <Icon
        name="bars"
        type="font-awesome"
        onPress={() => { props.navigation.toggleDrawer() }}
        underlayColor="transparent"
      />
    </View>
    <View style={{ alignContent: 'flex-start' }}>
    <Avatar
      small
      rounded
      source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
      onPress={() => alert("Works!")}
      activeOpacity={0.7}
    />
    </View>
  </View>
  </SafeAreaView>
)