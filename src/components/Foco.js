import React, { useState } from 'react'
import {Image, View, Button} from 'react-native';

const Foco = () => {

  const [estatus, setEstatus] = useState(require('../../img/focoOff.png'));

  return (
    <View>

       <Image source= {estatus} style={{ width: 200, height: 200}}></Image>
        
       <Button title="Apagar" color="gray" onPress={ ()=>setEstatus(require('../../img/focoOff.png'))}></Button>
       <Button title="Amarillo" color="orange" onPress={ ()=>setEstatus(require('../../img/focoOn.png'))}></Button>
       <Button title="Rojo" color="red" onPress={ ()=>setEstatus(require('../../img/focoRojo.png'))}></Button>
       <Button title="Azul" color="blue" onPress={ ()=>setEstatus(require('../../img/focoAzul.png'))}></Button>
       <Button title="Verde" color="green" onPress={ ()=>setEstatus(require('../../img/focoVerde.png'))}></Button>

    </View>
  )
}

export default Foco