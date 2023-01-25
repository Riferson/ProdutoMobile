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
export const Search = styled.View``;

export const ProductList = styled.FlatList`

`

export const ButtonArea = styled.TouchableOpacity``;