'use client'
import Link from "next/link";
import Button from "./Button";

export default function Navbar(){
    return(
        <nav className='flex bg-white w-screen shadow-md align-middle p-6'>
          <Link href={'/'}><Button secondary>Login</Button></Link>
          <Link href={'/pages/dashboard/'}><Button secondary>Dashboard</Button></Link>
          <Link href={'/pages/dashboard/register'}><Button secondary>Register</Button></Link>
          <Link href={'/pages/dashboard/alter'}><Button secondary>Alter</Button></Link>
        </nav>
    )
}