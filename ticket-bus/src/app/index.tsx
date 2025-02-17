
import { 
    View, 
    Text,
    Image, 
    StatusBar,
    Alert
} from "react-native"

import { useContext, useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

import { Entypo } from "@expo/vector-icons"
import { colors } from "@/styles/colors"

import axios from 'axios'

import { Link } from "expo-router/build/link/Link"
import { Redirect, router } from "expo-router"

const api = axios.create({
    baseURL: "http://192.168.0.15:8000",
});

export default function Home(){
    const [code, setCode] = useState("")
    const [hidePass, setHidePass] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const isNumeric = (str: string) => /^[0-9]+$/.test(str);
    
    function handleButton(){
       try{
            if(!email.trim() || !senha.trim()){
                return Alert.alert("Login", "Preencha todos os campos!")
            }

            if(isNumeric(email.trim())){
                return Alert.alert("Login", "This is Numeric")
            }
            
            Alert.alert("Login", "Login realizado com sucesso!", [
                {text: "Ok", onPress: () => router.push("/menu")}
            ])

       }catch(error){
            setIsLoading(false)
            Alert.alert("Login", "Não foi possível encontrar a conta!")
       }
    }

    const validateUser = async () => {
        setIsLoading(true)

        try {

            if(!email.trim() || !senha.trim()){
                setIsLoading(false)
                return Alert.alert("Login", "Preencha todos os campos!")
            }

            if(isNumeric(email.trim())){
                const response = await api.postForm("/auth/validate_driver", {
                    username: email,
                    password: senha
                }) 
                
                Alert.alert("Login", "Login realizado com sucesso!", [
                    {text: "Ok", onPress: () => router.push("/driver")}
                ])
            }
            else {
                const response = await api.postForm("/auth/token", {
                    username: email,
                    password: senha
                }) 
                
                Alert.alert("Login", "Login realizado com sucesso!", [
                    {text: "Ok", onPress: () => router.push("/menu")}
                ])
            }
            
                   
        }catch(error){
            if(axios.isAxiosError(error)){
                setIsLoading(false)
                if(error.response && error.response.status === 400){   
                    Alert.alert("Login", "Email ou senha inválido!")
                }
                else {
                    
                    Alert.alert("Login", `error no servidor: ${error.response?.status}`)
                }
            }
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

                <Button title="Fazer Login" onPress={validateUser} isLoading={isLoading}/>
                
                <Link href="/" className="text-gray-100 text-base font-regular text-center mt-5">
                    Esqueceu a senha?
                </Link>

                <Link href="/register" className="text-green-600 text-base font-regular text-center">
                    Não tem conta? Cadastre-se
                </Link>
            </View>

        </View>
    )
}