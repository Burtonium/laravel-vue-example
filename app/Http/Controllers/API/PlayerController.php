<?php

namespace App\Http\Controllers\API;

use App\Player;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePlayerRequest;

class PlayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $players = Player::with(['currentTeam' => function ($query) {
            $query->select(['name', 'teams.id']);
        }])->get();

        $playerTranformer = function ($player) {
            $team = $player->currentTeam->first();
            $filtered = array_filter(
                $player->toArray(),
                function ($key) { return $key !== 'current_team'; }, 
                ARRAY_FILTER_USE_KEY
            );

            return array_merge($filtered, ['team' => $team ? ['name' => $team->name, 'id' => $team->id] : null ]);
        };
        return response()->json($players->map($playerTranformer));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePlayerRequest $request)
    {
        $player = new Player;
        $player->first_name = $request->input('firstName');
        $player->last_name = $request->input('lastName');
        $player->save();
        return response()->json(['player' => $player]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Player $player)
    {
        $teams = $player->teams->sortBy('termination_date');
        return response()->json([
            'teams' => $teams,
            'player' => $player
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Player  $player
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Player $player)
    {
        $player->first_name = $request->input('firstName');
        $player->last_name = $request->input('lastName');
        $player->save();
        return response()->json(['player' => $player]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Player  $player
     * @return \Illuminate\Http\Response
     */
    public function destroy(Player $player)
    {
        $player->delete();
        return response()->json(['success' => true]);
    }
}
