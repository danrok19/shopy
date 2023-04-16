import { useState } from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Dropdown from './components/Dropdown';


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
    <div class="bg-zinc-900 h-screen">
      <Navbar/>
      <div class="pt-20">
        <Button accept rounded>OK!</Button>
      </div>
      <div> 
        <Dropdown options={options} onSelect={onSelect} selection={selection}/>
      </div>
    </div>
  );
}

export default App;
