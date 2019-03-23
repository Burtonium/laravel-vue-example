<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group(['prefix' => 'v1'], function () {
    Route::resource('players', 'PlayerController')->only([
        'index', 'show'
    ]);

    Route::resource('teams', 'TeamController')->only([
        'index', 'show'
    ]);

    Route::resource('contracts', 'ContractController')->only([
        'index', 'show'
    ]);

    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('/user', function (Request $request) {
            return response()->json($resquest->user());
        });

        Route::resource('players', 'PlayerController')->except([
            'index', 'show', 'create'
        ]);
        
        Route::resource('teams', 'TeamsController')->except([
            'index', 'show', 'create'
        ])->middleware('admin');

        Route::resource('contracts', 'ContractController')->except([
            'index', 'show', 'create'
        ])->middleware('admin');
    });
});


