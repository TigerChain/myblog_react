import React from 'react' ;
import ReactDOM from 'react-dom' ;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// import Main from './component/Main';

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';

import styles from './css/main.css' ;
import MainHeadView from './component/MainHeadView';
import MainCardView from './component/MainCardView' ;

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router';

import PostList from './component/PostList' ;

import Home from './component/Home' ;

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
      <MuiThemeProvider >
      <div>
      <div className={styles.floatView}>


        <AppBar
          title="JunJun's blog"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
        />
      </div>

        {this.props.children}

        

        <Drawer width={200} open={this.state.open} >
          <IndexLink to="/" className={styles.linkStyle}>
          <div
            className={styles.leftDrawTopViewStyle}
            onTouchTap={this.handleToggle.bind(this)}
            >
            <span className={styles.leftDrawTopViewTopTextStyle}>分类</span>
            </div>
          </IndexLink>
            <Link to="/home" className={styles.linkStyle}><MenuItem onTouchTap={this.handleToggle.bind(this)}>首页</MenuItem></Link>
            <Link to="/postlist" className={styles.linkStyle}><MenuItem>文章列表</MenuItem></Link>
        </Drawer>
      </div>
      </MuiThemeProvider>
    ) ;
  }

}

// const App = () => (
//   <MuiThemeProvider >
//     <Main />
//   </MuiThemeProvider>
// );


ReactDOM.render(
  <div>
  <Router history={hashHistory} >
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="postlist" component={PostList} />
    </Route>
  </Router>
</div>
,document.getElementById('container'));
