import React from 'react';

class TodoForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submitForm(this.refs.item.value);
    this.refs.item.value = "";
    }
    render (){
        return (
            <form onSubmit={(e) => {this.handleSubmit(e)}}>
                <input type="text" ref="item" placeholder="Add todo"/>
                <input type="submit"/>
            </form>
        );
    }

}

export default TodoForm;
