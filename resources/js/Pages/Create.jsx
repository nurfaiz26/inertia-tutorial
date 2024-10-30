import { useForm } from "@inertiajs/react";

const Create = () => {
    const { post, put, data, setData, errors, processing } = useForm({
        body: '',
        update: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/posts');
    }

    return (
        <>
            <h1 className="text-center font-bold text-xl mt-10">Create a New Post</h1>

            <div className="w-[50%] mx-auto mt-10">
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <textarea onChange={(e) => { setData('body', e.target.value) }} name="" rows={10} id="" className={`border-2 border-black/60 rounded-lg p-2 ring ring-transparent ${errors.body ? '!ring-red-500' : ''}`}></textarea>

                    <p className="mt-1 text-red-500 text-sm">{errors.body ?? ''}</p>

                    <button disabled={processing} className="bg-blue-500 p-2 rounded-lg hover:bg-blue-700 mt-4 transition-colors text-white" type="submit">Create Post</button>
                </form>
            </div>
        </>
    );
}

export default Create;
