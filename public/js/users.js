$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(document).ready(function() {

$('#myTable').DataTable({
    ajax: {
        url: '/user',
        dataSrc: 'data'
    },
    columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'email' },
        { data: 'actions', sortable: false, render: function(data, type, row) {
                return '<button class="btn  btn-primary" onClick="edit('+row.id+')"  >Editar </button> ';
            }}
    ]
});
});

function rest(){
    $("#name").val('')
    $("#password-confirm").val('')
    $("#password").val('')
    $("#email").val('')
}

function create(){
    rest()
    $("#staticBackdropLabe2").css("display", "none");
    $("#update").css("display", "none");
    $("#staticBackdropLabe1").css("display", "block");
    $("#create").css("display", "block");

    var myModal = new bootstrap.Modal(document.getElementById('myModal'))
    var modalToggle = document.getElementById('toggleMyModal')
    myModal.show(modalToggle)
}

$(".UpdateUser").click(function(e){
    e.preventDefault();

    if(validate( true)){

        const data= {
            'id': $("#id").val(),
            'name': $("#name").val(),
            'email': $("#email").val(),
            'password': $("password").val()
        }
        $.ajax({
            type:'POST',
            url:'/userUpdate',
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
        url:'/userEdit',
        data:{'id':id},
        success:function(data){
            $("#id").val(data.data.id)
            $("#name").val(data.data.name)
            $("#email").val(data.data.email)

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

    if($("#name").val() == ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el nombre es oligatorio!',
        })
        return false

    }


    if($("#email").val()==''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el email  es oligatorio!',
        })
        return false
    }

    var email = $("#email").val();
    var pattern = new RegExp(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
    if(pattern.test(email) == false){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'el email  no es valido!',
        })
        return false
    }

    if(update){
        if($("#password").val()!=''){
            let password = $("#password").val();
            let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            if(!regex.test(password)){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'la contraseña  no es valida !',
                })
                return false
            }
            if($("#password-confirm").val()==''){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'la contrseña de confirmación  es oligatorio!',
                })
                return false
            }
            if($("#password").val() != $("#password-confirm").val()){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'las contraseñas  no coinciden!',
                })
                return false
            }
        }
    }else{
        if($("#password-confirm").val()==''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'la contraseña de confirmación  es oligatorio!',
            })
            return false
        }

        if($("#password").val()==''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'la cpntraseña  es oligatorio!',
            })
            return false
        }
        if($("#password").val() != $("#password-confirm").val()){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'las contraseñas  no coinciden!',
            })
            return false
        }
        let password = $("#password").val();

        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if(!regex.test(password)){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'la contraseña  no es valida !',
            })
            return false
        }

    }

    return true;
}

$(".createUser").click(function(e){
    e.preventDefault();

    if(validate()){

        const data={
            'name': $("#name").val(),
            'email':$("#email").val(),
            'password':$("#password").val()
        };
        $.ajax({
            type:'POST',
            url:'/userSave',
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



