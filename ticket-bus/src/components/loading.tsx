import { ActivityIndicator } from "react-native"

export function Loading(){
    return (
        <ActivityIndicator className="flex-1 bg-green-500 justify-center items-center text-orange-500 " />
    )
}