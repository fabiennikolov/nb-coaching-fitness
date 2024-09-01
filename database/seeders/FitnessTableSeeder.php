<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
                     'url' => 'https://example.com/morning-workout',
                 ],
                 [
                     'name' => 'Evening Yoga',
                     'url' => 'https://example.com/evening-yoga',
                 ],
                 [
                     'name' => 'Cardio Blast',
                     'url' => 'https://example.com/cardio-blast',
                 ],
             ];
 
             foreach (array_slice($tables, 0, rand(2, 3)) as $tableData) {
                 FitnessTable::create(array_merge($tableData, ['user_id' => $client->id]));
             }
         }
    }
}
