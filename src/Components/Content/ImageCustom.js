import React from 'react';

const ImageCustom = ({ json, type, fnEvent }) => {

  const buildImages = () => {
    return json.map(item => {
      return (
        <div key={item.id} className="img">
          <div>
            <img alt="CustomImage" src={item.imgSrc} className="img-width" />
          </div>
          <div>
            <input type="radio" id={item.id} name="radio" onClick={e => fnEvent(e)} />
            {item.title}
          </div>
        </div >)
    })
  }

  const buildInput = () => {
    return json.map((item) => {
      return !item.isHidden && <div className="form-group">
        <label>{`${item.id} - ${item.title}`}</label>
        <input
          type="text"
          className="form-control"
          placeholder={`Ingrese ${item.title}`}
          name={item.id} id={item.id}
          onChange={fnEvent}
        />
      </div>
    })
  }

  return (
    <div>
      {type === "input" ? buildInput() : buildImages()}
    </div>
  )
}

export default ImageCustom;
