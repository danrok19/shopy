import classNames from "classnames";

function Button({children, primary, accept, secondary, danger, rounded, ...rest}){


//rest.className returns all the stylying stuff passed in props
//depending on what props were passed the expected button will be returned(primary, accept, secondary, danger, rounded)
    const classSetup = classNames(rest.className,'font-bold', 'py-2', 'px-4', 'rounded','transition ease-in-out delay-100 ',{
        'bg-gray-300 hover:bg-gray-200': primary,
        'bg-neutral-700 hover:bg-neutral-600': secondary,
        'bg-green-600 hover:bg-green-500': accept,
        'bg-red-600 hover:bg-red-500': danger,
        'rounded-full': rounded
    }
    )

//...rest return all "onActions" passed in the props
    return(
        <button {...rest} className={classSetup}>
            {children}
        </button>
    )
}
export default Button;