<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateBillsRequest;
use App\Models\Bills;
use Illuminate\Http\Request;

class BillsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bills = Bills::all();    {
        if($bills->count()==0)
        {
            return response()->json(['message'=>'Aucune facture trouvée'],404);
        }
        return response()->json($bills);
    }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $bills = Bills::create(
            [
                'nom_client'=>$request->nom,
                'montant_ht'=>$request->montant,
                'customer_id'=>$request->id,
                'offre'=>$request->offre,
            ]
        );
        if (!$bills){
            return response()->json([
                "message" => 'erreur lors de la creation du facture'
            ]);
        }
        return response()->json([
            "message" => 'facture créée'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Bills $bills)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bills $bills)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBillsRequest $request, Bills $bills)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bills $bills)
    {
        //
    }
}
