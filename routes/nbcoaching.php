<?php

use App\Models\FitnessTable;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/nb-coaching', function() {
    $userId = auth()->user()->id;
    $clientTables = FitnessTable::where('user_id', $userId)->get();
    return Inertia::render('NbCoachingPage', ['tables' => $clientTables]);
})->middleware('auth');

Route::get('/nb-coaching/brochure', function() {
    return Inertia::render('NbCoachingPage');
});
