import React from 'react' ;

import styles from '../css/main.css' ;

/**
 * 包含头像的View
 */
class MainHeadView extends React.Component{
  render(){
    return (
      <div
        className={styles.onderAppBarViewStyle}
        >
        <img className={styles.avatorStyle} src={require('../imgs/avatar.png')}/>
        <span className={styles.bolgTitleStyle}>JunJun's blog</span>
        <span className={styles.bolgSubTitleStyle}>This is My Blog I'm a Androider,I Love Technology,My motto is Never GiveUp</span>
      </div>
    ) ;
  }
}

export default MainHeadView
