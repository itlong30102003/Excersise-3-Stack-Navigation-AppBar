import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const HomeScreen =({ navigation })=>{
    return(
        <View style={style.container}>
            <Text>HomeScreen</Text>
            <Button mode="contained" onPress={() => navigation.navigate('Details')}>
                Go to details
            </Button>
        </View>
    );
}
export default HomeScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
});