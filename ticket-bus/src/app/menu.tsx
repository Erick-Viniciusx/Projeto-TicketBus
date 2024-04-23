import { 
    View, 
    Text,
    Image, 
    StatusBar, 
    ScrollView,
    TouchableOpacity, 
    StyleSheet
} from "react-native";

import { Header } from "@/components/header";
import { BarraOptions } from "@/components/barra";
import { Card } from "@/components/card";



export default function MainMenu(){
    const styles = StyleSheet.create({
        container: {
          flexDirection: 'row', // Isso garante o layout horizontal
          padding: 10,
        },
        item: {
          width: 200, // Largura do item
          height: 200, // Altura do item
          backgroundColor: 'lightgray',
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
        },
      });

    return (
        <View className="bg-black flex-1 ">
           <StatusBar barStyle={"light-content"}/>
           <Header title="Erick"/>

            <View className="items-center">
                <Image source={require("@/assets/mainMenu/card.png")} className="mt-8" />

                <BarraOptions/>
            </View>
            <View className="w-full flex-row justify-between">
                <Text className="v-full text-white font-bebas text-3xl px-8 pb-4 border-b h-60 py-10">Últimos Tickets</Text>
                <TouchableOpacity activeOpacity={0.7}>
                     <Text className="font-regular text-green-600 py-11 mr-6">See all</Text>
                </TouchableOpacity>
            </View>
            
            <ScrollView horizontal={true} className=" -mt-40" contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
                <View  className="flex-row mx-10 items-center -mt-10">
                    <Card day="Quinta-feira" value={5.00.toFixed(2)}/>
                    <Card day="Quarta-feira" value={2.50.toFixed(2)}/>
                    <Card day="Terça-feira" value={5.00.toFixed(2)}/>
                    <Card day="Segunda-feira" value={5.00.toFixed(2)}/>
                </View>
            </ScrollView>

        </View>

     
    )
}