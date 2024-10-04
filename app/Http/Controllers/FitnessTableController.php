<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFitnessTableRequest;
use App\Models\FitnessTable;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FitnessTableController extends Controller
{
    /**
     * Display a listing of the fitness entries.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // Fetch all fitness table records
        $fitnessEntries = FitnessTable::all();
        return response()->json($fitnessEntries);
    }

    /**
     * Store a newly created fitness entry in the storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreFitnessTableRequest $request, User $user)
    {
        // Create a new fitness entry
        $fitnessEntry = FitnessTable::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'description' => $request->description,
            'url' => $request->url,

        ]);

        return redirect()->route('admin.users.show', $user->id)->with('success', 'Table added successfully');
    }

    /**
     * Display the specified fitness entry.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // Fetch a specific fitness entry by id
        $fitnessEntry = FitnessTable::find($id);

        if (!$fitnessEntry) {
            return response()->json(['message' => 'Fitness entry not found'], 404);
        }

        return response()->json($fitnessEntry);
    }

    /**
     * Update the specified fitness entry in the storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Validate incoming request data
        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'type' => 'sometimes|string|max:255',
            'duration' => 'sometimes|integer',
            'calories' => 'sometimes|integer',
        ]);

        // Find the fitness entry to update
        $fitnessEntry = FitnessTable::find($id);

        if (!$fitnessEntry) {
            return response()->json(['message' => 'Fitness entry not found'], 404);
        }

        // Update the fitness entry with the validated data
        $fitnessEntry->update($validatedData);

        return response()->json($fitnessEntry);
    }

    /**
     * Remove the specified fitness entry from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // Find the fitness entry to delete
        $fitnessEntry = FitnessTable::find($id);

        if (!$fitnessEntry) {
            return response()->json(['message' => 'Fitness entry not found'], 404);
        }

        // Delete the fitness entry
        $fitnessEntry->delete();

        return response()->json(['message' => 'Fitness entry deleted successfully']);
    }

    public function userFitnessEntries()
    {
        // Get the currently authenticated user
        $user = Auth::user();

        // Fetch all fitness table records for the current user
        $fitnessEntries = FitnessTable::where('user_id', $user->id)->get();

        return response()->json($fitnessEntries);
    }
}
