<?php

use Illuminate\Database\Seeder;
use App\PostoGraduacao;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      // $this->call(UsersTableSeeder::class);
      PostoGraduacao::create([
        "abreviacao"=> 'Gen Ex',
        "descricao"=> 'General-de-Exército'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Gen Div',
        "descricao"=>'General-de-Divisão'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Gen Bda',
        "descricao"=>'General-de-Brigada'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Cel',
        "descricao"=>'Coronel'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'TC',
        "descricao"=> 'Tenente Coronel'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Maj',
        "descricao"=> 'Major'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Cap',
        "descricao"=>'Capitão'
      ]);
      PostoGraduacao::create([
        "abreviacao"=> '1º Ten',
        "descricao"=>'1º Tenente'
      ]);
      PostoGraduacao::create([
        "abreviacao"=> '2º Ten',
        "descricao"=>'2º Tenente'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Asp',
        "descricao"=>'Aspirante-a-Oficial'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Cad',
        "descricao"=>'Cadete'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'S Ten',
        "descricao"=>'Subtenente'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'1º Sgt',
        "descricao"=>'1º Sargento'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'2º Sgt',
        "descricao"=>'2º Sargento'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'3º Sgt',
        "descricao"=>'3º Sargento'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Cb',
        "descricao"=>'Cabo'
      ]);
      PostoGraduacao::create([
        "abreviacao"=>'Sd',
        "descricao"=>'Soldado'
      ]);

      echo "Registros Criados com Sucesso!";

    }
}
