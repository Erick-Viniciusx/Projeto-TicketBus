import "@/styles/global.css"
import { Slot } from "expo-router"


import { Loading } from "@/components/loading"

import { useFonts, Roboto_500Medium, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto"
import { BebasNeue_400Regular  } from "@expo-google-fonts/bebas-neue"
import { CarroisGothic_400Regular  } from "@expo-google-fonts/carrois-gothic"

export default function Layout(){
    const [fontsLoaded] = useFonts({
        Roboto_500Medium, 
        Roboto_400Regular, 
        Roboto_700Bold,
        BebasNeue_400Regular,
        CarroisGothic_400Regular
    })

    if (!fontsLoaded){
        return <Loading/>
    }
    return <Slot/>
}