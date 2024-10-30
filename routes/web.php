<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(2);

    return Inertia::render('Home', ['name' => 'Faiz']);
});

// Route::inertia('/', 'Home');

Route::get('about', function () {
    return inertia('About/About');
});

