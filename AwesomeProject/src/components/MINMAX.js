import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => { 
    console.warn(props);
    return(
            <Text style={estilo.fonteG}> 
                {props.max } é maior q {param.min}!
            </Text>)}