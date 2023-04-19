import { useState } from 'react';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import Navbar from './components/navbar';


function App() {

  const [selection, setSelection] = useState('');

  const options = [
    { label: 'Option1', value: 'option1'},
    { label: 'Option2', value: 'option2'},
    { label: 'Option3', value: 'option3'},
    { label: 'Option4', value: 'option4'}
  ]

  const onSelect = (option) =>{
    setSelection(option);
  }

  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="pt-20">
        <Button accept rounded>OK!</Button>
      </div>
      <div> 
        <Dropdown options={options} onChange={onSelect} value={selection}/>
      </div>
    </div>
  );
}

export default App;
