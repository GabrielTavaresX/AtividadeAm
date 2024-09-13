import { BarcodeScanningResult, CameraView, useCameraPermissions } from "expo-camera";
import { useAuth } from "../../hook/auth";
import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { ComponentBottonInterface, ComponentLoading } from "../../components"; 

export function QrCode() {
    const { user } = useAuth()
    const [ scanned, setScanned ] = useState(false);
    const [permission, requestPermision] = useCameraPermissions();
    if(!permission) {
        return <ComponentLoading />
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Você precisa dar permição para acesso da câmera</Text>
                <TouchableOpacity onPress={requestPermision}>Solicitar Permissão</TouchableOpacity>
            </View>
        );
    }
    function handleBacodeScanner({data}: BarcodeScanningResult){
        Alert.alert(`Olá ${data}`)
        setScanned(true)
    }

    return(
        <>
            {user && user.user.name && (
                <Image source={{uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${user.user.name}&choe=UTF-8`}} style={styles.qrcode} />
            )}
            {!scanned ? (
                <CameraView
                    style={styles.qrcode}
                    barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                    onBarcodeScanned={handleBacodeScanner}
                />
            ) : (
                <ComponentBottonInterface onPressI={() => setScanned(false)} title='Scaner Novamente' type='primary' />
            )}
        </>
    )
}