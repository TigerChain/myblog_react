import React from 'react' ;
import styles from '../css/main.css' ;

/**
 * 把card封装成一个组件包括title和点击事件
 */
class CardView extends React.Component{

  /**
   * 默认的props
   * @type {Object}
   */
  static defaultProps = {
    index:0,
    title:''
  }
  /**
   * 规定属性的格式
   * @type {Object}
   */
  static propTypes = {
    onCardClick: React.PropTypes.func
  }

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this) ;
  }
  /**
   * 相当于把方法暴漏出去让别的组件调用
   */
  onClick() {
     if (this.props.onCardClick) { //如果设置了点击事件,则调用
         this.props.onCardClick(this.props.index)
     }
  }
  render(){
    return(
      <div className={styles.preCardViewStyle} onTouchTap={this.onClick}>
        <h3 className={styles.cardViewTextStyle}>{this.props.title}</h3>
          <div className={styles.preCardViewImgStyle}/>
      </div>
    ) ;
  }
}

export default CardView
