/** Dto */
const productoDto = require("../../model/dto/producto.dto")
const config = require("config")


exports.createProducto = (req, res, next) => {
    let producto = {
        id: req.body.productoId,
        name: req.body.name,
        precio: req.body.precio,
        existencia: req.body.existencia,
        calificacion: req.body.calificacion,
        id_categoria: req.body.idCategoria,
        id_marca: req.body.idMarca,
        descuento: req.body.descuento
    }
    productoDto.create(producto, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            )
        }    
        res.status(201).json(
                {
                    info: data
                }
            )
        })
    }

exports.updateProducto = (req, res, next) => {
    let producto = {
        id: req.body.productoId,
        name: req.body.name,
        precio: req.body.precio,
        existencia: req.body.existencia,
        calificacion: req.body.calificacion,
        id_categoria: req.body.idCategoria,
        id_marca: req.body.idMarca,
        descuento: req.body.descuento
    }
    productoDto.updatea({_id: req.body.id}, producto, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            )
        }  
            res.status(201).json(
                {
                    info: data
                }
            )
        }
    )
}


exports.getAll = (req, res, next) => {
    productoDto.getAll({}, (err, data) => {
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            )
        }  
        res.status(200).json(
                {
                    info: data
                }
            )
        }
    )
}

exports.deleteProducto = (req, res, next) => {
    productoDto.delete({_id: req.body.id}, (err, data) =>{
        if(err){
            return res.status(400).json(
                {
                    error: err
                }
            )
        }  
        res.status(204).json()
        })
    }

