// import Layout from "./Layout/Layout";

import { Link } from "@inertiajs/react";

const Home = ({ name, posts }) => {
    return (
        <>
            <h1 className="mt-10 text-center text-xl font-bold">Hello {name}!</h1>

            <div className="mx-10">
                {posts.map((post, index) => {
                    return (
                        <div key={post.id} className="border-b py-4">
                            <div className="text-sm text-black/60">
                                <span>Posted on: </span>
                                <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>

                            <Link preserveScroll href="#" className="text-black text-lg"><span className="font-bold">{index + 1 + '. '}</span>{post.body}</Link>
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default Home;
