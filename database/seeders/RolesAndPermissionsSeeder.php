<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'register users',
            'create table',
            'edit table',
            'read table',
            'delete table',
            'upload image',
            'delete image',
            'read brochure'
        ];

        // Create permissions
        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Define roles and their corresponding permissions
        $rolesWithPermissions = [
            'superadmin' => Permission::all(),
            'admin' => [
                'register users',
                'create table',
                'edit table',
                'read table',
                'delete table',
                'upload image',
                'delete image',
                'read brochure'
            ],
            'registered_user' => [],
            'client' => [
                'read table',
                'edit table',
                'upload image',
                'read brochure'
            ],
        ];

        // Create roles and assign permissions
        foreach ($rolesWithPermissions as $roleName => $rolePermissions) {
            $role = Role::firstOrCreate(['name' => $roleName]);
            if ($roleName === 'superadmin') {
                $role->syncPermissions($rolePermissions); // Sync all permissions to superadmin
            } else {
                $role->syncPermissions($rolePermissions);
            }
        }
    }
}
