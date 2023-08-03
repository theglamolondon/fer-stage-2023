<?php

namespace Database\Factories;

use App\Models\Customers;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Bills>
 */
class BillsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'customer_id'=>Customers::factory(),
            'date_facture' => $this->faker->dateTimeThisMonth(),
            'tva' => 0.18,
            'montant_ht' => $this->faker->randomFloat(2, 100, 1000),
            'montant_ttc' => function (array $attributes) {
                return $attributes['montant_ht'] * (1 + $attributes['tva']);
            },
            'produits' => $this->faker->text(200),
            'offre' => $this->faker->text(100),
            'montant_en_lettre' => $this->faker->text(50),
        ];
    }
}
