import React from 'react';

const ImageCustom = ({ title, id, json, onClick }) => {

  const buildImages = () => {
    return json.map(item => {
      return (
        <div key={item.id} className="img">
          <div>
            <img alt="CustomImage" src={item.imgSrc} className="img-width"/>
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
      <div className="content-img">
        {buildImages()}
      </div>
    </div>
  )
}

export default ImageCustom;
