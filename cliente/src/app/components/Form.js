'use client';

export default function Form({onSubmit, children}) {
    return(
        <form className='grid grid-cols-1 gap-2 [&>input]:p-2 [&>input]:outline-none [&>input]:border-b-2 [&>input]:border-slate-200 ' onSubmit={onSubmit}>
            {children}
        </form>
    )
}