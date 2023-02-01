import React, { memo, useContext } from 'react'
import { DataContext } from '../App';
import Table from 'react-bootstrap/Table';

const Summary = ({averageScore}) => {

  const students = useContext(DataContext).students;
  const totalGoodStudents = useContext(DataContext).totalGoodStudents; 
  let total = totalGoodStudents();
  console.log('abc');
  // console.log(averageScore);
  // averageScore();
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Tổng số sinh viên</th>
            <th>Điểm trung bình</th>
            <th>Tổng số sinh viên điểm cao</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>{students.length}</td>
            <td>{averageScore ? averageScore : 0}</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default memo(Summary);