<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Josue',
            'email' => 'hola@programacion.com',
            'password' => bcrypt('123456')
        ]);
        User::create([
            'name' => 'polo',
            'email' => 'polo@programacion.com',
            'password' => bcrypt('123456')
        ]);
        User::create([
            'name' => 'Lalo',
            'email' => 'lalo@programacion.com',
            'password' => bcrypt('123456')
        ]);
    }
}