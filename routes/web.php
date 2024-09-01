<?php

use App\Http\Controllers\ProfileController;
use App\Models\FitnessTable;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {

    $user = auth()->user();

    return Inertia::render('LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'permissions' => $user ? $user->getAllPermissions()->pluck('name') : [], // Pass permissions if authenticated, empty array otherwise
    ]);

});

Route::get('/contact', function() {
    return Inertia::render('ContactPage');
});

Route::get('/nb-coaching', function() {
    $userId = auth()->user()->id;
    $clientTables = FitnessTable::where('user_id', $userId)->get();
    return Inertia::render('NbCoaching/NbCoachingPage', ['tables' => $clientTables]);
})->middleware('auth');

Route::get('/nb-coaching/brochure', function() {
    return Inertia::render('NbCoaching/NbCoachingBrochurePage');
});

Route::get('/dashboard', function () {
    $user = auth()->user();
    
    return Inertia::render('Dashboard', [
        'user' => $user,
        'permissions' => $user->getAllPermissions()->pluck('name'),
    ]);

})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin', function () {
    $user = auth()->user();
    
    $users = User::whereDoesntHave('roles', function ($query) {
        $query->whereIn('name', ['admin', 'superadmin']);
    })->get();

    $users->each(function ($user) {
        $user->formatted_created_at = $user->created_at->diffForHumans();
        $user->formatted_updated_at = $user->updated_at->diffForHumans();
    });
    

    return Inertia::render('AdminPage', [
        'user' => $user,
        'usersData' => $users,
        'permissions' => $user->getAllPermissions()->pluck('name'),
    ]);
})->middleware(['role:admin,superadmin'])->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
