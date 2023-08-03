<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Products::all();    {
            if($products->count()==0)
            {
                return response()->json(['message'=>'Aucun produit trouvé'],404);
            }
            return response()->json($products);
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
        $products = Products::create([
            'reference' => $request->reference,
            'nom' => $request->nom,
            'quantite' => $request->quantite,
            'unit_price_ht'=>floatval($request->prix)
        ]);
        if (!$products){
            return response()->json([
                "message" => 'erreur lors de la creation du produit'
            ]);
        }
        return response()->json([
            "message" => 'produit créée'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, Products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        //
    }
}
