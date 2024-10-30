// import Layout from "./Layout/Layout";

import { Link } from "@inertiajs/react";

const Home = ({ name }) => {
    return (
        <>
            <h1 className="mt-10 text-center text-xl font-bold">Hello {name}!</h1>

            <Link preserveScroll href="/" className="block mt-[1000px] mb-10 text-xl font-bold text-center">{new Date().toLocaleTimeString()}</Link>
        </>
    );
}

export default Home;
