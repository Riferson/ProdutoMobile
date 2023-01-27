import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Modal } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import { Footer } from "../../components/Footer";
import { ModalContent } from "../../components/ModalContent";
import { ProductsDTO } from "../../dtos/ProductsDTO";
import noImage from '../../images/no-image.png';
import  api  from "../../services/api";

import {Container,Title,Content,ProductInfo,ImageProduct,ProductValue,ProductDescription,ButtonContent,Edit,Remove,Label, DescriptionArea,ModalArea} from './styles';

export function DescriptionProduct(){


    const [modalVisible, setModalVisible] = useState(false);
    const [product,setProduct] = useState<ProductsDTO>();
    const navigation = useNavigation();
    const route = useRoute();

    function handleModalOpen(){
        setModalVisible(true);
    }

    function handleModalClose(){
        setModalVisible(false);
    }

    function handleEditar(){
        navigation.navigate('Cadastrar',{paramKey:product.idProduto})
    }

    useEffect(()=>{
        async function fetchProduto(){
            try {

                const response = await api.get(`/produto/${route.params?.paramKey}`);
                setProduct(response.data);
                console.log(product)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProduto();
        
    },[]);



   

    return(
        <Container>
            <Title>{product?.nome}</Title>
            <Content>
                <ProductInfo>
                    <ImageProduct source={noImage}/>
                    <ProductValue>Valor:R${product?.preco}</ProductValue>
                </ProductInfo>
                <DescriptionArea>
                    <ProductDescription>{product?.descricao}</ProductDescription>
                </DescriptionArea>
            </Content>
            <ButtonContent>
                <Edit onPress={handleEditar}><Label>Editar</Label></Edit>
                <Remove onPress={handleModalOpen}><Label>Remover</Label></Remove>
            </ButtonContent>
            <Footer/>
            <ModalArea>
                <Modal visible={modalVisible}  transparent={true}>
                    <ModalContent modalClose={handleModalClose} id={product?.idProduto}/>
                </Modal>
            </ModalArea>
        </Container>
    );
}