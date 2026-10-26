import { Router } from "express";
import Controller from "../controller/jogadorController.js";

const router = Router();

router.get("/", Controller.Listar);
router.get("/nome/:nome", Controller.BuscarPorNome);
router.get("/:id", Controller.BuscarPorId);
router.post("/", Controller.Criar);
router.put("/:id", Controller.Atualizar);
router.delete("/:id", Controller.Excluir);

export default router;