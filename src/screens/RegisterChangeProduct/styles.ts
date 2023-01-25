import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../global/styles/theme";


export const Container = styled.View`
    height: ${RFPercentage(100)};
    padding-top: ${RFPercentage(10)};
    align-items: center;
`;
export const Title = styled.Text`
    text-align: center;

    font-size: ${RFValue(32)}px;
`;
export const ProductForm = styled.View`
    width:100% ;
    padding: ${RFValue(32)}px;
`

export const ProductInput = styled.TextInput`
    background-color: ${theme.colors.lightGrey};
    height: ${RFValue(32)}px;
    color: white;
    margin-bottom: ${RFValue(16)}px;
`;

export const Label = styled.Text`

`;

export const SaveProduct = styled.TouchableOpacity`
    background-color: ${theme.colors.gren};

    width: ${RFValue(160)}px;
    height: ${RFValue(50)}px;
    border-radius: 5px;
    align-items: center;
    margin-bottom: ${RFValue(167)}px;
`;

export const LabelButton = styled.Text`
    font-size: ${RFValue(32)}px;
    color: white;
`;