<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;



class TaskController extends Controller
{
    //

    function  index(){
        $task = DB::table('tasks')
//             ->join('users', 'tasks.user_id', '=', 'users.id')
//            ->select('tasks.*', 'users.name')
             ->get();
        return response()->json([
            "data" => $task
        ], 200);
    }

    function  save(Request $request){
        $request['user_id'] = auth()->user()->id;
        DB::table('tasks')->insert($request->all());
        $email = auth()->user()->email;
        $request['completed'] = 0;
        Mail::to($email)->send(new \App\Mail\TaskShipped($request->only('title', 'completed')));

        return response()->json([
            "data" => "Task created"
        ], 201);
    }

    function  edit(Request $request){
        $task = DB::table('tasks')
            ->where('id', $request->id)
            ->first();

        return response()->json([
            "data" => $task
        ], 200);
    }

    function  update(Request $request){
        $request['user_id'] = auth()->user()->id;
        $exist = DB::table('tasks')
            ->where('id', $request->id)
            ->where('completed', '1')
            ->exists();
        if ($request->completed == 1 && !$exist){
            $email = auth()->user()->email;
            Mail::to($email)->send(new \App\Mail\TaskShipped($request->only('title', 'completed')));
        }
        DB::table('tasks')
            ->where('id', $request->id)
            ->update($request->all());

        return response()->json([
            "data" => "Task updated"
        ], 200);
    }
}
