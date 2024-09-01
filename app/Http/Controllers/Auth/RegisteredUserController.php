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
                'nullable',
                'string',
                'max:255',
                'regex:/^(http(s)?:\/\/)?(www\.)?instagram\.com\/[A-Za-z0-9._%-]+\/?$/',
            ],
            'additional_info' => [
                'nullable',
                'string',
                'max:500',
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

        return redirect(RouteServiceProvider::HOME);
    }
}
