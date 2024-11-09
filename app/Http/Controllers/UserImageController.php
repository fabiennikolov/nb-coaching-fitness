<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\UserImage;
use Carbon\Carbon;
use Illuminate\Http\Request;

class UserImageController extends Controller
{
    public function store(Request $request, User $user)
    {
        // Validate that images are uploaded
        $request->validate([
            'images*' => 'required|image|mimes:jpeg,png,jpg,gif,svg', // Validate each image
        ]);

        // Loop through each image and store them
        if ($request->hasFile('images')) {

            foreach ($request->file('images') as $image) {
                // Store the image in the 'public' disk
                $path = $image->store('image', 'public');

                // Create a new record in the user_images table
                UserImage::create([
                    'user_id' => $user->id,
                    'file_path' => $path,
                    'uploaded_at' => Carbon::now(), // Store the current time as uploaded_at
                ]);
            }
        }

        // Redirect back with success message
        if ($request->admin) {
            return redirect()->route('admin.users.show', $request->user->id)->with('success', 'Table added successfully');
        } else {
            return redirect()->route('nb-coaching')->with('success', 'Table added successfully');
        }
    }
}
