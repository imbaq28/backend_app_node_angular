import { Router } from "express"
import * as authController from './../controllers/auth.controller'
import * as authMiddleware from "./../middlewares/auth.middleware"
export const Route = Router()
// rutas AUTH
Route.post('/auth/login', authController.login);
Route.post('/auth/registro', authController.registro);

// authMiddleware.auth verifica y autoriza antes de llegar al controlador
Route.get('/auth/perfil', authMiddleware.auth, authController.perfil);
