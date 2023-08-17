<x-mail::message>
# Novedad en la tarea

@if($completed == 1)
     la tarea {{$title }} se ha completada correctamente,<br>
    @else
    la tarea {{$title }} se ha creado correctamente ,
@endif

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
