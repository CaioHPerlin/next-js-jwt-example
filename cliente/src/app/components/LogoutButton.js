'use client';

import Cookies from 'js-cookie';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {

    const { push } = useRouter();

    const handleLogout = () => {
        Cookies.set('token', '');
        push('/');
    }

    return(
        <Button secondary={true} method={() => handleLogout()}>
            Logout
        </Button>
    )
}