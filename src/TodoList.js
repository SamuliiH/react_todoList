import React from 'react';
//import delete from './delete.jpg';

class TodoList extends React.Component {

      handleDelete = (e, itemID) => {
        e.preventDefault();
        this.props.removeItem(itemID);
      }

      render () {
        let items = [...this.props.items];
        return (
           <ul>
             {items.map( (item) => {
                return (
                <li ref="item" key={item.id} >{item.text}
                  <img className="delete" onClick={(e) => this.handleDelete(e, item.id)} alt="delete" src={require('./delete.jpg')}/>
                </li>)})}
          </ul>
        )
      }
  }

  export default TodoList;
