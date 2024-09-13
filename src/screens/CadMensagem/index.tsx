import { useState } from "react";
import { MessageTypes } from "../../navigation/message.navigation";
import { Alert, KeyboardAvoidingView, Text, TextInput, View } from "react-native";
import { colors } from "../../styles/GlobalStyles";
import { ComponentBottonInterface } from "../../components";
import { IMessage } from "../../service/data/Message";
import { useAuth } from "../../hook/auth";
import { AxiosError } from "axios";
import { apiMessage } from "../../service/data";
import { styles } from "./styles";

export function CadMessage({navigation}: MessageTypes){
    const [data, setData] = useState<IMessage>()
    const { setLoading } = useAuth()
    function handleChange(item: IMessage) {
        setData({...data, ...item});
    }
    async function handleCadMessage() {
        if (data?.title && data.message) {
            setLoading(true)
            try {
                 
                console.log(data)
                await apiMessage.store(data)
                Alert.alert("Mensagen cadastrada!!!")
                navigation.navigate("Message")
            } catch (error) {
                const err = error as AxiosError
                const msg = err.response?.data as string
                Alert.alert(msg)
            }
            setLoading(false)
        } else {
            Alert.alert("Preencha todos os campos!");
        }
    }

return (
    <View style={styles.container}>
        <KeyboardAvoidingView>
            <Text style={styles.title}>Cadastrar Mensagem</Text>
            <View style={styles.formRow}>
                <TextInput 
                    placeholderTextColor={colors.third}
                    style={styles.input}
                    placeholder="Título"
                    onChangeText={(i) => handleChange({ title: i})}
                />
            </View>
            <View style={styles.formRow}>
                <TextInput 
                    placeholderTextColor={colors.third}
                    style={styles.input}
                    placeholder="Mensagem"
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(i) => handleChange({ message: i})}
                />
            </View>
            <ComponentBottonInterface title="Enviar" type ="secondary"
                onPressI={handleCadMessage} />
                <ComponentBottonInterface title="Voltar" type ="secondary"
                onPressI={() => navigation.navigate("Message")} />
        </KeyboardAvoidingView>
    </View>
)
}
