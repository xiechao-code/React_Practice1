import React,{Component} from 'react';


class CommentAdd extends Component{
  state = {
    username:'',
    content:''
  }

  handleSubmit = () => {
    //收集数据,并封装成comment对象
    const comment = this.state
    //更新状态
    this.props.addComment(comment)
    //清除输入数据
    this.setState({
      username:'',
      content:''
    })
  }
  handleNameChange = (event) => {
    const username = event.target.value
    this.setState({username})
  }
  handleContentChange = (event) => {
    const content = event.target.value
    this.setState({content})
  }

  render(){
    const {username,content} = this.state
    return(
      <div className="col-md-4">
      <div>
        <label htmlFor="name">用户名</label>
        <input type="text" className="form-control" id="name" placeholder="用户名" value={username} 
        onChange={this.handleNameChange}></input>
      </div>
      <div>
        <label htmlFor="content">评论内容</label>
        <textarea className="form-control" id="content" placeholder="评论内容" value={content} 
        onChange={this.handleContentChange}/>
      </div><br/> 
      <input className="btn btn-default pull-right" type="button" value="提交" 
      onClick={this.handleSubmit}/>
      </div>
    )
  }
}


export default CommentAdd;