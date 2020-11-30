import React, { Component } from 'react'
import Header from './component/Header'
import List from './component/List'
import Footer from './component/Footer'
import './App.css'
export default class App extends Component {
  //初始化状态
	state = {
		todos:[
			{id:'001',name:"吃饭",done:false},
			{id:'002',name:"睡觉",done:true},
			{id:'003',name:"打程老师",done:true},
			{id:'004',name:"学习",done:true},
		]
  }
  //状态在那里,操作状态的方法就在哪里
  addTodo = (todoObj) => {
    //获取原来的todos
    const {todos} = this.state
    //更新状态
    this.setState({todos:[todoObj,...todos]})

  }
  //勾选或取消勾选的一个回调
  checkTodo = (id,done) => {
    const {todos} = this.state
    const newTodos = todos.map((t) => {
      if(t.id === id) return {...t,done}
      else return t
    })
    this.setState({todos:newTodos})
  }
  //删除一个todo的回调
  deleteTodo = (id) =>{
    //获取初始化状态
    const {todos} = this.state
    const newTodos = todos.filter((t) => {
      return t.id !== id
    })
    this.setState({todos:newTodos})
  }
  //全选or取消全选
  checkAll = (done) => {
    const {todos} = this.state
    const newTodos = todos.map((t)=>{
      return {...t,done}
    })
    this.setState({todos:newTodos})
  }
  clear = () =>{
    const {todos} = this.state
    const newTodos = todos.filter((t) =>{
      return !t.done
    })
    this.setState({todos:newTodos})
  }
  render() {
    const {todos} = this.state
    console.log(this)
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo = {this.addTodo}/>
        <List todos = {todos} checkTodo = {this.checkTodo} deleteTodo = {this.deleteTodo}/>
        <Footer todos = {todos} checkAll = {this.checkAll} clear = {this.clear}/>  
      </div>
    </div>
    )
  }
}
