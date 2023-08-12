import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "./Button";
import { ProfileImage } from "./ProfileImage";

export function NewTweetForm() {
    const session = useSession()
    const [inputValue, setInputValue] = useState("")

    if (session.status !== "authenticated") return

    return (
        <form className="flex flex-col gap-2 border-b px4 py-2">
            <div className="flex gap-4">
                <ProfileImage src={session.data.user.image} /> 
                <textarea 
                style={{ height: 0}}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" 
                placeholder="Whats Happening?"
                />
            </div>                
            <Button className="self-end">Tweet</Button>  
        </form>
    );
}