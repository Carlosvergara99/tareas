<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use app\Models\User;
use Validator;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{

  function  index(){
        $data = User::all();
        return response()->json([
            "data" => $data,
        ], 201);
    }
     function  save( Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'email|unique:users'
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => "email ya existe"
            ], 403);
        }
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json([
            "message" => "User created"
        ], 201);
    }

     function edit(Request $request){
        $data = User::find($request->id);
        return response()->json([
            "data" => $data,
        ], 200);
    }
    function  update (Request $request){

        $validator = Validator::make($request->all(), [
            'email' => 'email|unique:users,email,'.$request->id
        ]);

        if ($validator->fails())
        {
            return response()->json([
                "message" => "email ya existe"
            ], 403);
        }
        $user = User::find($request->id);
        $user->name = $request->name;
        $user->save();
        return response()->json([
            "message" => "User updated"
        ], 201);
    }
}
