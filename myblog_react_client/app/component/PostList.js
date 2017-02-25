import React, {PropTypes} from 'react';
import styles from '../css/postlist.css' ;

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Colors from 'material-ui/styles/colors';
import PostListItemCard from './PostListItemCard' ;

import data from '../data/postlist.json' ;


/**
 * 文章列表
 */
class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //列表数据
      data:[]
    }
  }

  //这里模拟请求数据，有服务器了一换即可
  componentDidMount() {
    this.setState({
      data:data.datas,
    });
  }

  render() {

    let that = this;
    // let datas = data.datas;
    let Card = this.state.data.map(function(postItemData,index) {
      return(
         <PostListItemCard
           key={index}
          title={postItemData.title}
          id={postItemData.id}
          subTitle={postItemData.subTitle}
          content={postItemData.content}
          onItemClick={that.onClick}/>
      )
    });
    return (

      <div className={styles.rootView}>
        {Card}
    </div>
  );
  }
  onClick(id){
    alert(id) ;
  }


}

export default PostList
