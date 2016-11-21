import React from 'react' ;

import RaisedButton from 'material-ui/RaisedButton';

import styles from '../css/postlistitem.css' ;

/**
 * 文章列表条目卡片布局
 */
class PostListItemCard extends React.Component{

  /**
   * 默认值
   * @type {Object}
   */
  static defaultProps = {
    //标题
    title:'',
    // 副标题
    subTitle:'',
    // 内容
    content:'',
    // 发送时间
    sendTile:''
  }
  /**
   * 规定属性的类型
   * @type {Object}
   */
  static propTypes = {
    title: React.PropTypes.string,
    subTitle:React.PropTypes.string,
    content:React.PropTypes.string,
    sendTile:React.PropTypes.string,
    onItemClick: React.PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      id:"0",
    }
  }
  render(){
    return(
      <div className={styles.cardViewStyle}>
        <div className={styles.cardTitleViewStyle}>
          <span>{this.props.title}</span>
          <span>{this.props.subTitle}</span>
          <p>{this.props.content}</p>
        </div>

        <div className={styles.cardBottomViewStyle}>
            <span>发表时间:</span>
           <RaisedButton label="查看更多" secondary={true}  onTouchTap={this.onClick.bind(this)}/>
        </div>

      </div>
    ) ;
  }
  /**
   * 点击事件暴漏给外面调用
   */
  onClick(){
    if(this.props.onItemClick){
      this.props.onItemClick(this.props.id);
    }
  }
}

export default PostListItemCard
