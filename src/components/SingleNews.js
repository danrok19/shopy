import classNames from "classnames";
import { useRef } from 'react'

function SingleNews({ children, big, small, headValue, image, ...rest }) {

    //rest.className returns all the stylying stuff passed in props
    //depending on what props were passed the expected button will be returned(primary, accept, secondary, danger, rounded)
    const classSetup = classNames('div2',rest.className, 'font-bold', 'py-2', 'px-4', 'rounded', 
    'transition ease-in-out delay-100','bg-neutral-800 border-solid border-gray-900 mb-8 text-white hover:bg-neutral-700 hover:text-black cursor-pointer mx-auto',{
        'h-96 w-longNews': big,
        'w-shortNews h-72 ': small,
    }
    )


    const divElement = useRef();
    const classSetupHead = classNames('text-lg bg-blue-700 w-3/5 rounded-full text-white flex justify-center m-auto');

    //changing a little bit of the div with {headValue} onMouseActions
    const onMouseEnter = () => {
        divElement.current.classList.remove('w-3/5')
        divElement.current.classList.add('w-full')
        divElement.current.classList.add('rounded-lg')
    }
    const onMouseLeave = () => {
        divElement.current.classList.remove('w-full')
        divElement.current.classList.remove('rounded-lg')
        divElement.current.classList.add('w-3/5')
    }

    return (
        <div className={classSetup} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className={classSetupHead} ref={divElement}>
                {headValue}
            </div>
            <div className="flex mt-5">
                <img src={image} alt="Logo" className="flex mr-5"/>
                <div className="border-4 border-transparent border-l-blue-500 flex place-items-center pl-5 m-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}
export default SingleNews;