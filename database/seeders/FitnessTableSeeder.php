<?php

namespace Database\Seeders;

use App\Models\FitnessTable;
use App\Models\User;
use Illuminate\Database\Seeder;

class FitnessTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Get all users with the "client" role
        $clients = User::role('client')->get();

        foreach ($clients as $client) {
            // Create 2-3 fitness tables for each user
            $tables = [
                [
                    'name' => 'Morning Workout',
                    'url' => 'https://docs.google.com/spreadsheets/d/14AnrKUdcqbtoaONVJqpJsQocnMLJVg9qBCl6keeeGlc/edit?gid=0#gid=0',
                ],
                [
                    'name' => 'Evening Yoga',
                    'url' => 'https://docs.google.com/spreadsheets/d/1dOAwmlgXcA3T3Gnd--E_J1K88MbSw7iXFBaaeNaWskU/edit',
                ],
                [
                    'name' => 'Cardio Blast',
                    'url' => 'https://docs.google.com/spreadsheets/d/1dOAwmlgXcA3T3Gnd--E_J1K88MbSw7iXFBaaeNaWskU/edit',
                ],
            ];
 
            foreach (array_slice($tables, 0, rand(2, 3)) as $tableData) {
                FitnessTable::create(array_merge($tableData, ['user_id' => $client->id]));
            }
        }
    }
}