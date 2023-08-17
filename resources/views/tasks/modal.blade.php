<div class="modal fade" id="myModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel1">Crear Tarea  </h5>
                <h5 class="modal-title" id="staticBackdropLabe2">Actualizar Tarea </h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="" method="post">

                    <div class="mb-3">
                        <label class="form-label"> Titulo </label>
                        <input type="text" class="form-control" id="title" placeholder="titulo">
                    </div>

                    <div class="mb-3">
                        <label class="form-label"> fecha vencimiento </label>
                        <input type="date" class="form-control" id="due_date" placeholder="fecha vencimiento">
                    </div>

                    <div class="mb-3">
                        <label class="form-label labelEstado" > Estado de la tarea </label>
                        <select id="completed" class="form-control completed">
                            <option value=1>completada</option>
                            <option value=0>pendiente</option>
                        </select>
                    </div>

                    <div class="mb-3">
                        <label class="form-label"> Descripcion  </label>
                        <textarea  class="form-control" id="description" placeholder="descripcion" rows="4" cols="50"></textarea>
                    </div>

                    <div class="mb-3">
                        <input type="hidden" class="form-control" id="id" >
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary createTask" id="create">Crear</button>
                <button type="button" class="btn btn-primary updateTask" id="update">Actualizar</button>
            </div>
        </div>
    </div>
</div>
