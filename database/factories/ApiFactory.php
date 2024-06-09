<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Api>
 */
class ApiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre' => $this->faker->name(),
            'descripcion' => $this->faker->text(),
            'archivo' => $this->faker->text(),
            'publica' => $this->faker->boolean(),
            'publicada' => $this->faker->boolean(),
            'user_id' => random_int(1, 20),
        ];
    }
}
