
import { useEffect, useState, useRef } from 'react';

function Dropdown({ children, options, onChange, value }) {

    const [isOpen, setIsOpen] = useState(false);

    const divElement = useRef(); //wrapping the whole div which is our dropdown -> using ref={devElement}

    //this useEffect is used in situation when user click outside of the dropdown
    //its closing the dropdown
    useEffect(()=>{
        const handler = (event) => {
            if(!divElement.current){ //if divElement doesn't have ref to anything do nothing
                return;
            }

            if(!divElement.current.contains(event.target)){ //if clicked outside the dropdown close it
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true);

        return  () => {
            document.removeEventListener('click', handler);
        }
    },[])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClicked = (option) => {
        setIsOpen(false); //close the dropdown
        onChange(option); // return what option was chosen
    }

    const renderedOptions = options.map((option) => {
        return (
            <div key={option.value} onClick={() => handleOptionClicked(option)} className='bg-neutral-800 text-gray-100 cursor-pointer border-2 border-violet-300 rouneded-lg'>
                {option.label}
            </div>
        )
    })


    return (
        <div ref={divElement} className='bg-neutral-200 w-48 rounded-t-lg rounded-b-lg'>
            <div onClick={handleClick} className='bg-violet-500 px-4 rounded-t-lg flex justify-between cursor-pointer border border-violet-400'>
                <div>
                    {value?.label || 'Select...'}
                </div>
                ▼
            </div>
            {isOpen && <div className='border border-violet-400 rounded'>{renderedOptions}</div>}
        </div>
    )
}
export default Dropdown;