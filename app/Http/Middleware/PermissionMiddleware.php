<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PermissionMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next, $permission)
    {
        if (!Auth::check()) {
            // Redirect to login if the user is not authenticated
            return redirect('/login');
        }

        $user = Auth::user();

        // Check if the user has any of the specified roles
        if (!$user->can($permission)) {
            // Optionally, redirect or abort with a 403 response
            abort(403, 'You dont have right permissions. Please contact the admin.');
        }

        return $next($request);
    }
}
