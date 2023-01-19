const {insertControl, updateController, deleteController, FindSorted} = require('../controller/barang')

module.exports = (app) => {
  app.post("/barang",insertControl)
  app.put("/barang/:id", updateController)
  app.delete("/barang/:id", deleteController)
  app.get("/barang", FindSorted)
}