import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import {GoogleMap, MarkerClusterer, Marker,InfoWindow} from '@react-google-maps/api';

//MAP COMPONENT STYLE
const containerStyle = {
  width: '100%',
  height: 'calc(100vh - 60px)',
};
// MARKER COMPONENT STYLE
const options = {
  imagePath:
    'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};

//USER LOCATION
const onLoad = (info) => {
};

//display the pinned up location on map with the address provided in the job description
const Map = ({alljobs, setAlljobs}) => {
  const [selectedMarker, setSelectedMarker] = useState([]);
  const [state1, setState1] = useState([]);

  //USER LOCATION
  const [center, setCenter] = useState({
    lat: 45.508888,
    lng: -73.561668,
  });

  useEffect(()=>{
    fetch (`/api/jobs`)
      .then(res=> res.json())
      .then(data=> {
        if(data.status === 400 || data.status === 500){
          throw new Error(data.message);
      }   
      else{
        setState1(data.data); 
      }  })
  }, [])
  
  return (
    <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          clickableIcons={true}
        >
          <MarkerClusterer options={options}>
            {(clusterer) =>
            
              state1.map((location, index) => {
                return(
                <div key={index}>
                  <Marker 
                    key={index}
                    position={location.geometry}
                    clusterer={clusterer}
                    onClick={() => {
                      setAlljobs([location])
                      setSelectedMarker({ location, index });
                    }}
                  >
                    {selectedMarker.index === index && (
                      <InfoWindow position={location} onLoad={onLoad}>
                        <StyledBox>
                          <h3><span>Name</span>: {location.companyName}</h3>
                          <h3><span>Address</span>: {location.address}</h3>
                          <h3><span>Email</span>: <a href="">{location.email}</a></h3>
                          <h3><span>Contact No.</span>: <a href={`tel:${location.number}`}>{location.number}</a></h3>
                        </StyledBox>
                      </InfoWindow>
                    )}
                   </Marker> 
                </div>
                )
                })
            }
          </MarkerClusterer>
          <></>
        </GoogleMap>
    </>
  );
};

export default Map;

const StyledBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height:120px;
width:320px;
padding: 8px;
text-align:justify;
background-color: white;
border: 2px solid #480987;
font-size:15px;

  span{
      text-decoration:underline;
  }
`;