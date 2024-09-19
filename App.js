import React from "react";
import { NavigationContainer} from "@react-navigation/native";

import { PaperProvider, Text } from "react-native-paper";
import HomeScreen from "./component/HomeScreen";
import DetailsScreen from "./component/DetailsScreen";
import { View } from "react-native";
import CustomNavigationBar from "./android/app/src/CustomNavigationBar";
import MyDrawer from "./routers/MyDrawer";
import MyButtonTab from "./routers/MyButtonTab";
import firestore from "@react-native-firebase/firestore"
import MyStack from "./routers/MyStack";

const tblUsers = firestore().collection("USERS")
// const Stack = createStackNavigator();
const App=()=>{

  tblUsers.add({
    useName: "Teo",
    address:"BD"
  })
  .then(()=> console.log("Add new users!"))

  return(
    <PaperProvider>
      <NavigationContainer>
        {/* <MyStack/> */}
        {/* <MyDrawer/> */}
        <MyButtonTab/>
        
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;