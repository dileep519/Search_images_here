import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component{
    state={
      term:''
    };
    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="Searchs1">Enter</label>
                        <input id="Searchs1" value={this.state.term} type="text" onChange={(e)=>{this.setState({term:e.target.value})}}></input>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;