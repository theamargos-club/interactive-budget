import React from 'react';

const ImageCustom = ({ title, id, json, onClick }) => {

  const buildImages = () => {
    return json.map(item => {
      return (
        <div key={item.id} style={{ margin: "1%", width: "33%" }}>
          <div>
            <img alt="CustomImage" src={item.imgSrc} style={{ width: "100%" }}/>
          </div>
          <div>
            <input type="radio" id={item.id} name="radio" onClick={e => onClick(e)} /> 
            {item.title}  
          </div>
        </div >)
    })
  }

  return (
    <div>
      <label>{`${id} - ${title}`}</label>
      <div style={{ display: "flex" }}>
        {buildImages()}
      </div>
    </div>
  )
}

export default ImageCustom;
