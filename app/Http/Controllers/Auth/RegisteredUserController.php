<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'phone' => [
                'nullable',
                'string',
                'max:15',
                'regex:/^\+?[0-9]{10,15}$/',
            ],
            'instagram' => [
                'nullable',    // Instagram handle is optional
                'string',      // Ensure it's a string
                'max:255',     // Limit to 255 characters
            ],
            'additional_info' => [
                'nullable',    // This field is optional
                'string',      // Ensure it's a string
                'max:500',     // Set a maximum length (adjust based on your needs)
            ],

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'instagram' => $request->instagram,
            'additional_info' => $request->additional_info,
        ]);

        event(new Registered($user));

        return redirect(RouteServiceProvider::ADMIN);
    }
}
