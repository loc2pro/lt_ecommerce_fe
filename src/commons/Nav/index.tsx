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
            <div >{name}</div>
        </>
    )
}
export default index;
