import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import {Container,Title,Search,ProductList,ButtonArea} from './styles';
import noImage from '../../images/no-image.png';
import { ProductsDTO } from "../../dtos/ProductsDTO";
import { api } from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { Footer } from "../../components/Footer";

export function Produtos(){

    const [listProducts,setListProducts] = useState<ProductsDTO[]>([]);
    const [loading,setLoading] = useState<Boolean>(true);
    const navigation = useNavigation<any>();

    function handleDescriptionProduct(){
        console.log('teste');
        navigation.navigate('Descricao');
    }
    
    useEffect(()=>{
        async function fetchProducts(){
            try {
                const response = await api.get('/Produto');
                setListProducts(response.data);
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);
    
    return(
        <Container>
            <Title>Produtos</Title>
            <Search></Search>
            <ProductList data={listProducts}
                renderItem={({item})=><ProductCard data={item} onPress={handleDescriptionProduct}/>} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:16}}
            />
            <Footer/>
        </Container>
    );
}