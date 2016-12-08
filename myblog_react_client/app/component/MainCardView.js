
import React from 'react' ;

import styles from '../css/main.css' ;

import CardView from './CardView' ;

//导入card的json数据
import datas from '../data/mainCardData.json';

import { Router, Route, Link, Redirect, IndexLink,History,browserHistory} from 'react-router';


// var history = createHashHistory();

/**
 * 主页中三个卡片布局
 */
class MainCardView extends React.Component{

  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
  }
  render(){
    //取的json数组
    let cardDatas = datas.data ;
    let that = this;
    //遍历数据生成View
    let Item = cardDatas.map(function(item,index) {
      return <CardView
              key={index}
              index={index}
              onCardClick={that.onClick.bind(that)}
              title={item.title}
            />
    })

    return(
      <div className={styles.cardViewStyle}>
       {Item}
      </div>
    ) ;
  }

  onClick(index){
    switch(index){
      //关于我们
      case 0:
        this.context.router.push('/about');
        break ;
      case 1:
        
        break ;
      case 2:
        break ;
    }
    alert("跳转到"+index+"页")
  }
}



export default MainCardView
