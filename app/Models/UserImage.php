<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserImage extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'file_path', 'uploaded_at'];

    // Define the inverse of the relationship to User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // By default, Laravel does not handle `uploaded_at` automatically, so we need to make sure it is manually managed.
    public $timestamps = true;

    protected $dates = ['uploaded_at'];
}
