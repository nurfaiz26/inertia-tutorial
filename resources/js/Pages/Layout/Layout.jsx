import { Link } from "@inertiajs/react";
import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <nav className="flex w-full justify-between items-center bg-indigo-900 px-12 py-2">
                    <Link className="text-white text-lg font-semibold py-2 px-4 hover:bg-indigo-700 rounded-md" href="/">Home</Link>
                    <Link className="text-white text-lg font-semibold py-2 px-4 hover:bg-indigo-700 rounded-md" href="/posts/create">Create</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>

            </footer>
        </>
    )
}

export default Layout;
