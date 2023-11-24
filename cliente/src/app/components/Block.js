'use client';

export default function Block({title, children}) {
    return(
        <main className='m-8 bg-white w-1/3 rounded-t-lg border-b-8 border-slate-400 shadow-lg px-10 py-5 min-w-fit'>
            <h1 className='text-2xl pb-5'>{title}</h1>
            {children}
        </main>
    )
}