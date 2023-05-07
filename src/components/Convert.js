import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import {MdCloudUpload, MdDelete, MdUploadFile} from 'react-icons/md';
import { AiFillFileImage} from 'react-icons/ai'; 
import { render } from "@testing-library/react";
import axios, { formToJSON } from 'axios'


export const Convert = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: { 
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
  };
  const dragOver = (e) => {
    e.preventDefault();
}

const dragEnter = (e) => {
    e.preventDefault();
}

const dragLeave = (e) => {
    e.preventDefault();
}

const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
}


const [file, setFile] = useState(null);
const [Status, setStatus] = useState('');
const [status, setstatus] = useState(null);
const [refId, setRefId] = useState(null);

const fileInputRef = useRef(null);

  const handleFileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    setFile(files[0]);

    if (file) {
      let formData = new FormData();
      formData.append('filename', file);
      
      let axiosConfig = {
       'Content-Type': 'multpart/form-data',
        method: 'POST',
        body: formData
        
    }
    console.log(formData)
    axios.post(api + '/file/', formData).then(
        response =>{
            console.log(response, document.getElementById('file-upload'))
            document.getElementById('file-upload').value = null;
            response.json().then((data) => {
              setRefId(data.ref_id);
            });
            setStatus('File Uploaded Successfully')
        }
    ).catch(error =>{
        console.log(error)
    })
   
    }
  };

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const resetFileInput = () => {
    fileInputRef.current.value = null;
  }



  let api = 'http://127.0.0.1:8000/api'


   const handleFileUpload = (e) => {
    e.preventDefault();
    
    
    if (file) {
      let formData = new FormData();
 
      formData.append('filename', file);
     
      let axiosConfig = {
        method: 'POST',
        body: formData
    }

    console.log(formData)
    axios.post(api + '/file/', formData).then(
        response =>{
            console.log(response, e)
            e.target.value = null;
            setStatus('File Uploaded Successfully')
        }
    ).catch(error =>{
        console.log(error)
    })
   
    }
  };

  
  
  

  
  return (
    <section className="convert" id="convert">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Convert video to 3D Animation</h2>
                        <p>Animate 3D lets you create animations from video clips in minutes, drastically reducing development time and costs.
                          <br></br>No special hardware, cameras, or suits needed. Animate 3D lets you create full-body animations from video with just an internet connection and a web browser.</p>
                        <br></br>
                        
          <div className="skill-drop-container" 
            //onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            //onDrop={fileDrop} 
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
          

            <div className="skill-drop-message">
            <MdCloudUpload color='#1475cf' size={80}/>
            {file ? (
          <div className="upload-file">
            {file.name}
           
          </div>
        ) : (
          <div className="upload-message">
            <p>Drag and drop a file here, or</p>
            <label htmlFor="file-upload" className="upload-button">
              Click to select file 
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileSelect}
              accept=""
              ref={fileInputRef}
            />
          </div>
        )}
              <div className="skill-upload-icon"></div>
              
            </div>
           
          </div>
          <br></br>
          <div style={{ display: "flex", justifyContent: "center", paddingRight: "10px" }}>
            
            <Button style={{ margin: "0 50px 0 0" }} onClick={handleFileUpload}>Upload</Button>
       
            <Button style={{ backgroundColor: "red" }} onClick={() => setFile(null)}>Remove</Button>
    </div>
         
         
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />

      
        
    </section>

    
  )
};






