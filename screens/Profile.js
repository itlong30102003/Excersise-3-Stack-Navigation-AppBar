import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper"

const Profile = () => {
    return(
        <View style = {myStyle.container}>
            <Text variant="displayLarge">Profile Screen </Text>
        </View>
    );
}

export default Profile;

const myStyle = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})