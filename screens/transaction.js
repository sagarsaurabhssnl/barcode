import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default class transaction extends React.Component {
    constructor() {
        super(); this.state = {
            hasCameraPermission: null,
            scanned: false,
            scannedData: "",
            buttonState: "normal"
        }
    }

    getCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermissions: status === "granted", buttonState: "clicked", scanned: false })
    }

    handleBarCodeScanned = async ({ type, data }) => {
        this.setState({ scanned: true, scannedData: data, buttonState: "normal" })
    }

    render() {
        const hasCameraPermission = this.state.hasCameraPermission;
        const scanned = this.state.scanned;
        const buttonState = this.state.buttonState;

        if (buttonState === "clicked" && hasCameraPermission) {
            return (
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                />
            );
        } else if (buttonState === "normal") {
            return (
                <View style={styles.container}>
                    <Text>This is transation screen</Text>
                    <TouchableOpacity style={{ padding: 20, backgroundColor: "#212121", marginTop: 20 }}><Text style={{ color: "#fff" }}
                        onPress={() => {
                            this.getCameraPermission()
                        }}>Scan QR Code</Text></TouchableOpacity>
                    <Text>{hasCameraPermission === true ? this.state.scannedData : "request Camera Permission"}</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
