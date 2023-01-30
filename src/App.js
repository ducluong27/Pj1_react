import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useCallback, useEffect, useRef, useState } from 'react';
import './App.css';
import FormInput from './component/FormInput';
// import List from './component/List';

const DataContext = createContext();

function App() {
  const [students, setStudents] = useState([]);
  const preStudents = useRef(students);

  useEffect(() => {
    preStudents.current = students;
  }, [students]);

  let temp = preStudents.current;
  const handleUndoStudent = () => {
    setStudents(temp);
  };

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };



  const handleDelete = (student) => {
    const tmpSinhVien = [...students];
    // console.log(student);
    const svIndex = students.indexOf(student);
    // console.log(svIndex)
    if (svIndex > -1) {
      tmpSinhVien.splice(svIndex, 1);
      setStudents(tmpSinhVien);
    }
  };

  const totalGoodStudents = useCallback(() => {
    // console.log('dispatch callbacks');
    const temp = [...students];
    return temp.filter(student => student.score >= 5).length;
  },[students]);
  
  

  // const handleGoodStudents = () => {
  //   students.fit
  // }
  
  // const averageScore = useMemo(() => {
  //   console.log('dispatch');
  //   const sumScore = students.reduce((result,student) => {
  //     return result = result + +student.score;
  //   },0)
  //   return sumScore / students.length;
  // }, [students])

  // const averageScore = () => {
  //   // console.log('dispatch');
  //   const sumScore = students.reduce((result,student) => {
  //     return result = result + +student.score;
  //   },0)
  //   return sumScore / students.length;
  // }
 

  const value = {
    students, handleDelete, handleUndoStudent, totalGoodStudents
  }

  return (
    <div className="App">
      <DataContext.Provider value={value}>
        <FormInput onAddStudent = {handleAddStudent} students = {students}/>
        {/* <List/> */}
      </DataContext.Provider>
    </div>
  );
}

export default App;
export {DataContext};
