import SingleNews from "../components/SingleNews";
import { useFetchNewsQuery  } from "../store";
import Button from '../components/Button';
import useForm from "../hooks/use-form"; 


function NewsPage() {

    const {data, error, isLoading} = useFetchNewsQuery(); 
    const {openForm, handleOpeningForm, newsSize, handleChangeSize, newsUrl, handleChangeUrl, newsBody, handleChangeBody, handleClick} = useForm();


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
        <div className='bg-zinc-900 pt-20 pb-10'>
            <Button primary onClick={handleOpeningForm} className='mb-2'>Add news</Button>
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