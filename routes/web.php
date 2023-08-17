<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth/login');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::group(['middleware' => 'auth'], function () {
    Route::get('/users', function () {
        return view('users.index');
    });




    Route::get('/user', [App\Http\Controllers\UserController::class, 'index']) ->name('user.index');
    Route::post('/userSave', [App\Http\Controllers\UserController::class, 'save']);
    Route::post('/userEdit', [App\Http\Controllers\UserController::class, 'edit']);
    Route::post('/userUpdate', [App\Http\Controllers\UserController::class, 'update']);


    Route::get('/task', [App\Http\Controllers\TaskController::class, 'index']) ->name('task.index');
    Route::post('/taskSave', [App\Http\Controllers\TaskController::class, 'save']);
    Route::post('/taskEdit', [App\Http\Controllers\TaskController::class, 'edit']);
    Route::post('/taskUpdate', [App\Http\Controllers\TaskController::class, 'update']);
    Route::get('/tasks', function () {
        return view('tasks.index');
    });
});
