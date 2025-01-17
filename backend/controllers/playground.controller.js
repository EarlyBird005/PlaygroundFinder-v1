import { PlaygroundModel } from "../models/Playground.model.js";

export const pgQuery = async (req, res) => {
    const playgrounds = await PlaygroundModel.find(req.query);
    return res.status(200).json(playgrounds);
}

export const getAllPG = async (req, res) => {
    const obj = await PlaygroundModel.find({});
    return res.status(200).json(obj);
}

// export const addPG = async (req, res) => {
//     const { name, address, description } = req.body;
//     if (!name || !address || !description) {
//         return res.status(400).json({
//             msg: "Playground name, address, description all are required",
//             success: "fail"
//         });
//     }

//     const newPG = await PlaygroundModel.create(name, address, description);
//     if (!newPG) {
//         return res.status(500).json({
//             msg: "Can not add new playground right now",
//             success: "fail"
//         });
//     }

//     return res.status(200).json({
//         msg: `${name}  registered successfully`,
//         newPG
//     });
// }
export const addPG = async (req, res) => {
    if (!req.body.name || !req.body.address || !req.body.description) {
        return res.status(400).json({
            msg: "Playground name, address, description all are required",
            success: "fail"
        });
    }

    const newPG = await PlaygroundModel.create(req.body);
    if (!newPG) {
        return res.status(500).json({
            msg: "Can not add new playground right now",
            success: "fail"
        });
    }

    return res.status(200).json({
        msg: `${name}  registered successfully`,
        newPG
    });
}

export const getPGById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            msg: "Playground id needed",
            success: "fail"
        });
    }

    const onePG = await PlaygroundModel.findById(id);
    if (!onePG) {
        return res.status(400).json({
            msg: "Playground now found",
            success: "fail"
        });
    }

    return res.status(200).json(onePG );
}

