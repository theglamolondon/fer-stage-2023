<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factures', function (Blueprint $table) {
            $table->id();
            $table->string('nom_client');
            $table->Date('date_facture');
            $table->integer('tva');
            $table->integer('montant_htt');
            $table->integer('montant_ttc');
            $table->string('ref_prod')->unique();
            $table->string('nom_prod')->nullable();
            $table->string('validite_offre');
            $table->string('montant_lettre');
            $table->integer('qte_prod')->default(0);
            $table->integer('prix_unitaire_ht');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factures');
    }
}
