import React, { FC } from 'react';
import Lottie from 'lottie-react';
// import loadingAnim from './anim.json';
import loadingAnim from './hello.json';
// import loadingAnim from './loading-screen-loader-spinning-circle.json';
// import loadingAnim from './carousel-swipe-animation.json';

import Styles from './Loading.module.css';

export type LoadingProps = {};

const Loading: FC = () => (
  <div className={Styles['blui-ldr']}>
    <div className="w-64">
      <Lottie loop={true} autoplay={true} animationData={loadingAnim} />
    </div>
  </div>
);

export { Loading };
