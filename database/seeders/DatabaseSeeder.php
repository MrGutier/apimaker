<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Api;
use App\Models\Estudiante;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Schema;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Model::unguard();
        Schema::disableForeignKeyConstraints();

        // llamadas a otros ficheros de seed
        $this->call(UsersTableSeeder::class);
        // llamadas a otros ficheros de seed

        Api::factory(20)->create();
        $this->command->info('Tablas inicializadas con datos!');

        Model::reguard();
        Schema::enableForeignKeyConstraints();
    }

}
