import React,{Component} from 'react';
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component{
static propTypes = {
  comment:PropTypes.object.isRequired,
  deleteComment:PropTypes.func.isRequired,
  index:PropTypes.number.isRequired
}

 handleClick = () =>{
   const {comment,deleteComment} = this.props
   //提示
   if(window.confirm(`确定删除${comment.username}的评论吗？`)){
    //确定后删除
    deleteComment(this.index)
   }
 }

  render(){
    const {comment} = this.props
    return(
      <li className="list-group-item">
        <div className="handle">
          {/* eslint-disable-next-line */}
          <a href="javascript:viod(0);" onClick={this.handleClick}>删除</a>
        </div>
        <p className="user"><span>{comment.username}</span><span>说：</span></p>
        <p className="centence">{comment.content}</p>
      </li>
    )
  }
}