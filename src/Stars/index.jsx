import React from 'react';
import {Star} from "./Star";

export const Stars = (props) => {

    const arrStar = [];
    for (let i=1; i <= props.count; i++) {
        arrStar.push(i)
    }

    return (
        <>
            {props.count >= 1 && props.count <= 5 && typeof (props.count) === "number"?
                    <ul className="card-body-stars u-clearfix">
                        <li>
                            {arrStar.map((el, index) => <Star key={index}/>)}
                        </li>
                    </ul>
                : null}
        </>

    );
}

