import React, { useContext, useRef, useState, useMemo } from 'react'
import { DataContext } from '../App'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import Test from './Test';
import List from './List';

const FormInput = ({onAddStudent}) => {
    const students = useContext(DataContext).students;
    // let a = students;
    const refFocus = useRef()
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [score, setScore] = useState('');
    const [flagScore, setFlagScore] = useState(false);
    const handleBold = () => {
        setFlagScore(!flagScore);
    }
    // const id = useMemo(() => { 
    //     console.log('chạy');
    //     return uuidv4();
    // }, [students])

    const handleAddStudent = (e) => {
        const student = {id:uuidv4(), firstname, lastname, score};
        // console.log(student);
        e.preventDefault();
        onAddStudent(student);
        setFirstname('');
        setLastname('');
        setScore('');
        refFocus.current.focus();
    }
    // const handleBoldStudent = useContext(DataContext).handleBold;  
    const handleUndoStudent = useContext(DataContext).handleUndoStudent;
    
    const averageScore = useMemo(() => {
        // console.log('dispatch');
        const sumScore = students.reduce((result,student) => {
        return result = result + +student.score;
        },0)
        return sumScore / students.length;
    }, [students]);

    // console.log(averageScore);
  return (
    <div className='container'>
        <div className='col-md-8 mt-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Firstname</Form.Label>
                    <Form.Control ref={refFocus} type="text" placeholder="Enter firstname" value = {firstname} onChange = {(e) => {setFirstname(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Lastname</Form.Label>
                    <Form.Control type="text" placeholder="Lastname" value = {lastname} onChange = {(e) => {setLastname(e.target.value)}}/>
                </Form.Group>
                
                <Form.Group className="mb-3 " controlId="formScore">
                    <Form.Label>Score</Form.Label>
                    <Form.Control type="Number" placeholder="Score" value = {score} onChange = {(e) => {setScore(e.target.value)}}/>
                </Form.Group>
                <Button variant="info" type="submit" onClick={(e) => handleAddStudent(e)} className = 'me-3'>
                    Submit
                </Button>
                <Button onClick={handleBold} className = 'me-3'>
                    Đánh dấu sinh viên điểm cao
                </Button>
                <Button variant="secondary" onClick={() => handleUndoStudent()}>
                    Quay lại
                </Button>
            </Form>
        </div>
        <List flagScore = {flagScore} averageScore= {averageScore}/>
    </div>
  )
}

export default FormInput