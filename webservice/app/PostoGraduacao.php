<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PostoGraduacao extends Model
{
  public $timestamps = false;
  protected $table = "posto_graduacao";

  protected $fillable = [
      'abreviacao', 'descricao'
  ];


}
