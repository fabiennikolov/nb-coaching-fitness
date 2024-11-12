<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $superadminRole = Role::firstOrCreate(['name' => 'superadmin']);
        $adminRole = Role::firstOrCreate(['name' => 'admin']);

        // Create users
        $users = [
            [
                'name' => 'Alex',
                'email' => 'alex@alex.com',
                'password' => bcrypt('password'),
                'role' => 'superadmin',
                'additional_info' => 'i am skinny girl i want to gain muscle mass, not weight, but to look fit and healthy and energetic'
            ],
            [
                'name' => 'Alex Mech',
                'email' => 'alexmmech@gmail.com',
                'password' => bcrypt('password'),
                'role' => 'superadmin',
            ],
            [
                'name' => 'NBcoaching Fitness',
                'email' => 'nbcoachingfitness@gmail.com',
                'password' => bcrypt('password'),
                'role' => 'admin',
            ],
        ];

        // Loop through each user, create the user and assign the appropriate role
        foreach ($users as $userData) {
            $user = User::firstOrCreate(
                ['email' => $userData['email']],
                [
                    'name' => $userData['name'],
                    'password' => $userData['password'],
                ]
            );

            // Assign the role to the user
            $user->assignRole($userData['role']);
        }
    }
}
