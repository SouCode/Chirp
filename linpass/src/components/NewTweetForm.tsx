import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "./Button";
import { ProfileImage } from "./ProfileImage";

function updateTextAreaSize(textArea: HTMLTextAreaElement) {
    textArea.style.height = "0";
    textArea.style.height = `${textArea.scrollHeight}px`;
}

export function NewTweetForm() {
    const session = useSession();
    const [inputValue, setInputValue] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null); // Add type union with null

    const inputRef = useCallback((textArea: HTMLTextAreaElement | null) => {
        if (textArea) {
            updateTextAreaSize(textArea);
            textAreaRef.current = textArea;
        }
    }, []);

    useLayoutEffect(() => {
        if (textAreaRef.current) {
            updateTextAreaSize(textAreaRef.current);
        }
    }, [inputValue]);

    if (session.status !== "authenticated") return null;

    return (
        <form className="flex flex-col gap-2 border-b px-4 py-2">
            <div className="flex gap-4">
                <ProfileImage src={session.data.user.image} /> 
                <textarea 
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" 
                    placeholder="What's Happening?"
                />
            </div>                
            <Button className="self-end">Tweet</Button>  
        </form>
    );
}
