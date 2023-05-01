import { useState } from 'react';
import { useAddNewsMutation } from '../store';
import nextId from "react-id-generator";

function useForm(){

    const [addNews, result] = useAddNewsMutation();

    const [openForm, setOpenForm] = useState(false);
    const [newsSize, setNewsSize] = useState('');
    const [newsUrl, setNewsUrl] = useState('');
    const [newsBody, setNewsBody] = useState('');

    const handleOpeningForm = () =>{
        setOpenForm(!openForm);
    }
    const handleChangeSize = (event) => {
        setNewsSize(event.target.value)
    }
    const handleChangeUrl = (event) => {
        setNewsUrl(event.target.value)
    }
    const handleChangeBody = (event) => {
        setNewsBody(event.target.value)
    }   
    const handleClick = (event) =>{
        event.preventDefault();

        addNews({id:id, size:newsSize, url:newsUrl, body:newsBody});

        setNewsSize('');
        setNewsSize('');
        setNewsBody('');

        setOpenForm(false);
    }

    let id = nextId();

    return {openForm,handleOpeningForm, newsSize,handleChangeSize, newsUrl,handleChangeUrl, newsBody, handleChangeBody, handleClick};
}
export default useForm;