<?php

use App\Models\Teszt;
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
        Schema::create('teszt', function (Blueprint $table) {
            $table->id();
            $table->string('kerdes');
            $table->string('v1');
            $table->string('v2');
            $table->string('v3');
            $table->string('v4');
            $table->string('helyes');
            $table->foreignId('kategoriaId')->references('id')->on('kategoria');
            $table->timestamps();
        });

        Teszt::create([
            'kerdes' => 'A papírt milyen szelektív kukába gyűjtjük?',
            'v1' => 'kék',
            'v2' => 'piros',
            'v3' => 'szürke',
            'v4' => 'sárga',
            'helyes' => 'kék',
            'kategoriaId' => 1
        ]);

        Teszt::create([
            'kerdes' => 'Mik komposztálhatók?',
            'v1' => 'zöldség',
            'v2' => 'fatörzs',
            'v3' => 'fém',
            'v4' => 'műanyag',
            'helyes' => 'zöldség',
            'kategoriaId' => 1
        ]);

        Teszt::create([
            'kerdes' => 'Melyik bolygón van élet',
            'v1' => 'Föld',
            'v2' => 'Jupiter',
            'v3' => 'Uránusz',
            'v4' => 'Merkúr',
            'helyes' => 'Föld',
            'kategoriaId' => 2
        ]);

        Teszt::create([
            'kerdes' => 'Mi a hidrogén jele?',
            'v1' => 'H',
            'v2' => 'Mg',
            'v3' => 'Ag',
            'v4' => 'He',
            'helyes' => 'H',
            'kategoriaId' => 2
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teszt');
    }
};
