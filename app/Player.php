<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
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

    /**
     * Current team the player is signed to
     */
    public function currentTeam() 
    {
        
    }
}
