import Link from "next/link";
import { signOut, signIn, useSession } from "next-auth/react";

export function SideNav() {
    // Fetching the current session data using the useSession hook
    const session = useSession();

    // Extracting the user data from the session (if available)
    const user = session.data?.user;

    return (
        <nav className="w-64 sticky top-0 px-2 py-4 mt-10 p-4 text-2xl flex items-center justify-center">
            <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
                <li>
                    <Link href="/">Home</Link>
                    {/* Always display the "Home" link */}
                </li>
        
                {user != null && (
                <li>
                    <Link href={`/profiles/${user.id}`}>Profile</Link>
                    {/* If the user is logged in, display the "Profile" link */}
                </li>
                )}

                {user == null ? (
                    <li>
                        <button onClick={() => void signIn()}>Log In</button>
                        {/* On clicking the "Log In" button, trigger the signIn function */}
                    </li>
                ) : (
                    <li>
                        <button onClick={() => void signOut()}>Log Out</button>
                        {/* On clicking the "Log Out" button, trigger the signOut function */}
                    </li>
                )}
            </ul>
        </nav>
    );
}
