
import React from 'react' ;

import styles from '../css/main.css' ;
import MainHeadView from './MainHeadView';
import MainCardView from './MainCardView' ;

/**
 * 首页的子组件
 */
class Home extends React.Component{


  render(){
    return (
    <div>
      <MainHeadView />
      {/* 包含头像布局下面的布局，介绍布局 */}
      <div className={styles.belowAvatorViewStyle}>
        <span className={styles.belowAvatorViewTestStyle}>我是一个android开发者，但是我对技术比较感兴趣</span>
      </div>

      {/* 中间的三个卡片布局 */}
       <MainCardView />

      <div className={styles.belowCardViewStyle}>

      </div>

      <div className={styles.copyRightStyle}>
        <span className={styles.copyRightTextStyle}>copyRight:2016-2020 </span>
        <span className={styles.copyRightTextStyle}>Code Write By @JunJun using React.js & Material-UI.</span>
      </div>
    </div>
    );
  }
}

export default Home
