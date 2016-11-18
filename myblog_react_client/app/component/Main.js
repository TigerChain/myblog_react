import React from 'react' ;
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import styles from '../css/main.css' ;
import MainHeadView from './MainHeadView';
import MainCardView from './MainCardView' ;

/**
 * 博客主页
 */
class Main extends React.Component {

  constructor(props){
    super(props) ;
    this.state = {
      //侧滑栏的默认状态
      open:false ,
    }
  }
  /**
   * 处理侧滑栏的方法
   */
  handleToggle(){
    this.setState({
      open:!this.state.open
    });
  }

  render(){
    return(
      <div>
      <div className={styles.floatView}>
        <AppBar
          title="JunJun's blog"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
      </div>
      {/* 包含头像的布局 */}
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
        <Drawer width={200} open={this.state.open} >
          <div
            className={styles.leftDrawTopViewStyle}
            onTouchTap={this.handleToggle.bind(this)}
            >
              <span className={styles.leftDrawTopViewTopTextStyle}>分类</span>
            </div>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    ) ;
  }
}

export default Main
