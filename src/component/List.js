import React, { useContext } from 'react'
import { DataContext } from '../App'
import Table from 'react-bootstrap/Table';
import Summary from './Summary';


const List = ({flagScore, averageScore}) => {
  const students = useContext(DataContext).students;
  const handleDelete = useContext(DataContext).handleDelete;
//   const flagScore = useContext(DataContext).flagScore;

  let count = 0;  
  return (
    <div>
        <Table striped bordered hover className='mt-3'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Score</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student => {
                        count++;
                        return (
                            <tr key={student.id}>
                                <td>{count}</td>
                                <td className={flagScore && student.score >= 5 ? 'bold': ''}>{student.firstname}</td>
                                <td className={flagScore && student.score >= 5 ? 'bold': ''}>{student.lastname}</td>
                                <td >{student.score}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDelete(student)}>Xóa</button>
                                    {/* <button className='btn btn-warning' onClick={() => setDataUpdate(student)}>Xóa</button> */}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
        <Summary  averageScore= {averageScore}/>
    </div>
  )
}

export default List