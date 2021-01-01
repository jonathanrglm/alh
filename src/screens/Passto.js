import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Passto = () => {
    const history = useHistory();
    useEffect(()=>{
        history.replace('/alh')
    },[])
    return(
        <div/>
    )
}

export default Passto;