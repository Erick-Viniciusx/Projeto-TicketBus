import { 
    Text, 
    View ,
    TouchableOpacity, 
} from "react-native"

import { 
    Feather,
    FontAwesome6,
    FontAwesome, 
} from "@expo/vector-icons"

import React from "react"
import { useNavigation } from "@react-navigation/native"
import { colors } from "@/styles/colors"
import { useRouter } from "expo-router"

export function DriverBar(){
    const router = useRouter();

    return (
        <View className="h-36 flex flex-row space-x-6 items-end px-11 pb-6 -mt-6 ml-5">
            <TouchableOpacity 
            activeOpacity={0.7} 
            className="
            w-36
            h-24
          bg-gray-700
            rounded-xl 
            justify-center 
            items-center
            "
            style={{marginRight: 9}}
            >
            <FontAwesome6 name="ticket" color={colors.gray[300]} size={25}/>
            </TouchableOpacity>           
            
            <TouchableOpacity 
            activeOpacity={0.7} 
            className="
            w-36
            h-24
          bg-gray-700
            rounded-xl 
            justify-center 
            items-center
            "
            style={{marginRight: 9}}
            >
            <FontAwesome name="qrcode" color={colors.gray[300]} size={25}/>
            </TouchableOpacity>   
         
        </View>
    )
}