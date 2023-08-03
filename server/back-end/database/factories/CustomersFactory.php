<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Customers>
 */
class CustomersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nom = 'isaac';
        return [
            'nom'=>$nom,
            'prenom'=> 'prenom',
            'adresse'=>'babi',
            'telephone'=> '0123456789',
            'email'=> $this->faker->email(),
        ];
    }
}
