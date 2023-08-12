// Import necessary dependencies
import { type Session } from "next-auth";       // Type definition for a session from next-auth
import { SessionProvider } from "next-auth/react";  // React context provider for next-auth sessions
import { type AppType } from "next/app";   // Type definition for Next.js custom App
import { api } from "~/utils/api";   // Import the API utility you've set up
import "~/styles/globals.css";  // Global styles for your application
import Head from "next/head";  // Component for appending elements to the <head> of the page
import { SideNav } from "~/components/SideNav";

// Define your custom App component which wraps around all other Next.js pages
const MyApp: AppType<{ session: Session | null }> = ({
  Component,  // The current page being rendered
  pageProps: { session, ...pageProps },  // Props passed to the current page
}) => {
  return (
    // Wrap everything in a SessionProvider so child components can access session data
    <SessionProvider session={session}>
      <Head>
        {/* Set global meta data for your application */}
        <title>Twitter Clone</title>
        <meta name="description" content="This is a twitter clone by Ronsou" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Main layout of the application */}
      <div className="w-full flex items-start sm:pr-4">
        {/* Side navigation bar */}
        <SideNav />
        {/* Main content area */}
        <div className="min-h-screen flex-grow border-x">
          {/* Render the current page */}
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
};

// Wrap the App component with the api provider from your utility
export default api.withTRPC(MyApp);

// This is the root of the entire application and will be used for every page in your Next.js app.