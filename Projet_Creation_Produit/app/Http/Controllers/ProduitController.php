<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;

class ProduitController extends Controller
{
    public function index()
    {
        $produits = Produit::all()->get();
        return view('show', compact('produits'));
    }

    public function save(Request $request){

        $produits = new Produit;
        $produits->ref_prod = $request->ref_prod;
        $produits->nom_prod = $request->nom_prod;
        $produits->qte_stock = $request->qte_stock;
        $produits->save();
        return redirect()->back()->with('message', 'Produit creer avec succes');
    }
}
