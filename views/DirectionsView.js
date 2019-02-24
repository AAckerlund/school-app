import React, {Component} from 'react';
import {Components} from 'exponent';
import {MapView,
		satellite,
		hybrid} from 'react-native';

export default class DirectionsView extends Component {
	
	constructor(props){
		super(props);
		this.props = {
			lat: lat,
			lon: lon
		}
	}
	
  render(){
    return(
     <Components.MapView
        style={{flex: 1}}
		mapType="hybrid"
        region={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0021,
        }}
      />
    );
  }
}                           