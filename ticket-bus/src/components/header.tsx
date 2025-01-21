import {View, Text, TouchableOpacity} from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

type Props = {
    title?: string
}

export function Header({title}: Props){
    return (
        <View className="w-full h-36 flex-row items-end px-8 pb-4 border-b justify-between">
            <View className=" h-14 ">
                <Text className=" text-gray-500 font-regular text-base">Bem-vindo de volta</Text>
                <Text className="flex-auto text-white font-bebas text-4xl">Olá {title}</Text>
            </View>

            <TouchableOpacity activeOpacity={0.9} className="w-12 h-12 bg-gray-700 rounded-full justify-center items-center">
                <Feather name="user" color={colors.gray[200]} size={25} />
            </TouchableOpacity>
        </View>
    )
}