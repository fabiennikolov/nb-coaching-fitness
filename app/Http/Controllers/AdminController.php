<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        // Get users without 'admin' or 'superadmin' roles
        $users = User::whereDoesntHave('roles', function ($query) {
            $query->whereIn('name', ['admin', 'superadmin']);
        })->get();

        return Inertia::render('AdminPage', [
            'user' => $user,
            'usersData' => $users,
            'permissions' => $user->getAllPermissions()->pluck('name'),
        ]);
    }

    public function dashboard()
    {
        $user = auth()->user();
        
        return Inertia::render('Dashboard', [
            'user' => $user,
            'permissions' => $user->getAllPermissions()->pluck('name'),
        ]);
    }
}
