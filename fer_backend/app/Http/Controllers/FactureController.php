<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Facture;
use App\Models\ProduitFacture;

class FactureController extends Controller
{
    public function list(){
        try {
            $allInvoices = Facture::all();

            return response()->json(['code'=>200,'factures' => $allInvoices]);
        } catch (\Throwable $th) {
            return response()->json(['code'=>400, 'message'=>'no factures or something bad happened']);
        }
    }

    public function add(Request $request){
        try {
            $invoice = new Facture();
            $invoice->NomClient = $request->nom;
            $invoice->TVA = floatval($request->tva);
            $invoice->MontantHT = floatval($request->mHT);
            $invoice->MontantTTC = floatval($request->mTTC);
            $invoice->Validite = $request->validite;
            $invoice->MONTANTLETTRES = $request->montLet;
//
            $invoice->save();



            return response()->json(['code'=>200,'facture' => $invoice]);
        } catch (\Throwable $th) {
            return response()->json(['code'=>400, 'message'=>'no factures or something bad happened']);
        }
    }

    public function getOne(){

    }

    public function update(){

    }

    public function delete(){

    }
}
