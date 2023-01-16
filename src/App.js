import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import DataInput from './components/DataInput';
import DataList from './components/DataList';

function App() {

  const [SV, setSV] = useState([]);
  console.log(SV);
  return (
    <div>
      <DataInput setSV = {setSV} SV = {SV}/>
      <DataList listSV={SV} setSV = {setSV}/>
    </div>
  );
}

export default App;
