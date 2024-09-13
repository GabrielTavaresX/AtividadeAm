import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import { apiMessage } from '../../service/data';
import { IResponseMessage } from "../../service/data/Message";
import { useAuth } from "../../hook/auth";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../styles/GlobalStyles";
import { MessageTypes } from "../../navigation/message.navigation";


export function Mensagem({ navigation }: MessageTypes) {

    const [message, setMessages] = useState<IResponseMessage[]>([]);


    useEffect(() => {
        async function loadMessage() {
            try {
                const response = await apiMessage.index();
                setMessages(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        loadMessage();
    }, []);

    interface itemMessage {
        item: IResponseMessage;
    }

    const renderItem = ({ item }: itemMessage) => {
        return (
            <View>
                <Text style={styles.itemText}>Título: {item.title}</Text>
                <Text style={styles.itemText}>Mensagem: {item.message}</Text>
            </View>
        )
    };
    return (
        <View style={styles.conteiner}>
            <View style={styles.item}>
            {message.length > 0 && (
                <FlatList
                    data={message}
                    renderItem={renderItem}
                    keyExtractor={(item) => String(item.id)}
                />
            )}
            </View>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate("CadM")}>
                <AntDesign name="pluscircle" size={48} color={colors.secondary} />
            </TouchableOpacity>
        </View>
    );
}
