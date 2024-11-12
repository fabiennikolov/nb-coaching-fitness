<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class ClientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $clientRole = Role::firstOrCreate(['name' => 'client']);

        // Create some users with the "client" role
        $users = [
            [
                'name' => 'John Doe',
                'email' => 'john@example.com',
                'password' => Hash::make('password123'), // change password as necessary
                'additional_info' => 'i want to be able to run for more time and to build stamina'
            ],
            [
                'name' => 'Jane Smith',
                'email' => 'jane@example.com',
                'password' => Hash::make('password123'),
                'additional_info' => 'i am skinny girl i want to gain muscle mass, not weight, but to look fit and healthy and energetic'
            ],
            [
                'name' => 'Robert Brown',
                'email' => 'robert@example.com',
                'password' => Hash::make('password123'),
                'additional_info' => 'i want to lose weight i am a man that is 25 years old and currently overweight mny height is 180cm and my weight is 120kg.'
            ],
        ];

        foreach ($users as $userData) {
            $user = User::create($userData);
            $user->assignRole($clientRole);
        }
    }
}
