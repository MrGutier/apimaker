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
        Schema::create('competencias', function (Blueprint $table) {
            $table->id();
            $table->string('nombre', 100);
            $table->string('color', 30)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('competencias');
    }
};

// Schema::create('estudiantes', function (Blueprint $table) {
//             $table->id();
//             $table->string('nombre', 32);
//             $table->string('apellidos', 32);
//             $table->string('direccion');
//             $table->integer('votos')->nullable();
//             $table->boolean('confirmado')->default(false);
//             $table->timestamps();
//         });