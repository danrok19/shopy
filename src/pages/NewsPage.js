import SingleNews from "../components/SingleNews";
import { useFetchAlbumsQuery  } from "../store";
import { newsApi } from "../store/apis/newsApi";

function NewsPage() {
    
    const {data, error, isLoading} = useFetchAlbumsQuery(); 
    console.log(data, error, isLoading)


    let content;

    if(isLoading){
        content = <div className="text-white">Loading...</div>
    }
    else if(error){
        content = <div>Something crashed</div>
    }
    else{
        content = data.map(newO =>{
            if(newO.size === 'big'){
                return <div key={newO.id}>
                <SingleNews big img={newO.url}  headValue={'Tutyl moze byc taki'} >{newO.body}</SingleNews>
            </div>
            }
            else{
                return <div key={newO.id}>
                <SingleNews small img={newO.url}  headValue={'Tutyl moze byc taki'} >{newO.body}</SingleNews>
            </div>
            }
            
        })
    }

    return (
        <div className='bg-zinc-900 h-screen pt-20'>
            {content}
        </div>
    )
}
export default NewsPage;