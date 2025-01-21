
import { 
    View, 
    Text,
    Image, 
    StatusBar,
    Alert
} from "react-native"

import { useEffect, useState } from "react"

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

export default function Register(){
    const [code, setCode] = useState("")
    const [hidePass, setHidePass] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")

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

    const validateUser = async () => {
        setIsLoading(true)

        try {

            if(!email.trim() || !senha.trim() || !nome.trim()){
                setIsLoading(false)
                return Alert.alert("Registro", "Preencha todos os campos!")
            }

            const response = await api.post("/users", {
                username: nome,
                email: email,
                password: senha
            }) 

            Alert.alert("Registo", "Usuário cadastrado com sucesso!", [
                {text: "Ok", onPress: () => router.push("/")}
            ])
                   
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
                    placeholder="Nome" 
                    onChangeText={setNome}
                    />
                    <Entypo
                        name="user"
                        color={colors.green[200]}
                        size={20}
                    />
                </Input>

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

                <Button title="Cadastrar" onPress={validateUser} isLoading={isLoading}/>
                
            </View>

        </View>
    )
}