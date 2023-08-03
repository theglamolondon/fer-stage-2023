<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('produit_factures', function (Blueprint $table) {
            $table->id();
            $table->string('reference');
            $table->string('nom');
            $table->double('qte');
            $table->double('prixUnitaire');
            $table->foreignId('idFacture')->references('id')->on('factures');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('produit_factures');
    }
};
