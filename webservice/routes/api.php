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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/* Lista Posto e Graduação*/
Route::get('/patentes',['uses'=>'DesafioController@getPatentes'])->middleware('auth:api');


/*CRUD Militares*/
/* Listar */
Route::middleware('auth:api')->get('/cadastro', function (Request $request) {

  header('Acess-Control-Allow-Origin:*');
  $militares = App\Militar::all();
  return response()->json(['data'=>$militares,'status'=>true]);

});
/*Filtro - Retorna um registro especifico*/
Route::get('/filtraCadastro',['uses'=>'DesafioController@filtraMilitar'])->middleware('auth:api');

/* Insert */
Route::post('/cadastro',['uses'=>'DesafioController@insertMilitar'])->middleware('auth:api');
/*Update*/
Route::put('/cadastro',['uses'=>'DesafioController@updateMilitar'])->middleware('auth:api');
/*Delete*/
//Route::post('/deleta_cadastro',['uses'=>'DesafioController@deleteMilitar'])->middleware('auth:api');
Route::delete('/cadastro',['uses'=>'DesafioController@deleteMilitar'])->middleware('auth:api');

/*Login*/

Route::post('/login',function(Request $request){
  header('Acess-Control-Allow-Origin:*');
  $dados = $request->all();
  if(Auth::attempt(['login'=>$dados['login'],'password'=>$dados['password']])){

    return response()->json(['data'=>Auth::user(),'status'=>true]);
  }else {
    return response()->json(['data'=>'Login ou senha incorretos!','status'=>false]);
  }

});


Route::post('/usuario',['uses'=>'DesafioController@insertUsuario']);
