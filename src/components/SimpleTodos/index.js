import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

// const initialTodosList = [
//   {
//     id: 1,
//     title: 'Book the ticket for today evening',
//     status: false,
//   },
//   {
//     id: 2,
//     title: 'Rent the movie for tomorrow movie night',
//     status: false,
//   },
//   {
//     id: 3,
//     title: 'Confirm the slot for the yoga session tomorrow morning',
//     status: false,
//   },
//   {
//     id: 4,
//     title: 'Drop the parcel at Bloomingdale',
//     status: false,
//   },
//   {
//     id: 5,
//     title: 'Order fruits on Big Basket',
//     status: false,
//   },
//   {
//     id: 6,
//     title: 'Fix the production issue',
//     status: false,
//   },
//   {
//     id: 7,
//     title: 'Confirm my slot for Saturday Night',
//     status: false,
//   },
//   {
//     id: 8,
//     title: 'Get essentials for Sunday car wash',
//     status: false,
//   },
// ]

// Write your code here

class SimpleTodos extends Component {
  state = {todolist: JSON.parse(localStorage.getItem('todolist')), input: ''}

  deleteTask = id => {
    const {todolist} = this.state
    const filteredTask = todolist.filter(each => each.id !== id)
    console.log(filteredTask)
    this.setState({todolist: filteredTask})
  }

  additem = () => {
    const {input, todolist} = this.state
    if (input !== '') {
      const newtodo = {
        id: todolist.length + 1,
        title: input,
      }
      this.setState(prev => ({
        todolist: [...prev.todolist, newtodo],
        input: '',
      }))
    }
  }

  editItem = (id, editvale) => {
    const {todolist} = this.state
    if (editvale !== '') {
      const updatedlist = todolist.map(each => {
        if (each.id === id) {
          return {...each, title: editvale}
        }
        return each
      })
      this.setState({todolist: updatedlist})
    }
  }

  taskCompleat = id => {
    const {todolist} = this.state
    const updatedlist = todolist.map(each => {
      if (each.id === id) {
        return {...each, status: !each.status}
      }
      return each
    })
    this.setState({todolist: updatedlist})
  }

  saveChanges = () => {
    const {todolist} = this.state
    localStorage.setItem('todolist', JSON.stringify(todolist))
  }

  render() {
    const {todolist, input} = this.state
    return (
      <div className="container">
        <div className="inner">
          <h1 className="heading">Simple Todos</h1>
          <input
            type="text"
            placeholder="enter todo"
            onChange={event => {
              this.setState({input: event.target.value})
            }}
            className="input"
            value={input}
          />
          <button type="button" className="add-btn" onClick={this.additem}>
            ADD
          </button>
          <button type="button" className="add-btn" onClick={this.saveChanges}>
            Save all
          </button>
          <ul className="list">
            {todolist.map(each => (
              <TodoItem
                item={each}
                deleteTask={this.deleteTask}
                key={each.id}
                editItem={this.editItem}
                taskCompleat={this.taskCompleat}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
