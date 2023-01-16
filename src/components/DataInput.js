import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

const DataInput = ({setSV, SV}) => {
    const [listInput, setListInput] = useState({id:uuidv4(), firstName:'', lastName:'', score:''})
    const handleSendData = () => {
        setSV([...SV, listInput])
        setListInput({id:uuidv4(), firstName:'', lastName:'', score:''})
    }
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-6'>
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Họ và tên đệm</Form.Label>
                            <Form.Control type="text" placeholder="example: Nguyễn Văn" onChange={(e)=>{setListInput({...listInput,firstName:e.target.value})}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control type="text" placeholder="example: A" onChange={(e)=>{setListInput({...listInput,lastName:e.target.value})}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Điểm</Form.Label>
                            <Form.Control type="number" placeholder="example: 9" onChange={(e)=>{setListInput({...listInput,score:e.target.value})}} />
                        </Form.Group>
                        <Button type='reset' variant="info" onClick={handleSendData}>Thêm sinh viên</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default DataInput