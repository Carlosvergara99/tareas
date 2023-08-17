
@extends('layouts.app')

@section('content')

    <div class="row justify-content-center" >
        <div class="col-md-8">
            <h3>Usuarios</h3>
        </div>
        <div class="col-md-2">
            <button  class="btn btn-success float-right" onclick="create()">Crear</button>
        </div>
        <div class="col-md-12"><br></div>
        <div class="col-md-10">
            <table class="table table-striped" id="myTable"  style="width: 100%" >
                <thead>
                <tr>
                    <th >ID</th>
                    <th >Nombre</th>
                    <th >Email</th>
                    <th >Acciones</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>

    @include('users.modal')
    <script src="{{ asset('js/users.js') }}"></script>
@endsection

