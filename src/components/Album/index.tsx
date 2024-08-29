import {useEffect, useState} from "react";
import * as MediaLibary from "expo-media-library";
import {styles} from "./styles"
import { View, Image, Text } from "react-native";

interface IAlbum {
    album: MediaLibary.Album
}
export function Album({album}:IAlbum){
    const [assets,setAssets] = useState<MediaLibary.Asset[]>([]);

  useEffect(() => {
    async function getAlbumAssets(){
        const albumAssets = await MediaLibary.getAssetsAsync({album});
        setAssets(albumAssets.assets);
    }
    getAlbumAssets();

  }, [album]);
  return (
     <View key={album.id} style={styles.albumContainer}>
        <Text>
            {album.title} - {album.assetCount ?? 'no'} assets
        </Text>
        <View style={styles.albumAssetsContainer}>
          {assets && assets.map((asset)=>(
            <Image source={{uri: asset.uri}} width={50} height={50} />
          ))}
        </View>
     </View>
  )
}