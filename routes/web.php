<?php

use App\Http\Controllers\Admin\AdminUserController;
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

Route::get('/contact', function () {
    return Inertia::render('ContactPage');
});

Route::get('/nb-coaching', function () {
    $user = auth()->user();
    $clientTables = FitnessTable::where('user_id', $user?->id)->get();
    $userPermissions =  $user?->getAllPermissions()->pluck('name');
    return Inertia::render('NbCoaching/NbCoachingPage', ['tables' => $clientTables, 'userPermissions' => $userPermissions]);
});

Route::get('/nb-coaching/brochure/{id}', function ($id) {
    return Inertia::render('NbCoaching/NbCoachingBrochurePage', [
        'id' => $id
    ]);
})->middleware('auth');


Route::get('/dashboard', function () {
    $user = auth()->user();

    return Inertia::render('Dashboard', [
        'user' => $user,
        'permissions' => $user?->getAllPermissions()->pluck('name'),
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('/admin')->group(function () {
    Route::get('/', [AdminUserController::class, 'index'])->name('admin');
    Route::get('/user/{user}', [AdminUserController::class, 'show'])->name('admin.users.show');
    Route::get('/user/{user}/store-table', [AdminUserController::class, 'storeTable']);
})->middleware(['role:admin,superadmin']);

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
