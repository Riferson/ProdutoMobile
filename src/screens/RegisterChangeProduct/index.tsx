import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback,Keyboard, Platform, Alert } from "react-native";
import uuid from 'react-native-uuid';
import { ProductsDTO } from "../../dtos/ProductsDTO";
import api  from "../../services/api";
import {launchCamera, launchImageLibrary } from 'react-native-image-picker';


import {Container,Title,ProductForm,ProductInput,Label,SaveProduct,LabelButton,UpImage} from './styles';
import { ImageLibraryOptions, ImagePickerResponse } from "react-native-image-picker/lib/typescript/types";

export function RegisterChangeProduct({route}){
    const [name,SetName] = useState();
    const [valor,SetValor] = useState();
    const [description,SetDescription] = useState();
    const [image,SetImage] = useState();
    const navigation = useNavigation<any>();
    const [product,setProduct] = useState<ProductsDTO>();
    const [isloading,setIsLoading] = useState(false);
    const [photo, setPhoto] = React.useState(null);
    const data={
        descricao: description,
        idProduto: uuid.v4(),
        imagem:'string',
        nome: name,
        preco:Number(valor),
    }

    async function handleSaveProduct(){
        if(!name && !valor && !description &&!image){
            alert("Todos os campos são Obrigatoeios!");
            return;
        }
        if(Number.isNaN(data.preco) || data.preco <0){
            alert("Digite apenas numeros positivos!");
            return;
        }
        try {
            console.log(route);
            if(route.params != undefined){
                console.log('entrou no put');
                data.idProduto = route.params.paramKey;
                const response = await api.put(`/produto/${data.idProduto}`, data);
            }else{

                await api.post('/produto/',data);
            }
            console.log('post');
    
          } catch (error) {
            console.log(error);
          }
          navigation.navigate('Produtos');
          
    }

    useEffect(()=>{
        if(!(!route)){
            async function fetchProduto(){
                try {
                    const response = await api.get(`/produto/${route.params.paramKey}`);
                    setProduct(response.data);
                    console.log(product);
                    SetName(product?.nome);
                    SetValor(String(product?.preco));
                    SetDescription(product?.descricao);
                    SetImage(product?.imagem);
                    setIsLoading(true);
                } catch (error) {
                    console.log(error)
                }
            }
            fetchProduto();
        }
    },[isloading]);



    const [file, setFile] = useState();


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Title>Cadastro / Alteração</Title>
                <ProductForm>
                    <Label>Produto</Label>
                    <ProductInput value={name} onChangeText={SetName}/>
                    <Label>Valor(R$)</Label>
                    <ProductInput value={valor} onChangeText={SetValor}/>
                    <Label>Descrição</Label>
                    <ProductInput value={description} onChangeText={SetDescription} />
                    <UpImage title="Chose Photo" onPress={ async () => {
                            const result = await launchImageLibrary({
                             mediaType: 'photo',
                             includeBase64: false,
                             maxHeight: 200,
                             maxWidth: 200,
                             
                            } );

                       }
                        }><Label>Selecionar Imagem</Label></UpImage>
                </ProductForm>
                <SaveProduct onPress={handleSaveProduct}><LabelButton>Salvar</LabelButton></SaveProduct>
            </Container>
        </TouchableWithoutFeedback>
    );
}