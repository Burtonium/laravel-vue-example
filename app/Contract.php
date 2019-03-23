<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class Contract extends Pivot
{
    protected $table = 'contracts';
    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;



    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'player_id', 'team_id',
    ];

    /**
     * The player that signed the contract
     */
    public function player() 
    {
        return $this->belongsToOne('App\Player');
    }

    /**
     * The team to which the player was signed to
     */
    public function team() 
    {
        return $this->belongsToOne('App\Team');
    }
}