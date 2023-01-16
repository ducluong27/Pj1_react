import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

const DataList = ({listSV, setSV}) => {
    const [max , setMax ] = useState(20)
    const handleTick = () => {
        const listGoodSt = listSV.filter ((item) => {
            return item.score >= 5;
        })
        console.log(listGoodSt);
        listGoodSt.forEach(item => {
            const itemTick = document.getElementById(item.id)
            itemTick.children[0].style.fontWeight = 'bold';
            itemTick.children[1].style.fontWeight = 'bold';
        });
    };
    const deletePro = (id) => {
        const newArr = listSV.filter((item) => {return item.id !== id} )
        setSV(newArr);
    }

const handleChange =() =>{
    // e.preventDefault();
    setMax(5)
}

  return (
    <div>
        <div className='container mt-3'>
            {/* <button className='btn btn-info mb-3' onClick={() => handleTick()}>Đánh dấu sinh viên</button> */}
            <button className='btn btn-info mb-3' onClick={ handleChange}>Đánh dấu sinh viên</button>
            <div className='row'>
                <div className='col-6'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>  
                                <th>Score</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                             listSV?.map((item) => {
                                return(
                                    <tr  id = {item.id} key = {item.id}>
                                        <td className={item.score>=max ?"red":""}>{item.firstName}</td>
                                        <td className={item.score>=max ?"red":""}>{item.lastName}</td>
                                        <td>{item.score}</td>
                                        <td><button className='btn btn-danger' onClick={()=>deletePro(item.id)}>Xóa</button></td>
                                    </tr>
                                )
                            }) 
                        }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataList