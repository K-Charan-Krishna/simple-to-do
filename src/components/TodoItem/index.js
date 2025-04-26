// Write your code here
import {useState} from 'react'
import './index.css'

const TodoItem = props => {
  const {item, deleteTask, editItem, taskCompleat} = props
  const {id, title} = item
  const [isEdit, setEdit] = useState(false)
  const [editvale, setEditvale] = useState(item.title)
  const tackclass = item.status ? 'task complet' : 'task'

  const onDelete = () => {
    deleteTask(id)
  }

  const onEdit = () => {
    setEdit(prev => !prev)
    editItem(id, editvale)
  }

  const onTaskcompleted = () => {
    taskCompleat(id)
  }

  return (
    <li className="li">
      <div className="li-item">
        <div className="check-para">
          <input
            type="checkbox"
            className="checkbox"
            onChange={onTaskcompleted}
          />
          {isEdit ? (
            <input
              type="text"
              className="edit-input"
              value={editvale}
              onChange={event => setEditvale(event.target.value)}
            />
          ) : (
            <p className={tackclass}>{title}</p>
          )}
        </div>
        <div className="button-div">
          <button type="button" className="button" onClick={onEdit}>
            {isEdit ? 'Save' : 'Edit'}
          </button>
          <button className="button" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}
export default TodoItem
