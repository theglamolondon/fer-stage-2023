<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use Illuminate\Http\Request;

class FactureController extends Controller
{
    public function index()
    {
        $factures = Facture::orderBy('id', 'desc')->get();
        return view('show', compact('factures'));
    }

    public function save(Request $request){

        $factures = new Facture;
        $factures->nom_client = $request->nom_client;
        $factures->date_facture = $request->date_facture;
        $factures->tva = $request->tva;
        $factures->montant_htt = $request->montant_htt;
        $factures->montant_ttc = $request->montant_ttc;
        $factures->ref_prod = $request->ref_prod;
        $factures->nom_prod = $request->nom_prod;
        $factures->validite_offre = $request->validite_offre;
        $factures->montant_lettre = $request->montant_lettre;
        $factures->qte_prod = $request->qte_prod;
        $factures->prix_unitaire_ht = $request->prix_unitaire_ht;
        $factures->save();
        return redirect()->back()->with('message', 'Facture creer avec succes');
    }
}
