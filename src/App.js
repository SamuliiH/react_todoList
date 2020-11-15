import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoBanner from './TodoBanner';


class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            items: []
          };
        }

       createKey = () => {
          let key = "";
          for(let i = 0; i < 2; i++){
            let num = Math.floor(Math.random() * (65 - 90)) + 90;
            let char = String.fromCharCode(num);
            key += (char + "" + num*Math.floor(Math.random() * 100));
          }
          return key;
        }

        addItem = (newItem) => {
          if(!newItem.trim().length){
            newItem = "Example Todo, Enter a value next time!";
          }
          let newItemObject = {text:newItem.trim(), id: this.createKey()}
          let newItems = [...this.state.items, newItemObject];
          this.setState({items:newItems});
        }

        removeItem = (itemID) => {
          let newItems = [...this.state.items];
          newItems = newItems.filter((item)=> {
            return item.id !== itemID;
          });
          this.setState({items: newItems});
        }

        render () {
            return (
                <div>
                    <TodoBanner/>
                    <TodoForm submitForm={this.addItem} />
                    <TodoList items={this.state.items} removeItem={this.removeItem} />
                </div>
            )
        }

    }


export default App;
