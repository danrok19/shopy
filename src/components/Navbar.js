import classNames from 'classnames';

function Navbar() {

//all links in the navbar
    const links = [
        { label: 'Home', path: '/home'},
        { label: 'News', path: '/new'},
        { label: 'Loadouts', path: '/loadouts'},
        { label: 'Skins', path: '/skins'},
        { label: 'Weapons', path: '/weapons'},
        { label: 'Stats', path: '/stats'},
    ];

    let classSetup = classNames('cursor-pointer', 'rounded', 'p-1', 'hover:bg-neutral-600');

    const renderedLinks = links.map((link) => {
        return <li key={link.label} className={classSetup}>{link.label}</li>;
    })


    return (
        <div className="flex absolute bg-neutral-800 w-11/12 mt-3 mx-20 p-2 rounded text-gray-100">
            <ul className="flex gap-20">
                {renderedLinks}
            </ul>
        </div>
    )
}

export default Navbar;