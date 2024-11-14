import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({ icon, color,  name, focused }) => {
    return (
        <View>  
            <Image
            source={icon}
            resizeMode="contain"
            className="w-6 h-6"
            tintColor={color}
            />

        </View>
    )
}

const TabLayout = () => {
  return (
    <>
    <Tabs>

        <Tabs.Screen
          name='home'
          options={{
            title:'Home',
            headerShown: false,
            tabBarIcon:({ color, focused })=>(
            <TabIcon
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
            />
            )
          }}
        />

         <Tabs.Screen
          name='clipboard'
          options={{
            title:'Check List',
            headerShown: false,
            tabBarIcon:({ color, focused })=>(
            <TabIcon
            icon={icons.clipboard}
            color={color}
            name="Clipboard"
            focused={focused}
            />
            )
          }}
        />

       <Tabs.Screen
          name='profile'
          options={{
            title:'Profile',
            headerShown: false,
            tabBarIcon:({ color, focused })=>(
            <TabIcon
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
            />
            )
          }}
        />

    </Tabs>
    </>
  )
}

export default TabLayout