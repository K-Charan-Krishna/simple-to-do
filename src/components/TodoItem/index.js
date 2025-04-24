// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleteTask} = props
  const {id, title} = item

  const onDelete = () => {
    deleteTask(id)
  }

  return (
    <li className="li">
      <div className="li-item">
        <p className="task">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
