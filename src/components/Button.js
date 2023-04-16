import classNames from "classnames";

function Button({children, primary, accept, secondary, danger, rounded, ...rest}){


//rest.className returns all the stylying stuff passed in props
//depending on what props were passed the expected button will be returned(primary, accept, secondary, danger, rounded)
    const classSetup = classNames(rest.className,'font-bold', 'py-2', 'px-4', 'rounded',{
        'bg-gray-300': primary,
        'bg-neutral-800': secondary,
        'bg-green-500': accept,
        'bg-red-500': danger,
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