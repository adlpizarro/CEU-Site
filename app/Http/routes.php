<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/partials/home', function () {
    return view('/partials/main/home');
});

Route::get('/partials/news', function () {
    return view('/partials/main/news');
});

Route::any('{all}', 'MainController@index')->where('all', '.*');
