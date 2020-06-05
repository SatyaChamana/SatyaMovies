import React, { Component } from 'react';

class Textbox extends Component {
    state = {  }
    render() { 
        return ( <div className='compInput' >
            <div className='compLabel'>{this.props.label} : </div>
            <div className='compField'>
                <input type={this.props.type} onChange={this.props.onChange}/>
            </div>
        </div> );
    }
}
 
export default Textbox;