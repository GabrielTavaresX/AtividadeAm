import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Perfil } from '../screens'
import { colors } from '../styles/colors';
import { Feather, FontAwesome } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import {MessageNavigation} from './message.navigation'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
    navigation: TabScreenNavigationProp
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<TabParamList>()
        return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: colors.secondary,
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarInactiveBackgroundColor: colors.secondary,
                tabBarInactiveTintColor: colors.white,
            }}
        >

        <Tab.Screen name='Perfil' component = {Perfil}
            options={{
            tabBarIcon: () =>(
                <FontAwesome5 name="skull-crossbones" size={24} color="black" />
            ),
            }}
        />
        <Tab.Screen name='Mensagem' component= {MessageNavigation}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="skull" size={24} color="black" />
                    ),
                }}
        />
        </Tab.Navigator>
        )
}