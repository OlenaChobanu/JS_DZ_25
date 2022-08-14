import AppButton from "../../../shared/components/button";
import './todo-styles.css'

export default function Todo({todo, onEdit, onDelete, onComplete}){
    if(todo.isComplete === 'true') {
        return (
            <div className="todo-item completed">
                <div className="button-container delete">
                    <AppButton cb={onDelete}>x</AppButton>
                </div>
                <div>{todo.title}</div>
                <div>{todo.body}</div>
                <div>{todo.isComplete}</div>
                <div>{todo.completeDate}</div>
                <div className="button-container">
                </div>
            </div>
        )
    } else {
        return (
            <div className="todo-item">
                <div className="button-container delete">
                    <AppButton cb={onDelete}>x</AppButton>
                </div>
                <div>{todo.title}</div>
                <div>{todo.body}</div>
                <div className="button-container">
                    <AppButton cb={onComplete}>Complete</AppButton>
                    <AppButton cb={onEdit}>Edit</AppButton>
                </div>
            </div>
        )
    }
}