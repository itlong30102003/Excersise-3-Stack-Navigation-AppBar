
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Setting from "../screens/Setting";


const Tab = createMaterialBottomTabNavigator();

const MyButtonTab =()=>{
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon:'home',
                    tabBarBadge:4,
                    title:"Trang chu"
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon:'home',
                    tabBarBadge:4,
                    title:"Ho so"
                }}/>
            <Tab.Screen name='Setting' component={Setting}
                options={{
                    tabBarIcon:'home',
                    tabBarBadge:4,
                    title:"Cai dat"
                }}/>
        </Tab.Navigator>
    );
}

export default MyButtonTab;