import React from 'react'
import Table from 'react-bootstrap/Table';

const DataList = ({listSV,setSV,listSV2}) => {
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

    const handleDelete = (item) => {
        const itemDelete = document.getElementById(item.id)
        itemDelete.remove();
        const index = listSV.indexOf(item);
        listSV.splice(index, 1);
        setSV(listSV);
        // console.log(listSV2);
    };  

  return (
    <div>
        <div className='container mt-3'>
            <button className='btn btn-info mb-3' onClick={handleTick}>Đánh dấu sinh viên</button>
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
                                listSV[0] !== undefined ? listSV.map((item) => {
                                    return(
                                        <tr key={item.id} id={item.id}>
                                            <td>{item.firstName}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.score}</td>
                                            <td><button className='btn btn-danger' onClick={()=>handleDelete(item)}>Xóa</button></td>
                                        </tr>
                                    )
                                }) : <></>
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