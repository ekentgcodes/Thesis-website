import React, { useState } from 'react';



export const Upload = () => {


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
       
    }
    const saveFile = () => {
      let formData = new formData()
   
      let axiosConfig = {
        headers: {
          'Content-Type': 'multpart/form-data'
        }

      }
      console.log(formData)
    }

    return (
        <>
        <div className="skill-container">
          <div className="skill-drop-container" 
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={fileDrop}
          >
          

            <div className="skill-drop-message">
              <div className="skill-upload-icon"></div>
              Drag & Drop files here or click to upload
            </div>
          </div>
        </div>
        </>
    )
};
