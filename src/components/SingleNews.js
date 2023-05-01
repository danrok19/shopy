import classNames from "classnames";
import { useRef } from 'react'
import { useDeleteNewsMutation } from "../store";
import { FaBeer } from "react-icons/fa";

function SingleNews({ children, big, small, headValue, image, id,...rest }) {

    const [deleteNews, result] = useDeleteNewsMutation();

    const deleteElement = useRef();

    //rest.className returns all the stylying stuff passed in props
    //depending on what props were passed the expected news card will be returned(big, small)
    const classSetup = classNames('div2',rest.className, 'font-bold', 'py-2', 'px-4', 'rounded', 
    'transition ease-in-out delay-100','bg-neutral-800 border-solid border-gray-900 mb-8 text-white hover:bg-neutral-700 hover:text-black cursor-pointer mx-auto relative',{
        'h-96 w-longNews': big,
        'w-shortNews h-72 ': small,
    }
    )

    const classSetupHead = classNames('text-lg bg-blue-700 w-11/12 rounded-full text-white flex justify-center m-auto');

    const handleDelete = () =>{
        deleteNews(id)
    }

    //changing a little bit of the div with {headValue} onMouseActions
    const onMouseEnter = () => {
        deleteElement.current.classList.remove('hidden')
    }
    
    const onMouseLeave = () => {
        deleteElement.current.classList.add('hidden')
    }



    return (
        <div className={classSetup} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={classSetupHead}>
                {headValue}
            </div>
            <div className="flex mt-5">
                <img src={image} alt="Logo" className="flex mr-5"/>
                <div className="border-4 border-transparent border-l-blue-500 flex place-items-center pl-5 m-auto">
                    {children}
                </div>
            </div>
            <div className="hidden absolute bottom-3 right-8 bg-red-500 px-2 py-1 rounded text-white" ref={deleteElement} onClick={handleDelete}><FaBeer/></div>
        </div>
    )
}
export default SingleNews;