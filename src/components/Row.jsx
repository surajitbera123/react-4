import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class TableRow extends Component {
    constructor(props){
        super()
        this.state={
            Name:props.Name,
            Age:props.Age,
            Course:props.Course,
            Batch:props.Batch,
            Change:props.Change
        }
    }
    render() {
        return (
            <tr>
                <td>{this.state.Name}</td>
                <td className='algn' >{this.state.Age}</td>
                <td className='algn' >{this.state.Course}</td>
                <td className='algn' >{this.state.Batch}</td>
                <td className='algn' ><Link>{this.state.Change}</Link></td>
            </tr>
        );
    }
}

export default TableRow;