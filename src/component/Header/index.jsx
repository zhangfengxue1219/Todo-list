import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
    //按下键盘事件
    handleKeyUp = (event) => {
        const {keyCode,target} = event
       // console.log(event.target)
        if(keyCode !== 13) return
        //获取输入用户的信息
        const {value:name} = target 
       // console.log(target)
       //构建一个todoObj
       const todoObj = {id:nanoid(),name,done:false}
       //调用父组件传过来的addTodo
       this.props.addTodo(todoObj)
       //清空用户输入数据
       target.value = ''
    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp = {this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
