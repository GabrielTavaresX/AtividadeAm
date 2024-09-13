import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import { ScreenMensagem, ScreenCadMessage } from '../screens';

type MessageStackParamList = {
    Message: undefined
    CadM: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList, 'Message'>
export type MessageTypes = {
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation() {
    const Stack = createStackNavigator<MessageStackParamList>()
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Message' component={ScreenMensagem} />
            <Stack.Screen name='CadM' component={ScreenCadMessage} />
        </Stack.Navigator>
    )
}