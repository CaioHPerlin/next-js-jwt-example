'use server'

import { cookies } from "next/dist/client/components/headers";

const getTokenCookie = () => `token=${cookies.get('token').value}`;

const databaseUrl = 'http://localhost:3001'

const getUserAuthenticated = async (user) => {
    try{
        const response = await fetch(databaseUrl + "/logar",
        {
            cache:"no-cache",
            method:"POST",
            headers:{ "Content-Type": "Application/json" },
            body: JSON.stringify(user)
        });
        const userAuth = await response.json();
        return userAuth;
    }catch {
        return {};
    }
}

const createUser = async (user) => {
    try{
        const response = await fetch(databaseUrl + "/user", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                Cookies: getTokenCookie()
            },
            body: JSON.stringify(user)
        });
        const newUser = await response.json();
        return newUser;
    }catch {
        return {};
    }
}

const getUsers = async () => {
    try{
        const response = await fetch(databaseUrl + "/usuarios/listar", { 
            method: 'GET',
            next: { revalidate: 5 }
        });
        const users = await response.json();
        console.log(users)
        
        return users;
    }catch (err){
        return [{name: ""+err}];
    }
}

const getUser = async (id) => {
    try{
        const response = await fetch(databaseUrl + "user/" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'Application/json',
                Cookie: getTokenCookie()
            }
        });
        const user = await response.json();
        return user
    } catch {
        return {};
    }
}

const updateUser = async (user, id) => {
    try{
        const response = await fetch(databaseUrl + "/user/" + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'Application/json',
                Cookie: getTokenCookie()
            },
            body: JSON.stringify(user)
        });
        const newUser = await response.json();
        return newUser;
    } catch {
        return {};
    }
}

export { getUser, getUsers, getUserAuthenticated, createUser, updateUser };