import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component{
    state={
        val:''
    }
    render(){
        return(
            <div value={this.state.val}>
            </div>
        );
    }
}
ReactDOM.render(
    <Test/>,
    document.querySelector('#root')
);