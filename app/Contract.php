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
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'termination_date' => 'date',
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

    public function scopeActive($query) 
    {
        return $query->whereNull('termination_date')->orWhere('termination_date', '>', Carbon::today());
    }
}
