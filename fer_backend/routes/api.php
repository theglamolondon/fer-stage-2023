<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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


Route::get('/listProducts',[\App\Http\Controllers\ProduitController::class, 'list']);
Route::post('/addProduct',[\App\Http\Controllers\ProduitController::class, 'add']);
Route::get('/listFactures',[\App\Http\Controllers\FactureController::class, 'list']);
Route::post('/addFacture',[\App\Http\Controllers\FactureController::class, 'add']);
//Route::get('/listFactures',[\App\Http\Controllers\FactureController::class, 'list']);
Route::post('/addProduitFacture',[\App\Http\Controllers\ProduitFactureController::class, 'add']);
//Route::get('/edit/{id}',[\App\Http\Controllers\ProduitController::class, 'edit']);
