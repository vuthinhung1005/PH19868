import Product from '../model/product';
import joi from 'joi';

const productSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required(),
    desc: joi.string().required(),
    status: joi.boolean().required(),
    quanty: joi.number().required(),
})

export const create = async (req, res,) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            const errors = error.details[0]
            return res.json({
                message: errors.message
            })
        }
        const product = await Product.create(req.body);
        return res.status(201).json({
            message: "tao san pham thanh cong ",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: "loi api"
        })
    }
}


export const getAll = async (req, res,) => {
    try {

        const product = await Product.find();
        return res.status(201).json({
            message: "tim thay ",
            product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const getOne = async (req, res,) => {
    try {

        const product = await Product.findById(req.params.id);
        return res.status(201).json(product)
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}

export const update = async (req, res,) => {
    try {
        const { error } = productSchema.validate(req.body);
        if (error) {
            return res.status(400)({
                message: error.details[0].message,
            })
        }
        const id = req.params.id;
        const body = req.body;
        const product = await Product.findByIdAndUpdate(id, body, { new: true });
        return res.status(201).json({
            message: "update thanh cong ", product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}


export const remove = async (req, res,) => {
    try {
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        return res.status(201).json({
            message: "remove thanh cong ", product
        })
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}


