import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export function CardActivy(){
 return (
    <View className="items-center bg-zinc-900 h-24 w-10/12 rounded-2xl  justify-center mt-3">
        <FontAwesome5 name="bus" color="white" size={30}/>  
    </View>
 )
}