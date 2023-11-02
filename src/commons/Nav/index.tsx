import styles from './style.module.scss';

import React, { FunctionComponent } from 'react';
interface ItemsNav {
    url:string;
    name:string;
  }
const index: FunctionComponent<{item: ItemsNav }> =({item})=>{
    const {url, name} = item;
    return (
        <>
            <li >{name}</li>
        </>
    )
}
export default index;
