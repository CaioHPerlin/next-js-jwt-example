'use client';

export default async function Button({children, method, secondary, type}) {

    let classes = "shadow-md w-fit px-5 ml-3 py-2 font-medium  rounded-xl text-white border-slate-400 border-2 bg-slate-400"

    if(secondary){
        classes = "shadow-md w-fit px-5 ml-3 py-2 font-medium rounded-xl text-w text-slate-400 border-slate-400 border-2 bg-white"
    }

    return(
        <button type={type} className={classes} onClick={method}>
            {children}
        </button>
    )
}