<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Produit;

class ProduitController extends Controller
{
    public function list(){
        try {
            $allProducts = Produit::all();

            return response()->json(['code'=>200,'products' => $allProducts]);
        } catch (\Throwable $th) {
            return response()->json(['code'=>400, 'message'=>'no product or something bad happened']);
        }
    }

    public function add(Request $request){
        try {
            $product = new Produit();
            $product->reference = $request->reference;
            $product->nom = $request->nom;
            $product->qte = floatval($request->qte);
            $product->save();

            return response()->json(['code'=>200,'message' => 'product created']);
        } catch (\Throwable $th) {
            return response()->json(['code'=>400, 'message'=>$th]);
        }
    }

//    public function getOne(Request $request, $id){
//        try {
//            $product = Produit::where('id',$id)->first();
//
//            return response()->json(['code'=>200,'products' => $product]);
//        } catch (\Throwable $th) {
//            return response()->json(['code'=>400, 'message'=>'no product or something bad happened']);
//        }
//    }

//    public function update(){
//        try {
//            $product = new Product();
//            $product->reference = $request->reference;
//            $product->nom = $request->nom;
//            $product->qte = $request->qte;
//            $product->save();
//
//            return response()->json(['code'=>200,'message' => 'product created']);
//        } catch (\Throwable $th) {
//            return response()->json(['code'=>400, 'message'=>'no product or something bad happened']);
//        }
//    }

//    public function delete(){
//        try {
//            $product = new Product();
//            $product->reference = $request->reference;
//            $product->nom = $request->nom;
//            $product->qte = $request->qte;
//            $product->save();
//
//            return response()->json(['code'=>200,'message' => 'product created']);
//        } catch (\Throwable $th) {
//            return response()->json(['code'=>400, 'message'=>'no product or something bad happened']);
//        }
//    }
}
