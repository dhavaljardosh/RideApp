import React from "react";
import {View , Text} from "react-native";

import { Container } from "native-base";
import MapContainer from "./MapContainer";
export default class Home extends React.Component{
componentDidMount(){
  this.props.setName();
}

  render(){
    const region={
      latitude: 3.146642,
      longitude: 101.695845,
      longitudeDelta: 0.0922,
      latitudeDelta: 0.0421
    }
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <MapContainer region={region}/>
      </View>
    );
  }
}
