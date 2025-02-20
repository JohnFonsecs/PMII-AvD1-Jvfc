import '@/styles/global.css'
import {Slot} from "expo-router"
import { StatusBar, View } from 'react-native'
import {useFonts, Inter_500Medium, Inter_400Regular, Inter_600SemiBold, } from '@expo-google-fonts/inter'
import { Loading } from '@/components/loading'

export default function Layout() {
    const [fontsLoaded] = useFonts({
        Inter_500Medium,
        Inter_400Regular,
        Inter_600SemiBold,
    })
    if (!fontsLoaded) {
        return <Loading/>
    }

    return (
    <View className='flex-1 bg-blue-950 mt-0 pt-0' >
    <StatusBar 
        barStyle={'default'}
        backgroundColor='transparent'
        translucent={true}
    />
    <Slot/>
    </View>
    )
}
