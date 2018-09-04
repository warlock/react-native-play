import HomeScreen from '../screens/Home'
import { createDrawerNavigator } from 'react-navigation'

export const drawerStack = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  }
},
{
  initialRouteName: 'Home'
})