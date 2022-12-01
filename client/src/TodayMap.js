import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  MarkerClusterer,
  Marker,
  Circle,
  InfoWindow,
  Autocomplete,
} from '@react-google-maps/api';

//LIBRARIES
// const library = ['places'];
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
  console.log('onLoad infoBox: ', info);
};

const TodayMap = ({today, setToday}) => {
  const [show, setShow] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState('');
  const [state1, setState1] = useState([]);
  // console.log("st", state1)
  //USER LOCATION
  const [center, setCenter] = useState({
    lat: 45.508888,
    lng: -73.561668,
  });
  const myArray=[];
  let todaydata;
  const date = new Date();
  const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const currentdate = [year,month,day].join('-');

    useEffect(()=>{
        fetch (`/api/jobs`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || data.status === 500){
            //   navigate('/error');
              throw new Error(data.message);
          }   
          else{
            todaydata= data.data;
            todaydata.map((item) => {
                // console.log("item date", item.date)
                if(item.date === currentdate){
                    myArray.push(item);
                    
                }
            })
            setState1(myArray);
            setToday(myArray);
             
          }  
          }
          )
      
      }, [])
  //AUTOCOMPLETE COMPONENT
  const [search, setSearch] = useState('');
  const [array, setArray] = useState('');
  const onSBLoad = (ref) => {
    console.log('hello');
    setArray(ref);
    console.log(search);
  };
console.log("state", state)
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
                    {console.log("locationnnnnn",location.geometry)}
                  <Marker 
                    key={index}
                    position={location.geometry}
                    clusterer={clusterer}
                    onClick={() => {
                      setToday([location])
                      setSelectedMarker({ location, index });
                    }}
                  >
                    {selectedMarker.index === index && (
                      <InfoWindow position={location} onLoad={onLoad}>
                        <StyledBox>
                          <h3>{location.companyName}</h3>
                          <h3>{location.address}</h3>
                          <h3>{location.email}</h3>
                          <a href={`tel:${location.number}`}>{location.number}</a>
                          <button onClick={handleShow}>More Info</button>
                        </StyledBox>
                      </InfoWindow>
                    )}
                   </Marker> 
                </div>
                )
                })
            }
          </MarkerClusterer>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      
    </>
  );
};

export default TodayMap;

const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:300px;
  width:300px;
  padding: 8px;
  background-color: white;
  border: 2px solid black;
`;
