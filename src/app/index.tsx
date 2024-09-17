import {View, Text, Image} from "react-native";
import { Button } from "@/components/button";
import { FontAwesome } from '@expo/vector-icons';


export default function Index(){
    return(
        <View className='flex-1' >
            <View className='mt-0 pt-0'>
                <Image source={require('@/assets/products/cover/1.png')} className="w-full h-80 mt-0 pt-0" resizeMode="contain" />
            </View>
            <View className='flex-col p-4'>
                <Text className='text-white text-2xl font-bold'>X-React</Text>
                <Text className='text-lime-400 text-3xl font-bold mt-2'>R$ 34,90</Text>
                <Text className='text-white text-lg font-regular mt-2'>Um hambúrguer tão bonito que meu fome enquanto eu fazia esse layout para o projeto</Text>
            </View>
            <View className='flex-col mt-4 p-5'>
                    <Text className='text-white text-lg font-regular'>• Pão brioche;</Text>
                    <Text className='text-white text-lg font-regular'>• 2x carnes smash (blend da casa) de 80g;</Text>
                    <Text className='text-white text-lg font-regular'>• Queijo cheddar;</Text>
                    <Text className='text-white text-lg font-regular'>• Alface;</Text>
                    <Text className='text-white text-lg font-regular'>• Tomate;</Text>
                    <Text className='text-white text-lg font-regular'>• Picles;</Text>
                    <Text className='text-white text-lg font-regular'>• Cebola;</Text>
                    <Text className='text-white text-lg font-regular'>• Molho da casa;</Text>

            </View>
            <View className='flex-1 justify-end items-center'>
                <Button
                    onPress={() => {}}>
                        <FontAwesome name="plus-circle" size={24} color="white" />
                        <Button.Title>Adicionar ao pedido</Button.Title>
                </Button>
            </View> 
            <View className='flex-1 items-center'>
                <Button variant="secondary"
                    
                    onPress={() => {}}>
                        <Button.Title>Voltar ao Cardápio</Button.Title>
                </Button>
            </View> 
        </View>
    )
}
