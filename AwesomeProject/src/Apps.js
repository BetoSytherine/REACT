import React from 'react'
import { SafeAreaView } from 'react-native'
import {View, Text, StyleSheet} from 'react-native'
import {Componente, Componente2} from './components/componentes'
import A from './components/Primeiro'
import  Estilo from './components/estilo'
import MINMAX from './components/MINMAX'
import contador from './components/contador'                            
import Contador from './components/contador'





 const App =()=> (
    
    <Contador inicial={100} />
    
 );
                    
           
 
 
export default App



 //função anonimo ou function expression, associa a função em ha umam variavel dava pra colocar o export default direto na function, ou pode tirar o nome function e utilizar uma arefunction " =>"
 //const jsx= <Text>Ola Mundo!!</Text>;
 //return jsx

 // outra maneira de fazer :
// export default () => <Text>Ola</Text> jogando direto em uma unica linha



 
