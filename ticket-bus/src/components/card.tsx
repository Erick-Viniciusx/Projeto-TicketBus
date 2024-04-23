import {View, Text} from "react-native"

type Props = {
    day: string
    value: string
}
export function Card({day, value}: Props){
    return (
        <View className="bg-zinc-900  w-36 h-40 items-center mx-2 border border-white/20  rounded-2xl -m-28">
            <View className="w-16 h-16 bg-gray-500 rounded-full -m-9 "/>
            <Text className="text-gray-600 py-14 font-carrois">{day}</Text>
            <Text className="text-white font-bebas text-5xl -mt-11">R$ {value}</Text>
        </View>
    
    )
}