<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customers extends Model
{
    use HasFactory;

    protected $fillable = ['nom','prenom','adresse','telephone','email'];
    public function bills (){
        return $this->hasMany(Bills::class);
    }
}
