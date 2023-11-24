'use client';
import Block from '@/app/components/Block';
import Button from '@/app/components/Button';
import Form from '@/app/components/Form';
import { getUser, updateUser } from '@/app/functions/handlerAcessAPI';
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Alter({ params }){
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        const findUser = async () => {
            const userDb = await getUser(params.id);
            setUser({name: userDb.name, email: userDb.email, password: userDb.password});
        }
        findUser();
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        if(user.name == '' || user.email == '' || user.password == ''){
            return toast.error('Há campos não preenchidos!');
        }
        await updateUser(user, params.id)
        toast.success('Usuário atualizado!')
        
    }

    return (
        <Block title={'Alterar'}>
            <Form onSubmit={handleUpdate}>
                <input
                placeholder='Nome'
                type='text'
                onChange={(e) => {
                    setUser({ ...user, name: e.target.value });
                }}/>
                <input
                placeholder='E-mail'
                type='email'
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }}/>
                <input
                placeholder='Senha'
                type='password'
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }}/>
                <div className='justify-self-end mt-5'>
                  <Button type={'reset'} secondary={true}>Limpar</Button>
                  <Button>Alterar</Button>
                </div>
            </Form>
            <ToastContainer/>
        </Block>
    )
}