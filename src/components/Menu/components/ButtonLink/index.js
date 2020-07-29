import React from 'react';
import './style.css';

function ButtonLink(props) {
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink;