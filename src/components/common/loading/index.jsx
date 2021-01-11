import React from 'react';
import ReactLoading from 'react-loading';
import cssobj from './style.less';

const Loading = () => (
  <div className={cssobj.loading_container}>
    <main>
      <div className={cssobj.loading_box}>
        <ReactLoading type="balls" color="skyblue" height="50px" width="50px" />
      </div>
    </main>
  </div>
);

export default Loading;
