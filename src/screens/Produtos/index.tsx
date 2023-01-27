import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import {Container,Title,Search,ProductList,ButtonArea} from './styles';
import noImage from '../../images/no-image.png';
import { ProductsDTO } from "../../dtos/ProductsDTO";
import  api from "../../services/api";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Footer } from "../../components/Footer";
import { launchImageLibrary } from "react-native-image-picker";

export function Produtos(){

    const [listProducts,setListProducts] = useState<ProductsDTO[]>([]);
    const [listagem,setListagem] = useState<ProductsDTO[]>([]);
    const [product,setProduct] = useState<ProductsDTO[]>([]);

    const [search, setSearch] = useState(''); 
    const navigation = useNavigation<any>();
    
    async function fetchProducts(){

        try {
            console.log("api",api);
            const response = await api.get('/produto');
            setListagem(response.data);
            setListProducts(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(search === ''){
            setListagem(listProducts);
        }else{
            setListagem(
                listProducts.filter((item)=>{
                    if(item.nome.indexOf(search)>-1){
                        return true;
                    }else{
                        return false;
                    }
                })
            );
        }
    },[search])

    useFocusEffect(
        React.useCallback(() => {
            fetchProducts()
        }, [])
      );

     
    
    return(
        <Container>
            <Title>Produtos</Title>
            <Search placeholder="Pesquise Aqui" value={search} onChangeText={setSearch}></Search>

            <ProductList data={listagem}
                renderItem={({item})=><ProductCard data={item} />} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:16}}
            />
            <Footer/>
        </Container>
    );
}