<?php

namespace Database\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApisTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        DB::table('apis')->truncate();
        for($i=0;$i<50; $i++) {
            DB::table('apis')->insert([
                'nombre' => 'Api '.$i,
                'descripcion' => 'Descripción de la Api '.$i,
                'archivo' => 'archivo'.$i.'.pdf',
                'publica' => $i%2==0,
                'publicada' => $i%2==0,
                'user_id' => '1',
            ]);
        }
    }
}
