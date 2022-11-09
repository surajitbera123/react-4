import React from 'react';
import Student from '../Data';
import TableRow from '../components/Row';

const Students = () => {
    return (
        <div className='details'>
            <header className='header'>
                <h3>Student Details</h3>
                <button id='butn'>Add new student</button>
            </header>
            <table className="table bg-white">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td className='algn'>Age</td>
                        <td className='algn'>Course</td>
                        <td className='algn'>Batch</td>
                        <td className='algn'>Change</td>
                    </tr>   
                </thead>
                <tbody>
                {
                    Student.map((val) => {
                        return <TableRow Name={val.Name} Age={val.Age} Course={val.Course} Batch={val.Batch} Change={val.Change} />})
                }
                </tbody>
            </table>
        </div>
    );
}

export default Students;