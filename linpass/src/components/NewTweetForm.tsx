import { Button } from "./Button";
export function NewTweetForm() {
    return (
        <form className="flex flex-col gap-2 border-b px4 py-2">
            <div className="flex gap-4">
                <textarea 
                    className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none" 
                    placeholder="Whats Happening?"
                />
            </div>                
            <Button className="self-end">Tweet</Button>  
        </form>
    );
}