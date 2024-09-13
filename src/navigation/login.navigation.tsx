import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { ScreenLogin, ScreenRegister } from "../screens";


type MenuStackParamList = {
    Login: undefined
    Register: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParamList, "Login">
export type LoginTypes = {
    navigation: MenuScreenNavigation
}

export function LoginNavigation() {
    const Stack = createStackNavigator<MenuStackParamList>();
    return (
        <Stack.Navigator id="login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={ScreenLogin}/>
            <Stack.Screen name="Register" component={ScreenRegister}/>
        </Stack.Navigator>
    )
}