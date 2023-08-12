import {type NextPage } from "next";
import { NewTweetForm } from "~/components/NewTweetForm";// _app.tsx or _app.js



const Home: NextPage = () => {
  return <>
  <header className=" sticky top-0 z-10 border-b bg-white pt-2">
    <h1 className="mb-2 px-4 test-lg font-bold">Home</h1>
  </header>  
  <NewTweetForm />
  </>;

};

export default Home;
