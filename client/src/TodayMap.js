import styled from 'styled-components';
import { useEffect } from 'react';
import { useState } from 'react';
import {GoogleMap,MarkerClusterer,Marker,InfoWindow} from '@react-google-maps/api';

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

const TodayMap = ({today, setToday}) => {
  const [show, setShow] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState('');
  const [state1, setState1] = useState([]);
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
  const currentdate = [year,month,day].join('-'); //current day date in the format of yyyy-mm-dd

  //fetch all jobs
    useEffect(()=>{
        fetch (`/api/jobs`)
          .then(res=> res.json())
          .then(data=> {
            if(data.status === 400 || data.status === 500){
              throw new Error(data.message);
          }   
          else{
            todaydata= data.data;
            todaydata.map((item) => {
                if(item.date === currentdate){
                    myArray.push(item);    
                }
            })
            setState1(myArray);
            setToday(myArray);      
          }})
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
                    position={location.geometry} //set the position on the map based on the geometry available from db
                    clusterer={clusterer}
                    onClick={() => {
                      setToday([location])
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
        </GoogleMap>      
    </>
  );
};

export default TodayMap;

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
