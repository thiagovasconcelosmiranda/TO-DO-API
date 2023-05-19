import {Router} from "express";
import * as TodoController from  '../controllers/todoController';

const router = Router();

router.get('/todo', TodoController.todo);
router.post('/todo', TodoController.add);
router.put('/todo/:id', TodoController.update);
router.delete('/todo/:id', TodoController.remove);

export default router;