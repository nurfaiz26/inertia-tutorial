import { Link, usePage, Head } from "@inertiajs/react";
import { useState } from "react";

const Home = ({ name, posts, currentIndex }) => {
    const { flash } = usePage().props
    const { component } = usePage();

    const [flashMessage, setFlashMessage] = useState(flash.message);

    setTimeout(() => {
        setFlashMessage(null);
    }, 2000);

    return (
        <>
            <Head title={component} >
                <meta head-key="home" name="home" content="This is home page" />
            </ Head>

            {flashMessage && (
                <div className="absolute p-4 top-24 right-6 bg-red-500 rounded-lg text-white font-bold">{flashMessage}</div>
            )}

            <h1 className="mt-10 text-center text-xl font-bold">Hello {name}!</h1>

            <div className="mx-10">
                {posts.data.map((post, index) => (
                    <div key={post.id} className="border-b py-4">
                        <div className="text-sm text-black/60">
                            <span>Posted on: </span>
                            <span>{new Date(post.created_at).toLocaleTimeString()}</span>
                        </div>

                        <Link preserveScroll href={`/posts/${post.id}`} className="text-black text-lg"><span className="font-bold">{(index + 1 + currentIndex) + '. '}</span>{post.body}</Link>
                    </div>

                ))}

                <div className="my-10">
                    {posts.links.map((link, _) => (
                        link.url ? (
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ""}`}
                            />
                        ) : (
                            <span
                                key={link.label}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className="p-1 mx-1 text-black/40"
                            />
                        )
                    ))}
                </div>
            </div>

        </>
    );
}

export default Home;
