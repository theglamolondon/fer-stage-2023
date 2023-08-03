<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    use HasFactory;

    protected $fillable = ['NomClient', 'TVA', 'MontantHT','MontantTTC','Validite','MONTANTLETTRES'];

    protected $casts = [
        'created' => 'datetime',
    ];
}
