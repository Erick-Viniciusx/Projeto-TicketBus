
import { 
    View, 
    Text,
    Image, 
    StatusBar,
    Alert
} from "react-native"

import { useState } from "react"

import { TouchableOpacity } from "react-native"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

import { Entypo } from "@expo/vector-icons"

import { colors } from "@/styles/colors"

import { Link } from "expo-router/build/link/Link"
import { Redirect, router } from "expo-router"

export default function Home(){
    const [code, setCode] = useState("")
    const [hidePass, setHidePass] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    function handleButton(){
       try{
            if(!email.trim() || !senha.trim()){
                return Alert.alert("Login", "Preencha todos os campos!")
            }

            
            Alert.alert("Login", "Login realizado com sucesso!", [
                {text: "Ok", onPress: () => router.push("/menu")}
            ])

       }catch(error){
            setIsLoading(false)
            Alert.alert("Login", "Não foi possível encontrar a conta!")
       }
    }

    return (
        <View className="flex-1 justify-center items-center bg-black p-8">
            <StatusBar barStyle="light-content"/>

            <Image
                source={require("@/assets/Logo.png")}
                className="h-28 size-max" 
                resizeMode="contain"  
                 
            />

            <View className="v-full mt-12 gap-3">

                <Input>
                    <Input.Field 
                    placeholder="E-mail" 
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    />
                    <Entypo
                        name="email"
                        color={colors.green[200]}
                        size={20}
                    />
                </Input>

                <Input>
                    <Input.Field 
                    placeholder="Senha" 
                    onChangeText={setSenha}
                    secureTextEntry={hidePass}
                    />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setHidePass(!hidePass)}>
                        { hidePass ? (
                            <Entypo
                            name="eye"
                            color={colors.green[200]}
                            size={20}
                        />
                        ): (
                            <Entypo
                            name="eye-with-line"
                            color={colors.green[200]}
                            size={20}
                        />
                        )}
                    </TouchableOpacity>
                </Input>

                <Button title="Fazer Login" onPress={handleButton} isLoading={isLoading}/>
                
                <Link href="/" className="text-gray-100 text-base font-regular text-center mt-8">
                    Esqueceu a senha?
                </Link>
            </View>

        </View>
    )
}