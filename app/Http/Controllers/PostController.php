<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $listCount = 5;
        $posts = Post::latest()->paginate($listCount);

        $currentIndex = ($listCount * (request()->query('page', 1) - 1));


        return inertia('Home', ['name' => 'Faiz', 'posts' => $posts, 'currentIndex' => $currentIndex]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store()
    {
        $fields = request()->validate([
            'body' => 'required|min:3'
        ]);

        Post::create($fields);

        return redirect('/');
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        return inertia('Show', ['post' => $post]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Post $post)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Post $post)
    {
        $fields = request()->validate([
            'body' => 'required|min:3'
        ]);

        $post->update(
            $fields,
        );

        return back()->with('update', 'The post updated!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect('/')->with('message', 'The post deleted!');
    }
}
