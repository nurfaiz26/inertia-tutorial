<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;


// posts routes
Route::get('/', [PostController::class, 'index']);
Route::resource('posts', PostController::class)->except('index');

