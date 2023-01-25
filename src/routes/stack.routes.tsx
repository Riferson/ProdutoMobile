import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Produtos } from '../screens/Produtos';
import { RegisterChangeProduct } from '../screens/RegisterChangeProduct';
import { DescriptionProduct } from '../screens/DescriptionProduct';
import { NavigationContainer } from '@react-navigation/native';

const {Navigator,Screen} = createStackNavigator();

export function StackRoutes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name='Produtos' component={Produtos}/>
                <Screen name='Cadastrar' component={RegisterChangeProduct}/>
                <Screen name='Descricao' component={DescriptionProduct}/>
            </Navigator>
        </NavigationContainer>
        
    )
}