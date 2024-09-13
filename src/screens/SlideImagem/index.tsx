import { useState } from "react";
import { ScrollView, View, Image } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { styles } from "./styles";
import { ComponentAlbum, ComponentBottonInterface } from "../../components";

export function Imagens(){
    const [albums, setAlbums] = useState<MediaLibrary.Album[] | null>(null);
    const [permissionRespose, requestPermission] = MediaLibrary.usePermissions();
    const [image, setImage] = useState<string | null>(null);
    async function getAlbum() {
        if(permissionRespose && permissionRespose.status !== 'granted'){
            await requestPermission();
        
        }
        const fetchedAlbum = await MediaLibrary.getAlbumsAsync({
            includeSmartAlbums: true,
        });
        setAlbums(fetchedAlbum);
    }
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if(!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }
    return (
        <>
            <ComponentBottonInterface onPressI={pickImage} title="Abrir Imagem" type="secondary" />
            <View style={styles.containerImage}>
                {image && <Image source={{ uri: image }} style={styles.image} />}
            </View>
            <ComponentBottonInterface onPressI={getAlbum} title="Buscar Albuns" type="primary" />
            <ScrollView>
                {albums && albums.map((album) => <ComponentAlbum album={album} />)}
            </ScrollView>
        </>
    );
}