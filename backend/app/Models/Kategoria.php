<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kategoria extends Model
{
    use HasFactory;

    protected $table = 'kategoria';

    protected $fillable = [
        'kategorianev'
    ];

    public function teszt()
    {
        return $this->belongsTo(Kategoria::class, 'kategoriaId', 'id');
    }
}
