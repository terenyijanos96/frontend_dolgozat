<?php

namespace App\Http\Controllers;

use App\Models\Teszt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztController extends Controller
{
    public function index()
    {
        $teszt = response()->json(Teszt::all());
        return $teszt;
    }

    public function teszt_kategoriakkent($id)
    {
        return DB::select(
            'select * from teszt where kategoriaId = ?',
            [$id]
        );
    }
}
