
import { View, Text, Button } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import React from "react";

import HomeScreen from './HomeScreen'
import PrivateChatScreen from './PrivateChatScreen'
import UserCenterScreen from './UserCenterScreen'
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>首页1</Text>
      
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>私聊</Text>
//       </View>
//     );
//   }
// }


// class userCenterScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>个人中心</Text>
//       </View>
//     );
//   }
// }

const AppNavigator = createBottomTabNavigator({
    '首页': HomeScreen,
    '私聊2': PrivateChatScreen,
    '个人中心':UserCenterScreen
  },
  {
    initialRouteName: "首页"
  }
);

export default createAppContainer(AppNavigator);