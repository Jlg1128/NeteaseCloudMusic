import React from 'react';
import styles from '../pages/index.less';

export default class Counter extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
      <h1 className={styles.title}>Counter</h1>

    </div>
    )
  }

}
