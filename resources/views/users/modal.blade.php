<div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel1">Crear Usuario  </h5>
                <h5 class="modal-title" id="staticBackdropLabe2">Actualizar Usuario </h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" method="post">

                    <div class="mb-3">
                        <label class="form-label"> Nombre </label>
                        <input type="text" class="form-control" id="name" placeholder="Nombre y apellido">
                    </div>

                    <div class="mb-3">
                        <label class="form-label"> Email </label>
                        <input type="email" class="form-control" id="email" placeholder="EMAIL">
                    </div>

                    <div class="mb-3">
                        <label class="form-label"> Contraseña </label>
                        <input type="password" class="form-control" id="password" placeholder="Contraseña">
                    </div>

                    <div class="mb-3">
                        <label class="form-label"> Confirmar Contraseña </label>
                        <input type="password" class="form-control" id="password-confirm" placeholder=" Confirmar Contraseña">
                    </div>

                    <div class="mb-3">
                        <input type="hidden" class="form-control" id="id" >
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary createUser" id="create">Crear</button>
                <button type="button" class="btn btn-primary UpdateUser" id="update">Actualizar</button>
            </div>
        </div>
    </div>
</div>
