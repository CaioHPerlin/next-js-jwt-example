'use client'
import Block from "@/app/components/Block"
import { getUser } from "@/app/functions/handlerAcessAPI"
import { useEffect, useState } from "react"

export default function Delete({params}){
    const [user, setUser] = useState({
        id,
        usuario
    });

    useEffect(() => {
        const getUserFromDB = async () => {
            setUser(getUser(params.id))
        }
        getUserFromDB();
    }, [])

    return(
        <Block>
            <h1>Are you sure you want to delete <code>{user.usuario}</code>?</h1>
        </Block>
    )
}