import React from 'react';


const SingleInput = (props) => (         
        <input
        type={props.inputType}
        value={props.content}
        onChange={props.controlFunc}
        placeholder={props.placeholder} 
        className={props.className}
        id={props.id} required={props.required}  />
 
);


export default SingleInput;
