<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFitnessTableRequest;
use App\Models\FitnessTable;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;

class AdminUserController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        $users = User::whereDoesntHave('roles', function ($query) {
            $query->whereIn('name', ['admin', 'superadmin']);
        })->get();

        $users->each(function ($user) {
            $user->formatted_created_at = $user->created_at->diffForHumans();
            $user->formatted_updated_at = $user->updated_at->diffForHumans();
        });

        return Inertia::render('Admin/UsersPage', [
            'user' => $user,
            'usersData' => $users,
            'permissions' => $user->getAllPermissions()->pluck('name'),
        ]);
    }

    public function show(User $user)
    {
        $clientTables = FitnessTable::where('user_id', $user?->id)->get();

        $imagePaths = [];

        foreach ($user->images as $image) {
            $imageDetails['path'] = asset('storage/' . $image->file_path);
            $imageDetails['date'] = $image->uploaded_at->format('d.m.Y h:i:s');
            $imagePaths[] = $imageDetails;
        }

        return Inertia::render('Admin/UserShowPage', [
            'user' => $user,
            'tables' => $clientTables,
            'images' => $imagePaths,
            'allPermissions' => Permission::all()->pluck('name', 'id')
        ]);
    }
}
