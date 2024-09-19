import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../component/HomeScreen";
import DetailsScreen from "../component/DetailsScreen";
import CustomNavigationBar from "../android/app/src/CustomNavigationBar";

const Stack = createStackNavigator();
const MyStack =()=>{
   
    return(
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props}/> ,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
        </Stack.Navigator> 
    );

}
export default MyStack;