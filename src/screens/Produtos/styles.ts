import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    height: ${RFPercentage(100)};
    padding-top: ${RFPercentage(10)};
`;
export const Title = styled.Text`
    text-align: center;
    font-size: ${RFValue(32)}px;
`;
export const Search = styled.TextInput`
    border: 1px solid grey;
    width: ${RFValue(300)}px;
    margin: 30px auto;
    background-color: lightgray;
    border-radius: 5px;
    padding: 10px;
    font-size: ${RFValue(24)}px;
`;

export const ProductList = styled.FlatList`

`

export const ButtonArea = styled.TouchableOpacity``;