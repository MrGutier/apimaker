<?php

use App\Http\Controllers\ApiController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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


Route::get('/', [ApiController::class, 'index'])->name('home');
Route::get('/listaapis', [ApiController::class, 'listaApis']);
Route::get('/listaapisprivadas', [ApiController::class, 'listaApisPrivadas'])->name('misapis')->middleware('auth');
Route::get('/listaapis/{id}', [ApiController::class, 'vistaApi'])->middleware('auth');
Route::get('/crearapi', [ApiController::class, 'crearApi'])->middleware('auth');
Route::post('/apistore', [ApiController::class, 'store'])->middleware('auth');
Route::get('/listaapis/{id}/editar', [ApiController::class, 'editarApi'])->middleware('auth');
Route::post('/apiupdate', [ApiController::class, 'update'])->middleware('auth');
Route::post('/apidelete', [ApiController::class, 'destroy'])->middleware('auth');

Route::post('/profile/add/member', [ProfileController::class, 'updateMembers'])->name('profile.update.members');

Route::post('/memberremove', [ProfileController::class, 'removeMembers'])->name('memberremove');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
