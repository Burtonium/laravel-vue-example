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
    Route::post('login', 'API\PassportController@login');
    Route::post('register', 'API\PassportController@register');

    Route::resource('players', 'API\PlayerController')->only([
        'index', 'show'
    ]);

    Route::resource('teams', 'API\TeamController')->only([
        'index', 'show'
    ]);

    Route::resource('contracts', 'API\ContractController')->only([
        'index', 'show'
    ]);

    Route::group(['middleware' => ['auth:api']], function () {
        Route::get('/user', function (Request $request) {
            return response()->json($request->user());
        });

        Route::resource('players', 'API\PlayerController')->except([
            'index', 'show', 'create'
        ]);
        
        Route::resource('teams', 'API\TeamsController')->except([
            'index', 'show', 'create'
        ])->middleware('admin');

        Route::resource('contracts', 'API\ContractController')->except([
            'index', 'show', 'create'
        ])->middleware('admin');
    });
});


