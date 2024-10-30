<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     sleep(2);

//     return Inertia::render('Home', ['name' => 'Faiz']);
// });

// Route::inertia('/', 'Home');

// posts routes
Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except('index');

