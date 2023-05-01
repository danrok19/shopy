import { useState } from 'react';
import nextId from "react-id-generator";
import SingleNews from "../components/SingleNews";
import { useFetchNewsQuery, useAddNewsMutation } from "../store";
import Button from '../components/Button';


function NewsPage() {


    const [openForm, setOpenForm] = useState(false);
    const [newsSize, setNewsSize] = useState('');
    const [newsUrl, setNewsUrl] = useState('');
    const [newsBody, setNewsBody] = useState('');
    
    const {data, error, isLoading} = useFetchNewsQuery(); 

    const [addNews, result] = useAddNewsMutation();


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
    }

    let id = nextId();

    let content;

    if(isLoading){
        content = <div className="text-white h-screen">Loading...</div>
    }
    else if(error){
        content = <div className="text-white h-screen">Something has crashed...</div>
    }
    else{
        content = data.map(newO =>{
            if(newO.size === 'big'){
                return <div key={newO.id}>
                <SingleNews big img={newO.url} headValue={'Tutyl moze byc taki'} id={newO.id}>{newO.body}</SingleNews>
            </div>
            }
            else{
                return <div key={newO.id}>
                <SingleNews small img={newO.url} headValue={'Tutyl moze byc taki'} id={newO.id}>{newO.body}</SingleNews>
            </div>
            }
            
        })
    }

    return (
        <div className='bg-zinc-900 h-full pt-20 pb-10'>
            <Button primary onClick={handleOpeningForm}>Add news</Button>
            {openForm && <form onSubmit={handleClick} className='bg-neutral-800 flex flex-col px-10 py-5 w-1/3 my-5 mx-auto'>
                <label className='text-white'>Big of small news card</label>
                <input type="text" value={newsSize} onChange={handleChangeSize} className='border rounded'/>

                <label className='text-white'>Url of the image</label>
                <input type="text" value={newsUrl} onChange={handleChangeUrl} className='border rounded'/>

                <label className='text-white'>Text of the news</label>
                <input type="text" value={newsBody} onChange={handleChangeBody} className='border rounded h-24'/>
                <Button accept>Add It</Button>
                 </form>}
            {content}
        </div>
    )
}
export default NewsPage;