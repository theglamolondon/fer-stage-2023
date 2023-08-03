<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;

    protected $fillable = ['reference', 'nom', 'quantite_en_stock'];
    public function bills(){
        return $this->belongsToMany(Bills::class);
    }
}
