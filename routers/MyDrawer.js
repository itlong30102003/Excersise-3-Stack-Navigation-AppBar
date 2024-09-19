
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerBar from "../component/CustomDrawerBar";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";


const Drawer = createDrawerNavigator()

const MyDrawer = () =>{
    return(
        <Drawer.Navigator
            drawerContent={(props)=>
                <CustomDrawerBar {...props}/>
            }    
        >
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Setting" component={Setting}/>
        </Drawer.Navigator>
    )
}

export default MyDrawer;