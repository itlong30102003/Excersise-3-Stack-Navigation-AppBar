import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper"

const Setting = () => {
    return(
        <View style = {myStyle.container}>
            <Text variant="displayLarge">Setting Screen </Text>
        </View>
    );
}

export default Setting;

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})