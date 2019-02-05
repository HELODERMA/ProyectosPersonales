<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Message;
use DB;

class MessageController extends Controller
{
    public function index (Request $reques)
    {
        $userId = auth()->id();
        $contactId = $reques->contact_id;

        return Message::select(
            'id',
            DB::raw("IF(`from_id`=$userId, TRUE, FALSE) as written_by_me"),
            'created_at',
            'content'
            )->where(function ($query) use ($userId,$contactId) {
            $query->where('from_id', $userId)->where('to_id',$contactId);
            })->orWhere(function ($query) use ($userId,$contactId){
                $query->where('from_id', $contactId)->where('to_id',$userId);
            })->get();
    }

    public function store(Request $reques)
    {
        $message = new Message();
        $message->from_id = auth()->id();
        $message->to_id = $reques->to_id ;
        $message->content = $reques->content;
        $saved = $message->save();

        $data = [];
        $data['succes'] = $saved;
        return $data;
    }
}