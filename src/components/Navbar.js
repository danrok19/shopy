import classNames from 'classnames';

function Navbar() {

//all links in the navbar
    const links = [
        { label: 'Nowości', path: '/new'},
        { label: 'Produkty', path: '/products'},
        { label: 'Kontakt', path: '/contact'},
    ];

    let classSetup = classNames('cursor-pointer', 'rounded', 'p-1', 'hover:bg-neutral-600');

    const renderedLinks = links.map((link) => {
        return <li key={link.label} class={classSetup}>{link.label}</li>;
    })


    return (
        <div class="flex absolute bg-neutral-800 w-11/12 mt-3 mx-20 p-2 rounded text-gray-100">
            <ul class="flex gap-20">
                {renderedLinks}
            </ul>
        </div>
    )
}

export default Navbar;