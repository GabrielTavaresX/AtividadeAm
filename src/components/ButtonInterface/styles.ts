import { StyleSheet } from "react-native";
import { colors } from '../../styles/GlobalStyles'

export const styles = StyleSheet.create({
    bottonPrymary: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        margin: 10,
    },

    bottonSecondary: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        margin: 10,
    },

    bottonThird: {
        backgroundColor: colors.third,
        borderRadius: 5,
        margin: 10,
    },

    text: {
        color: colors.white,
        fontWeight: 'bold',
        padding: 10,
        fontSize: 18,
        textAlign: 'center'
    }

})