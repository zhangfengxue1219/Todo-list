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
  render() {
    return (
      <div className="todo-container">
      <div className="todo-wrap">
        <Header/>
        <List todos={this.state.todos}/>
        <Footer/>  
      </div>
    </div>
    )
  }
}