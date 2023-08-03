<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bills extends Model
{
    use HasFactory;

    public function products(){
        return $this->hasMany(Products::class);
    }

    public function customers(){
        return $this->belongsTo(Customers::class);
    }
}
