import Dropdown from "../components/Dropdown";
import { useState } from 'react';

function DropdownPage() {

    const [selection, setSelection] = useState('');


    const onSelect = (option) =>{
        setSelection(option);
      }
    

    const options = [
        { label: 'Option1', value: 'option1'},
        { label: 'Option2', value: 'option2'},
        { label: 'Option3', value: 'option3'},
        { label: 'Option4', value: 'option4'}
      ];

    return (
        <div className='bg-zinc-900 h-screen pt-20  '>
            <Dropdown options={options} onChange={onSelect} value={selection} />
        </div>
    )
}
export default DropdownPage;