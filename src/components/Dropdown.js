
import { useState } from 'react';

function Dropdown({ children, options, onSelect, selection}){

    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = () =>{
        setIsOpen(!isOpen);
    }

    const handleOptionClicked = (option) =>{
        setIsOpen(false); //close the dropdown
        onSelect(option); // return what option was chosen
    }

    const renderedOptions = options.map((option) =>{
        return(
        <div key={option.value} onClick={() => handleOptionClicked(option)} class='bg-neutral-800 text-gray-100'>
            {option.label}
        </div>
        )
    })

    let content = 'Wybierz...';
    if(selection){
        content = selection.label;
    }

    return(
        <div class='bg-neutral-200 w-48'>
            <div onClick={handleClick}>
                {content}
            </div>
            {isOpen && <div>{renderedOptions}</div>}
        </div>
    )
}
export default Dropdown;