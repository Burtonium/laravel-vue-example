<?php

use App\Contract;
use Faker\Generator as Faker;
use Carbon\Carbon;

$factory->define(App\Contract::class, function (Faker $faker) {
  $contractLengthDays = collect([182, 365, 730, 1825])->random();
  $creationDate = $faker->dateTimeBetween('-5 years', 'now');
  $terminationDate = Carbon::parse($creationDate);
  $terminationDate->addDays($contractLengthDays);
  
  return [
    'contract_length_days' => $contractLengthDays,
    'created_at' => $creationDate,
    'termination_date' => $terminationDate->toDateTimeString(),
  ];
});

