<?php

use App\Http\Controllers\API\ActividadController;
use App\Http\Controllers\API\CicloController;
use App\Http\Controllers\API\CompetenciaController;
use App\Http\Controllers\API\ReconocimientoController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ProyectoController;
use App\Http\Controllers\API\FamiliaProfesionalController;
use App\Http\Controllers\API\IdiomaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Psr\Http\Message\ServerRequestInterface;
use Tqdev\PhpCrudApi\Api;
use Tqdev\PhpCrudApi\Config\Config;
use App\Http\Controllers\API\CurriculoController;
use App\Http\Controllers\API\EmpresaController;
use App\Http\Controllers\API\TokenController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\API\CountController;
use App\Http\Controllers\ApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/apidata/{id}', [ApiController::class, 'getApiData']);
