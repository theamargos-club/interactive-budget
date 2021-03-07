import React from 'react';

const InputCustom = ({ item, fnEvent, jsonImg, type, checkBoxImg }) => {

  const typeInput = () => {
    return (<div>
      <label>{`${item.id} - ${item.title}`}</label>
      <input
        type="text"
        className="form-control"
        placeholder={`Ingrese ${item.title}`}
        name={item.id} id={item.id}
        onChange={fnEvent}
      />
    </div>)
  }

  const typeImg = () => {
    return <div>
      {item && <label>{`${item.id} - ${item.title}`}</label>}
      {jsonImg.map(img => {
        return (
          <div key={img.id} className="img">
            <div>
              <img alt="CustomImage" src={img.imgSrc} className="img-width" />
            </div>
            { checkBoxImg && <div>
              <input type="radio" id={img.id} name="radio" onClick={e => fnEvent(e)} />
              {img.title}
            </div>}
          </div >)
      })}
    </div>
  }

  return (
    <div>
      {type === "input" ? typeInput() : typeImg()}
    </div>
  );
}

export default InputCustom;
