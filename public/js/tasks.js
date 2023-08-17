$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(document).ready(function() {

    $('#myTable').DataTable({
        ajax: {
            url: '/task',
            dataSrc: 'data'
        },
        columns: [
            { data: 'id' },
            { data: 'title' },
            { data: 'due_date' },
            { data: 'completed', render: function(data, type, row) {
                    if (data == 1){
                        return '<span class="badge bg-success">Completada</span>';
                    }else{
                        return '<span class="badge bg-danger">Pendiente</span>';
                    }
            }},
            { data: 'actions', sortable: false, render: function(data, type, row) {
                    return '<button class="btn  btn-primary" onClick="edit('+row.id+')"  >Editar </button> ';
                }}
        ],
        order: [[2, 'desc']]

    });
});

function rest(){
    $("#title").val('')
    $("#description").val('')
    $("#due_date").val('')
    $("#completed").val('')
}

function create(){
    rest()
    $(".completed").css("display", "none");
    $(".labelEstado").css("display", "none");
    $("#staticBackdropLabe2").css("display", "none");
    $("#update").css("display", "none");
    $("#staticBackdropLabe1").css("display", "block");
    $("#create").css("display", "block");

    var myModal = new bootstrap.Modal(document.getElementById('myModal'))
    var modalToggle = document.getElementById('toggleMyModal')
    myModal.show(modalToggle)
}

$(".updateTask").click(function(e){
    e.preventDefault();

    if(validate( true)){

        const data= {
            'id': $("#id").val(),
            'title': $("#title").val(),
            'description': $("#description").val(),
            'due_date': $("#due_date").val(),
            'completed': $("#completed").val()
        }
        $.ajax({
            type:'POST',
            url:'/taskUpdate',
            data:data,
            success:function(data){
                Swal.fire({
                    icon: 'success',
                    title: 'OK',
                    text: 'Registro actualizado',
                })
               location.reload();
            },
            error:function(data){

                if (data.status == 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.responseJSON.message,
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'servidor sin conexion !',
                    })
                }
            }
        });
    }



});


function edit(id){
    $.ajax({
        type:'POST',
        url:'/taskEdit',
        data:{'id':id},
        success:function(data){
            $("#id").val(data.data.id)
            $("#title").val(data.data.title)
            $("#due_date").val(data.data.due_date)
            $("#description").val(data.data.description)
            $("#completed").val(data.data.completed)

            if (data.data.completed == 1){
                $(".completed").prop('disabled', true);
            }else{
                $(".completed").prop('disabled', false);
            }
            $(".completed").prop('checked', true);

            $(".completed").css("display", "block");
            $(".labelEstado").css("display", "block");

            $("#staticBackdropLabe2").css("display", "block");
            $("#update").css("display", "block");
            $("#staticBackdropLabel1").css("display", "none");
            $("#create").css("display", "none");

            var myModal = new bootstrap.Modal(document.getElementById('myModal'))
            var modalToggle = document.getElementById('toggleMyModal')
            myModal.show(modalToggle)


        },
        error:function(data){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'servidor sin conexion !',
            })
        }
    });


}

function validate( update = false){

    if($("#title").val() == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el titulo es oligatorio!',
        })
        return false

    }

    if($("#description").val()==''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'la descripcion  es oligatorio!',
        })
        return false
    }

    if($("#due_date").val()==''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'la fecha de vencimiento  es oligatorio!',
        })
        return false
    }

    return true;
}

$(".createTask").click(function(e){
    e.preventDefault();

    if(validate()){

        const data={
            'title': $("#title").val(),
            'description':$("#description").val(),
            'due_date':$("#due_date").val()
        };
        $.ajax({
            type:'POST',
            url:'/taskSave',
            data:data,
            success:function(data){
                Swal.fire({
                    icon: 'success',
                    title: 'OK',
                    text: 'Registro Creado',
                })
                location.reload();
            },
            error:function(data){

                if (data.status == 403) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: data.responseJSON.message,
                    })
                }else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'servidor sin conexion !',
                    })
                }
            }
        });
    }
});



