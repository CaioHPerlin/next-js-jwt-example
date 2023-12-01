import Link from "next/link"

export default async function UserList({list}) {
    await new Promise((resolve) => setTimeout(resolve, 750))
    return(
        <code>
            {list.map(user => <div key={user.usuario}>
                <h2>{user.usuario}</h2> <Link href={`/pages/dashboard/delete/${user.id}`}>X</Link>
            </div>)}
        </code>
    )
}