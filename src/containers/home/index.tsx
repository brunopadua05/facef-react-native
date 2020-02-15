import React, { Component } from 'react';
import { Text, 
    View, 
    Button,
    ActivityIndicator, 
    StyleSheet,
    Alert 
} from 'react-native';
import { inject, observer } from 'mobx-react';

import HomeStore from '../../stores/home.store';

interface Props {
    homeStore: HomeStore
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {

    render() {

        const { numbers, increment, reset, decrement } = this.props.homeStore;

        return (<>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#1E90FF' }}>
                <Text style={stylesCSS.Texto}>BRUNO PÁDUA</Text>
                {/* <Text style={{color: '#FFFAFA', fontSize: 25}}>BRUNO PÁDUA</Text>                 */}
                <Text style={stylesCSS.Texto}>{numbers}</Text>             
                <Button onPress={() => increment()} title="Incrementar"></Button>
                <Button onPress={() => decrement()} title="Decrementar"></Button>
                <Button onPress={() => reset()} title="Limpar"></Button>
                
                {/* <Button 
                    title="Gravar"
                    onPress={() => Alert.alert('Botão pressionado')}
                    color= '#00FF00'/>
                    <ActivityIndicator size="large" color="#FFFAFA" /> */}
            </View>
        </>);
    }
}

const stylesCSS = StyleSheet.create({
    Texto: {
        color: '#FFFAFA',
        fontSize: 25
    },
    Button:{
        width: 5
    }
  })