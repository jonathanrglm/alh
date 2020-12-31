import React from 'react';
import { useHistory } from "react-router-dom";

const Home = (props) => {
    let history = useHistory();

    const goTo = () => {
        props.onPress();
        history.push('/firstPart',{isContinue: true})
    }

    return (
        <div style={{marginTop: 20}}>
            <h2>Hola que tal ¿cómo estás? Espero que bien, el motivo de esta pequeña página es para contarte una breve historia acerca de una chica, pero no cualquier chica, sino de una chica muy especial para mí y que conozco por Gaby.</h2>
            <br />
            <br />
            <h3>¿Estás lista para la aventura?</h3>
            <div style={styles.divButtons}>
                <button className="button success" onClick={goTo}>Aceptar</button>
                {/* <button className="button error">Cancelar</button> */}
            </div>
        </div>
    )
}


const styles = {
    divButtons: {
        display: 'flex',
        justifyContent: 'center'
    }
}
export default Home;