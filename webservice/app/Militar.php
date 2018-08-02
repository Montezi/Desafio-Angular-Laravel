<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Militar extends Model
{
  public $timestamps = false;
  protected $fillable = ['nome','data_nascimento','sv_obrigatorio','id_posto_grad','identidade'];

  protected $guarded = ['id'];
  
  protected $table = 'militares';

}
