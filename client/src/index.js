import React from 'react';
import _ from 'lodash';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { render } from 'react-dom';

const location = {
    lat: -34.397, lng: 150.644
};

const lodashTest = () => {
    if (_.isEmpty(' ')) {
        console.log('not empty');
    } else {
        console.log('empty');
    }
};

lodashTest();

const Map = withGoogleMap((props) => (
    <GoogleMap
        defaultZoom={14}
        defaultCenter={props.location}
        defaultOptions={{ disableDefaultUI: false }}
    >
        <Marker position={props.location} />
    </GoogleMap>
));

render(
    <Map
        containerElement={<div style={{ height: '100%', width: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        location={location}
    />,
    document.getElementById('main')
);
