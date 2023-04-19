import classNames from 'classnames';
import { useState, useRef, useEffect } from 'react';
import SearchBar from './SearchBar';

function Nav() {

    //all links in the navbar
    const links = [
        { label: 'Home', path: '/home' },
        { label: 'News', path: '/new' },
        { label: 'Loadouts', path: '/loadouts' },
        { label: 'Skins', path: '/skins' },
        { label: 'Weapons', path: '/weapons' },
        { label: 'Stats', path: '/stats' },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const divElement = useRef(); //wrapping the whole div which is our dropNavbar -> using ref={devElement}

    //this useEffect is used in situation when user click outside of the dropNavbar
    //its closing the dropNavbar
    useEffect(() => {
        const handler = (event) => {
            if (!divElement.current) { //if divElement doesn't have ref to anything do nothing
                return;
            }

            if (!divElement.current.contains(event.target)) { //if clicked outside the dropNavbar close it
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        }
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    let classSetup = classNames('cursor-pointer', 'hover:bg-neutral-600', 'hover:rounded-lg text-center');

    const renderedLinks = links.map((link) => {
        return <li key={link.label} className={classSetup}>{link.label}</li>;
    })

    const classSetupSpan = classNames('block w-5 h-0.5 my-1 rounded-full bg-gray-700 transition-all duration-300 ease-in-out')

    return (
        <div className='pt-3'>
            <div className="hidden lg:flex absolute bg-neutral-800 w-11/12 mx-20 p-2 rounded text-gray-100 justify-between">
                <ul className="flex gap-20">
                    {renderedLinks}
                </ul>
                <div className='pr-10'>
                    <SearchBar />
                </div>
            </div>
            <div ref={divElement} className="flex justify-between bg-neutral-800 mx-20 p-2 rounded text-gray-100 lg:hidden">
                <span>WZaIm</span>
                <button className='inline-block cursor-pointer border-none bg-transparent' onClick={handleClick}>
                    <span className={classSetupSpan}></span>
                    <span className={classSetupSpan}></span>
                    <span className={classSetupSpan}></span>
                </button>
            </div>
            {isOpen && <ul className='mx-20 bg-neutral-500 rounded-b-lg lg:hidden'>
                {renderedLinks}
            </ul>}
        </div>

    )
}

export default Nav;