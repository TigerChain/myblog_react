import React, {PropTypes} from 'react';
import styles from '../css/postlist.css' ;

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


import PostListItemCard from './PostListItemCard' ;

import data from '../data/postlist.json' ;

class PostList extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let that = this;
    let datas = data.datas;

    let Card = datas.map(function(postItemData,index) {
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

      {/* <PostListItemCard
        title="主标题"
        subTitle="副标题"
        content="内容"
        onItemClick={this.onClick}/> */}

    </div>
  );
  }
  onClick(id){
    alert(id) ;
  }
}

export default PostList
