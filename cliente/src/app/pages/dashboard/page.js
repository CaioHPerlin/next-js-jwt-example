import UserList from '@/app/components/UserList';
import LogoutButton from '@/app/components/LogoutButton';
import { getUsers } from '@/app/functions/handlerAcessAPI';
import { Suspense } from 'react';
import Block from '@/app/components/Block';

export default async function Dashboard() {
   
    const users = await getUsers();

    return (
        <Block title={'Dashboard'}>
            <Suspense fallback={<p>Loading...</p>}>
                <UserList list={users}/>
            </Suspense>
            <div className='flex justify-end mt-5'>
                <LogoutButton/>
            </div>
        </Block>
    );
};