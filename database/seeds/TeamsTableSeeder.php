<?php

use Illuminate\Database\Seeder;
use App\Team;

class TeamsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $players = factory(App\Player::class, 200)->create();
        $teams = factory(App\Team::class, 10)->create();
        $players->each(function ($p) use ($teams) {
            $p->teams()->attach(
                $teams->random()->id,
                factory(App\Contract::class)->make()->toArray()
            );
        });
    }
}
