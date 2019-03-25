<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Player extends Model
{
    public $timestamps = true;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name',
    ];

    /**
     * The players that belong to the team.
     */
    public function teams()
    {
        return $this->belongsToMany('App\Team', 'contracts')->withPivot([
            'created_at',
            'termination_date',
            'contract_length_days'
        ])->as('contract');
    }

    public function currentTeam() 
    {
        return $this->teams()->wherePivot('termination_date', '>', Carbon::today());
    }
}
