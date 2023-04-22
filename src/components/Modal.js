import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal ({onChange, children, actionBar}) {
    
    useEffect(()=>{
        document.body.classList.add('overflow-hidden');

        return () =>{
            document.body.classList.remove('overflow-hidden')
        }
    },[]);

    return ReactDOM.createPortal(
        <div>
            <div className="fixed inset-0 bg-blue-300 opacity-70" onClick={onChange}>
            </div>
            <div className="fixed inset-60 p-10 bg-white">
                <div className="flex flex-col justify-between h-full m-auto">
                    {children}
                    <div className="flex">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}
export default Modal;