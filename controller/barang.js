const {
  insertServices,
  deleteServices,
  searchServices,
  updateServices,
  FindAll
} = require("../services/barang");
const { Protected } = require("../helper/ProtectedRequest");

exports.insertControl = async (req, res, next) => {
  try {
    if (Protected(req.body)) {
      const data = await insertServices(req.body);
      if (data) {
        res.json({ data });
      } else {
        res.send([]);
      }
    } else {
      res.send({ message: "request failed check again your input" });
    }
  } catch (error) {
    next(error);
  }
};

exports.updateController = async (req, res, next) => {
    let parse = parseInt(req.params?.id)
  try {
    if (Protected(req.body)) {
      const data = await updateServices(req.body, parse);
      if (data) {
        res.json({ message: `Data ID ${req?.params?.id} successfully updated ` });
      } else {
        res.status().send({ message: `Data ID ${req?.params?.id} not updated `});
        return false;
      }
    }
  } catch (error) {
    next(error);
  }
};

exports.deleteController = async (req, res, next) => {
    let parse = parseInt(req.params?.id)
    try {
        const data = await deleteServices(parse);
        if(data){
            res.json({ message: `Data ID ${req.params?.id} deleted`})
        }else{
            res.status(404).send({ message: `Data ID ${req.params?.id} not deleted` });
            return false;
        }
    } catch (error) {
        next(error);
    }
}
exports.FindSorted = async (req, res, next) => {
  try {
    const data = await searchServices(req.query);
    if(data){
      res.status(200).json(data)
    }else{
      throw new Error
    }
  } catch (error) {
    next(error);
  }

}
