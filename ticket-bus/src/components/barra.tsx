import { 
    Text, 
    View ,
    TouchableOpacity, 
} from "react-native"

import { 
    Feather,
    FontAwesome6, 
    MaterialIcons, 
    MaterialCommunityIcons , 
} from "@expo/vector-icons"

import React from "react"
import { useNavigation } from "@react-navigation/native"
import { colors } from "@/styles/colors"
import { useRouter } from "expo-router"

export function BarraOptions(){
    const navigation = useNavigation();
    const router = useRouter();
    return (
        <View className="h-28 flex flex-row space-x-6 items-end px-11 pb-6 -mt-6 ml-5">
            
            <View className="h-16">
                <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={() => router.push("/buyticket")}
                className="
                w-16
                h-16
                bg-gray-700 
                rounded-full 
                justify-center 
                items-center
                "
                style={{marginRight: 9}}
                >
                    <FontAwesome6 name="money-bill-transfer" color={colors.gray[300]} size={25}/>
                </TouchableOpacity>
                <Text className="text-gray-400 font-carrois text-base px-1 mt-1" >Transfer</Text>

            </View>

            <View className="h-16">
                <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={() => router.push("/driver")}
                className="
                w-16
                h-16
                bg-gray-700 
                rounded-full 
                justify-center 
                items-center
                "
                style={{marginRight: 9}}
                >
                    <FontAwesome6 name="ticket" color={colors.gray[300]} size={25}/>
                </TouchableOpacity>
                <Text className="text-gray-400 font-carrois text-base px-3 mt-1" >Ticket</Text>

            </View>

            <View className="h-16">
                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-16
                h-16
                bg-gray-700 
                rounded-full 
                justify-center 
                items-center"
                style={{marginRight: 9}}
                >
                    <MaterialIcons name="account-balance" color={colors.gray[300]} size={26}/>
                </TouchableOpacity>
                <Text className="text-gray-400 font-carrois text-base px-2 mt-1" >Extrato</Text>
            </View>

            <View className="h-16">
                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-16
                h-16
                bg-gray-700 
                rounded-full 
                justify-center 
                items-center"
                style={{marginRight: 8}}
                onPress={() => router.push("/")}
                >
                    <Feather name="user" color={colors.gray[300]} size={28}/>
                </TouchableOpacity>
                <Text className="text-gray-400 font-carrois text-base px-3 mt-1" >Conta</Text>
            </View>

            <View className="h-16">
                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-16
                h-16
                bg-gray-700 
                rounded-full 
                justify-center 
                items-center"
                style={{marginRight: 9}}
                >
                    <Feather name="more-horizontal" color={colors.gray[300]} size={28}/>
                </TouchableOpacity>
                <Text className="text-gray-400 font-carrois text-base px-4 mt-1" >Mais</Text>
            </View>
        </View>
    )
}