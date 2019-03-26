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
        // one admin to rule them all
        factory(App\User::class)->states('admin')->create();
        factory(App\User::class)->states('user')->create();
        factory(App\User::class, 50)->create();
    }
}
