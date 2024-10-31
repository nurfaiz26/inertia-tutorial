import { useForm, usePage, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";

const Show = ({ post }) => {
    const { patch, delete: hapus, data, setData, errors, processing } = useForm({
        body: post.body,
    });

    const { component } = usePage();
    const { flash } = usePage().props;

    const [flashUpdate, setFlashUpdate] = useState(flash.update);

    useEffect(() => {
        setFlashUpdate(flash.update);
      }, [flash]);

    setTimeout(() => {
        setFlashUpdate(null);
    }, 2000);

    function handleSubmit(e) {
        e.preventDefault();

        confirm('Update data?') ? patch('/posts/' + post.id) : null
    }

    function handleDelete(e) {
        e.preventDefault();

        confirm('Delete data?') ? hapus('/posts/' + post.id) : null
    }

    return (
        <>
            <Head title={component} >
                <meta head-key="show" name="show" content="This is show page" />
            </ Head>

            {flashUpdate && <div className="absolute top-24 right-6 p-4 bg-green-500 rounded-lg text-white font-bold">{flashUpdate}</div>}

            <h1 className="text-center font-bold text-xl mt-10">Show a Post</h1>

            <div className="w-[50%] mx-auto mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <textarea value={data.body} onChange={(e) => { setData('body', e.target.value) }} name="" rows={10} id="" className={`border-2 border-black/60 rounded-lg p-2 ring ring-transparent ${errors.body ? '!ring-red-500' : ''}`}></textarea>

                    <p className="mt-1 text-red-500 text-sm">{errors.body ?? ''}</p>

                    <div className="flex flex-col md:flex-row w-full justify-between">
                        <button disabled={processing} className="md:min-w-[160px] bg-blue-500 p-2 rounded-lg hover:bg-blue-700 mt-4 transition-colors text-white" type="submit">Update Post</button>

                        <button disabled={processing} className="md:min-w-[160px]  bg-red-500 p-2 rounded-lg hover:bg-red-700 mt-4 transition-colors text-white" onClick={handleDelete}>Delete Post</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Show;
