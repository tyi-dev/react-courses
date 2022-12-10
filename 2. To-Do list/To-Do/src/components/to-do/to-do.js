import React from "react";
import './to-do.css'
class ToDo extends React.Component {
    state = {
        tasks: [{
            id: 1,
            title: "task1",
            status: true
        },{
            id: 2,
            title: "task2",
            status: false
        }],
        inputValue: ""
    }
    onAddElementButtonClick = () => {
        this.setState({tasks: [...this.state.tasks, {id: Math.random(), title: this.state.inputValue, status: true}]})
    }
    onInputValueChange = (event) => {
        this.setState({inputValue: event.target.value})
    }
    onTaskClick = (event) => {
        if(event.target.status){
            event.target.style.backgroundColor = 'red'
            event.target.status = false
        }
        else{
            event.target.style.backgroundColor = 'green'
            event.target.status = true
        }
    }


render() {
    return (
        <div className='toDo'>
            <div>
                Tasks to handle
            </div>
            <div className = 'taskBox'>
                {this.state.tasks.map(item => <div className={item.status ? 'taskFieldBackgroundRed' : 'taskFieldBackgroundGreen'} key={item.id} onClick={this.onTaskClick} status = {item.status}>{item.title}</div>)}
            </div>
            <div>
                <input class = 'taskInput' value={this.state.inputValue} onChange={this.onInputValueChange}/>
                <button class = 'addTaskButton' onClick={this.onAddElementButtonClick}>Add element</button>
            </div>
        </div>
    )
}
}

export default ToDo;