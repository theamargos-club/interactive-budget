import './index.scss';

import React from 'react';

const InputCustom = ({ item, fnEvent, jsonImg, type, checkBoxImg }) => {

  const typeInput = () => {
    return (<div className={item.id !== 1 && "input-css"}>
      <label>{`${item.id} - ${item.title}`}</label>
      <input
        type="text"
        className="form-control bg-input"
        placeholder={`Ingrese ${item.title}`}
        name={item.id} id={item.id}
        onChange={fnEvent}
      />
    </div>)
  }

  const typeImg = () => {
    return <div className="img-content">
      {item && <div><label>{`${item.id} - ${item.title}`}</label></div>}
      {jsonImg.map(img => {
        return (
          <div key={img.id} className="img">
            <div>
              <img alt="CustomImage" src={img.imgSrc} className="img-width" />
            </div>
            { checkBoxImg && <div>
              <input className="margin-rb" type="radio" id={img.id} name="radio" onClick={e => fnEvent(e)} />
              {img.title}
            </div>}
          </div >)
      })}
    </div>
  }

  return (
    <div>
      {type === "input" ? typeInput(): typeImg()}
    </div>
  );
}

export default InputCustom;
