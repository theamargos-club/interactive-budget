import React from 'react';

const ImageCustom = ({ title, id, json }) => {

    const buildImages = () => {
        return json.map(item => {
            return (<div div style={{ margin: "1%", width: "33%" }}>
                <div><img src={item.imgSrc} /></div>
                <div><input type="radio" name="radio" onClick={item.onClick} /> {item.title}  </div>
            </div >)
        })
    }

    return (
        <div>
            <label>{id + ' - ' + title}</label>
            <div style={{ display: "flex" }}>
                {buildImages()}
            </div>
        </div>
    );
}

export default ImageCustom;
