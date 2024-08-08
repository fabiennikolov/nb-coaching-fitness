<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FitnessTable extends Model
{
    use HasFactory;

    protected $table = 'fitness_tables';

    protected $guarded = ['id'];

}
