const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController');
const auth = require('../Middleware/auth');
const { check } = require('express-validator');

//Crear una tarea
// api/tareas
router.post('/',
    auth,
    [
        check('nombre', 'El nombre el obligatorio').not().isEmpty(),
        check('proyecto', 'El proyecto el obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
)

//Obtener tareas
router.get('/',
    auth,
    tareaController.obtenerTareas
)

//Actualizar tareas
router.put('/:id',
    auth,
    tareaController.actualizarTarea

)

//Eliminar tareas
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
)

module.exports = router;