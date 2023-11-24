'use client';
import { useState } from 'react';
import handlerAcessUser from './functions/handlerAcess';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Button from './components/Button';
import Block from './components/Block';
import Form from './components/Form';

export default function Login() {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token === undefined) {
        toast.error('Usuario ou senha incorretamente inseridos.');
      }
      push('/pages/dashboard');
    } catch {
      toast.error('Erro na aplicação.');
      refresh();
    }
  };
  return (
    <Block title={'Login'}>
      <Form onSubmit={handlerLogin}>
        <input
          placeholder='Usuário'
          name='name'
          type='text'
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        ></input>
        <input
          placeholder='Senha'
          name='password'
          type='password'
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        ></input>
        <div className='justify-self-end mt-5'>
          <Button type={'reset'} secondary={true}>Limpar</Button>
          <Button>Entrar</Button>
        </div>
      </Form>
      <ToastContainer />
    </Block>
  );
}
