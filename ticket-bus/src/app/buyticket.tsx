import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; 
import { colors } from "@/styles/colors";
import { Link,  useRouter } from "expo-router";
import { FontAwesome6, FontAwesome5, Entypo } from "@expo/vector-icons";
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { useState } from "react";
import { CardActivy } from "@/components/activy";


export default function BuyTicket(){
   const router = useRouter()
   let number = 4
    return (
        <View className="flex-1  bg-black ">
            <StatusBar barStyle={"light-content"}/>
            <View className="flex p-8 mt-10 flex-row">
                <Link href={"/menu"}>
                    <AntDesign name="leftcircleo" size={30} color={colors.green[200]}/>
                </Link>
                <Text className="text-2xl font-carrois left-24 color-gray-500 ">Transferências</Text>
            </View>

            {/* CARD DE PAGAMENTO */}
            <View className="justify-center items-center">
                <View className="relative bg-zinc-900  w-10/12 h-44 items-center justify-center mx-2 border  rounded-2xl">
                    <View className="flex-row ">
                        <View className="right-16  justify-center items-center">
                            <Text className="font-bold text-white p-4">Tickets</Text>
                            <Text className="font-bebas text-white text-9xl">{number}</Text>
                        </View>

                        <View className="justify-center right-16 -mb-4 "> 
                            <TouchableOpacity >
                                <AntDesign className="m-1" name="pluscircleo" size={24} color={colors.green[200] }/>
                            </TouchableOpacity>
                            <AntDesign className="m-1" name="minuscircleo" size={24} color={colors.green[200]}/>
                        </View>

                        <View className="left-16 justify-center items-center">
                            <Text className="font-bold text-white m-4 ">Valor</Text>
                            <Text className="font-bebas text-white text-9xl">{number * 2.5}</Text>
                        </View>
                    </View>
                    
                </View>
            </View>

            <View className="flex flex-row justify-center p-4 left-2">
                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-20
                h-24
                bg-green-700 
                rounded-md
                justify-center 
                items-center
                "
                style={{marginRight: 14}}
                >
                    <View className="w-14 h-14 bg-green-800 justify-center items-center rounded-full ">
                        <FontAwesome6 name="pix" color="white" size={34}/>
                    </View>
                    <Text className="text-white font-bold p-1">Pix</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-20
                h-24
                bg-green-700 
                rounded-md
                justify-center 
                items-center
                "
                style={{marginRight: 14}}
                >
                    <View className="w-14 h-14 bg-green-800 justify-center items-center rounded-full ">
                        <AntDesign name="creditcard" size={34} color="white"/>
                    </View>
                    <Text className="text-white font-bold p-1">Cartão</Text>  
                </TouchableOpacity>

                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-20
                h-24
                bg-green-700
                rounded-md
                justify-center 
                items-center
                "
                style={{marginRight: 14}}
                >
                   <View className="w-14 h-14 bg-green-800 justify-center items-center rounded-full ">
                        <FontAwesome5 name="money-bill-wave" color="white" size={30}/>
                    </View>
                    <Text className="text-white font-bold p-1">Dinheiro</Text> 
                </TouchableOpacity>
                
                <TouchableOpacity 
                activeOpacity={0.7} 
                className="
                w-20
                h-24
                bg-green-700
                rounded-md
                justify-center 
                items-center
                "
                onPress={() => router.push("/pix")}
                style={{marginRight: 14}}
                >
                  <View className="w-14 h-14 bg-green-800 justify-center items-center rounded-full ">
                        <Entypo name="calendar" color="white" size={34}/>
                    </View>
                    <Text className="text-white font-bold p-1">Agendar</Text>  
                </TouchableOpacity>
                
            </View>

            {/* ULTIMOS PEDIDOS */}
            <View className="justify-center items-center">
                <View>
                    <Text className="font-carrois text-gray-600 text-xl p-3 right-24">Compras Recentes</Text>
                </View>

                <CardActivy/>
                <CardActivy/>
                <CardActivy/>
                <CardActivy/>
            </View>
        </View>
    )
}