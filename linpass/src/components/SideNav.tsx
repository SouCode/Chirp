import React from "react";
import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";

export function SideNav() {
    const session = useSession();
    const user = session.data?.user;

    return (
        <nav className="w-40 sticky top-0 px-5 py-4 mt-10 text-lg text-center"> {/* Add 'text-center' class */}
            <ul className="gap-2">
                <li>
                    <Link href="/">Home</Link>
                </li>
        
                {user != null && (
                <li>
                    <Link href={`/profiles/${user.id}`}>Profile</Link>
                </li>
                )}

                {user == null ? (
                <li>
                    <button onClick={() => void signIn()}>Log In</button>
                </li>
                ) : (
                <li>
                    <button onClick={() => void signOut()}>Log Out</button>
                </li>
                )}
            </ul>
        </nav>
    );
}