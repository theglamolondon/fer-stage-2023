<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProduitFacture;
class ProduitFactureController extends Controller
{
    public function list(){

    }

    public function add(Request $request){
        try {
            $product = new ProduitFacture();
            $product->reference = $request->reference;
            $product->nom = $request->nom;
            $product->qte = floatval($request->qte);
            $product->prixUnitaire = floatval($request->prixUnitaire);
            $product->idFacture = floatval($request->idFacture);
            $product->save();

            return response()->json(['code'=>200,'message' => 'product related to Facture created']);
        } catch (\Throwable $th) {
            return response()->json(['code'=>400, 'message'=>$th]);
        }
    }

    public function getOne(){

    }

    public function update(){

    }

    public function delete(){

    }
}
