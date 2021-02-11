const OptionMenu = () => {
    return (
        <div>
            <div><input type="radio" name="radio" value="cbox1" /> Control de Iluminación </div>
            <div><input type="radio" name="radio" value="cbox2" /> Audio Multizonas (ej. Sala, Comedor, Balcón)</div>
            <div><input type="radio" name="radio" value="cbox3" /> Audio en habitaciones y control de TV</div>
            <div><input type="radio" name="radio" value="cbox4" /> Sala Multimedia o Cine en casa</div>
            <div><input type="radio" name="radio" value="cbox5" /> Sistema WiFi y Redes</div>
            <div><input type="radio" name="radio" value="cbox6" /> Cortinas Automatizadas</div>
            <div><input type="radio" name="radio" value="cbox7" /> Cámaras de seguridad</div>
            <div><input type="radio" name="radio" value="cbox8" /> Alarma</div>
            <div><input type="radio" name="radio" value="cbox9" /> Servicio de diseño y preinstalación domótica</div>
        </div>
    );
}

export default OptionMenu;
