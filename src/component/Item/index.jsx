import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {
    state = {
        mouseIn : false
    }
    handleCheck = (id) =>{
        return ({target}) =>{
            //调用App传递过来的CheckTodo
            this.props.checkTodo(id,target.checked)
        }
    }
    handleMouse = (mouseIn) => {
        return () => {
            this.setState({mouseIn})
        }
    }
    //删除按钮的回调
    handleDelete = (id) => {
        /* eslint-disable */
        if(confirm('确认删除吗?')){
            this.props.deleteTodo(id);
        }
    }
    render() {
       const {id,name,done} = this.props
       const {mouseIn} = this.state
      // console.log(name,done)
        return (
            <li onMouseEnter = {this.handleMouse(true)} onMouseLeave = {this.handleMouse(false)} style = {{backgroundColor:mouseIn ? '#ddd' : 'white'}}>
                <label>
                    <input type="checkbox" checked = {done} onChange = {this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick = {()=>this.handleDelete(id)} style={{display : mouseIn ? 'block' : 'none'}}>删除</button>
            </li>

        )
    }
}
