import { Router } from "express";
import { ProductoController } from "../../controller/producto.controller.js";
const productoRouter = Router();
const productoController = new ProductoController();
productoRouter.get('/', productoController.getProductos.bind(productoController));
productoRouter.get('/admin', productoController.getProductosAdmin.bind(productoController));
productoRouter.get('/:id', productoController.getProducto.bind(productoController));
productoRouter.post('/', productoController.createProducto.bind(productoController));
productoRouter.put('/:id', productoController.actualizarProducto.bind(productoController));
productoRouter.delete('/:id', productoController.eliminarProducto.bind(productoController));
export default productoRouter;
//# sourceMappingURL=producto.router.js.map