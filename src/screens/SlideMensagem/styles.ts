import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyles";
export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    item: {
        backgroundColor: colors.third,
        width: "100%",
        marginTop: 10,
        borderRadius: 10
    },

    itemText: {
        fontSize: 20,
        padding: 10
    },
    
    botao: {
        position: "absolute",
        bottom: 50,
        right: 50
    }
})
