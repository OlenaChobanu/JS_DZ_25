import React from "react";
import './todos-styles.css'
import AppHeader from "../layout/header/header";
import TodosList from "./todos-list/todos-list";
import TodoEdit from './todo-edit/todo-edit'

const todos = [
    {
        id: 1,
        title: 'qweqwe',
        body: 'qweqwe',
        isComplete: "false",
        completeDate: null,
    },
    {
        id: 2,
        title: 'asdasd',
        body: 'asdasd',
        isComplete: 'false',
        completeDate: null,
    },
    {
        id: 3,
        title: 'zxczxc',
        body: 'zxczxc',
        isComplete: 'false',
        completeDate: null,
    },
]

export default class TodosComponent extends React.Component {
    constructor(props){

        super(props);

        this.state = {
            currentTodo: null,
            todos,
            isEditMode: false,
        };

        this.onTodoCreate = this.onTodoCreate.bind(this);
        this.onTodoDelete = this.onTodoDelete.bind(this);
        this.onTodoEdit = this.onTodoEdit.bind(this);
        this.onEdited = this.onEdited.bind(this);
        this.onTodoComplete = this.onTodoComplete.bind(this);
    }

    render(){
        return (
            <>
                <AppHeader cb={this.onTodoCreate} currentTodo/>
                <div className="todos-container">
                    {this.renderTodoContent()}
                </div>
            </>
            )
    }

    renderTodoContent(){
        if(!this.state.isEditMode){
            return <TodosList 
                currentTodo={this.state.currentTodo}
                todos={this.state.todos} 
                onDelete={this.onTodoDelete}
                edit={this.onTodoEdit}
                onComplete={this.onTodoComplete}
            ></TodosList>
        }
        if(this.state.isEditMode){
            return <TodoEdit 
                cb={this.onEdited} 
                todo={this.state.currentTodo ? this.state.currentTodo: {title: '', body: '', isComplete: 'false'}} 
            ></TodoEdit>
        }
    }
 
    onTodoComplete(todo){
        this.setState({
            ...this.state, 
            todos: [
                ...this.state.todos.map(t => (t.id === todo.id ? {...todo, isComplete: 'true', completeDate: currentData} : t)),
            ],
            })
    }
    onTodoCreate(todo){
        this.setState({
            ...this.state, 
            todos: [
                ...this.state.todos, 
                {...todo, id: Date.now()},
            ],
            })
    }

    onTodoEdit(todo){
        this.setState({
            ...this.state,
            currentTodo: todo,
            isEditMode: true,
        })
    }
    onEdited(todo){
        this.setState({
            ...this.state, 
            todos: [
                ...this.state.todos.map(t => (t.id === todo.id ? todo : t)),
            ],
            isEditMode: false,
            currentTodo: null,
        })
    }

    onTodoDelete(id){
        this.setState({
            ...this.state, 
            todos: this.state.todos.filter(t => t.id !== id),
        })
    }
}

let currentData = getCurrentDate(); 

function getCurrentDate() {
    let current = new Date();
    let year = current.getFullYear();
    let month = current.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let date = current.getDate();
    if (date < 10) date = '0' + date;
    return date +'.'+ month +'.'+ year;
}