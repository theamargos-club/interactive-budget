const OptionMenu = ({check}) => {


    return (
        <div>
            <div><input type="radio" name="radio" value="1" onClick={() => {check(1)}}/> Control de Iluminación </div>
            <div><input type="radio" name="radio" value="2" onClick={() => {check(2)}}/> Audio Multizonas (ej. Sala, Comedor, Balcón)</div>
            <div><input type="radio" name="radio" value="3" onClick={() => {check(3)}}/> Audio en habitaciones y control de TV</div>
            <div><input type="radio" name="radio" value="4" onClick={() => {check(4)}}/> Sala Multimedia o Cine en casa</div>
            <div><input type="radio" name="radio" value="5" onClick={() => {check(5)}}/> Sistema WiFi y Redes</div>
            <div><input type="radio" name="radio" value="6" onClick={() => {check(6)}}/> Cortinas Automatizadas</div>
            <div><input type="radio" name="radio" value="7" onClick={() => {check(7)}}/> Cámaras de seguridad</div>
            <div><input type="radio" name="radio" value="8" onClick={() => {check(8)}}/> Alarma</div>
            <div><input type="radio" name="radio" value="9" onClick={() => {check(9)}}/> Servicio de diseño y preinstalación domótica</div>
        </div>
    );
}

export default OptionMenu;

