import React from 'react'

export default props =>
    <>
        <div class="campo">
            <label for={props.for}>{props.label}</label>
            <input type={props.tipo} name={props.nome} id={props.identidade} data-js={props.dado}/>
        </div>
    </>