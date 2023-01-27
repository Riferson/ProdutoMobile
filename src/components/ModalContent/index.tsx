import { useNavigation } from "@react-navigation/native";
import React from "react";
import { api } from "../../services/api";
import {Container,Title,SubTitle,Comfirm,Cancel,Label,ButtonArea} from './styles';

interface props{
    id:number;
    modalClose:()=> void;
}

export function ModalContent({id,modalClose}:props){
    console.log('idnoModal',id);
    const navigation = useNavigation<any>();
    async function handleConfirmDelete(){
        try {
            const response = await api.delete(`/produto/${id}`);
            modalClose();
            navigation.navigate('Produtos');
            
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <Container>
            <Title>Atenção</Title>
            <SubTitle>Confirmar a exclusão do produto?</SubTitle>
            <ButtonArea>
                <Comfirm onPress={handleConfirmDelete}><Label>Comfirmar</Label></Comfirm>
                <Cancel onPress={modalClose}><Label>Cancelar</Label></Cancel>
            </ButtonArea>
        </Container>
    );
}