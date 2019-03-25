<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    public $timestamps = true;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * The players that belong to the team.
     */
    public function players()
    {
        return $this->belongsToMany('App\Player', 'contracts')->withPivot([
            'created_at',
            'termination_date',
            'contract_length_days'
        ])->as('contract');
    }
}
