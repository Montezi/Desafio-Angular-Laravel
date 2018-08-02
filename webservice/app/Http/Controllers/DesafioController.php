<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests;
use App\User;
use App\Militar;
use App\PostoGraduacao;

class DesafioController extends Controller
{
  public function insertUsuario(Request $request)
  {
    header('Acess-Control-Allow-Origin:*');
    $dados = $request->all();
    $dados ['api_token']= str_random(60);

    if(!User::where('login',$dados['login'])->count()){

      $dados['password'] = bcrypt($dados['password']);
      $user = User::create($dados);
      return response()->json(['data'=>$user,'status'=>true]);

    }
    return response()->json(['data'=>'Este login já está cadastrado','status'=>false]);

  }

  public function getPatentes(Request $request)
  {

    header('Acess-Control-Allow-Origin:*');

    $patentes = PostoGraduacao::all();;

    return response()->json(['data'=>$patentes,'status'=>true]);
  }

  public function insertMilitar(Request $request)
  {

    header('Acess-Control-Allow-Origin:*');
    $dados = $request->all();
    if(!Militar::where('identidade',$dados['identidade'])->count()){
      $militar = Militar::create($dados);
      return response()->json(['data'=>"Dados cadastrados com sucesso! ",'status'=>true]);

    }
    return response()->json(['data'=>'Este nº de identidade já está cadastrado!','status'=>false]);

  }
   public function getMilitar () {

    header('Acess-Control-Allow-Origin:*');
    $militares = Militar::all();
    return response()->json(['data'=>$militares,'status'=>true]);

  }


  public function filtraMilitar(Request $request)
  {
      $id =$request->id;
      $militar = Militar::findOrFail($id);
      return response()->json(['data'=>$militar,'status'=>true]);
  }

  public function updateMilitar(Request $request)
    {
        $id =$request->id;
        $militar = Militar::findOrFail($id);
        $militar->nome        = $request->nome;
        $militar->data_nascimento = $request->data_nascimento;
        $militar->sv_obrigatorio  = $request->sv_obrigatorio;
        $militar->id_posto_grad   = $request->id_posto_grad;
        $militar->identidade = $request->identidade;
        $militar->save();
        return response()->json(['data'=>'Dados atualizados com Sucesso!','status'=>true]);
    }

    public function deleteMilitar(Request $request)
    {
        $id =$request->id;
        $militar = Militar::findOrFail($id);
        $militar->delete();
        return response()->json(['data'=>'Dados excluidos com sucesso!','status'=>true]);
    }


}
