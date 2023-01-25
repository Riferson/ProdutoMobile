import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacityProps } from "react-native";
import {Container,Produtos,Cadastrar,Label} from './styles';

interface Props extends TouchableOpacityProps {
}
export function Footer({...rest}:Props){

    const navigation = useNavigation<any>();
    function handleCProduto(){
        navigation.navigate('Produtos');
    }
    function handleCadastrarProduto(){
        navigation.navigate('Cadastrar');
    }

    return(
        <Container{...rest}>
            <Produtos onPress={handleCProduto}><Label>Produtos</Label></Produtos>
            <Cadastrar onPress={handleCadastrarProduto}><Label>Cadastrar</Label></Cadastrar>
        </Container>
    );
}