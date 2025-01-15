import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

const BackendConnection = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
      axios.get('http://localhost:8000/api/connection')
        .then(response => {
          setData(response.data.message); 
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);
  
    return (
      <div style={{justifyItems:'right'}}>
        {data ? <div className='online'/> : <div className='offline'/>}
      </div>
    );
}

export default BackendConnection;
