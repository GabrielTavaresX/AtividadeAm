import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenMensagem} from '../screens';
import { Ionicons, FontAwesome, FontAwesome6, AntDesign } from '@expo/vector-icons';
import { colors } from '../styles/GlobalStyles';


type MenuTabParam = {
    Perfil: undefined
    Mensagem: undefined
}

type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "Perfil">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function TabNavigation() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.white,
            headerShown: false,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarInactiveTintColor: colors.white
        }}
        >
            <Tab.Screen name="Perfil" component={ScreenPerfil}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="user-o" size={24} color="black" />
                   )
                }}

            />


            <Tab.Screen name='Mensagem' component={ScreenMensagem}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome6 name="message" size={24} color="black" />
                    ),
                }}  
            />


        </Tab.Navigator>
    )
}