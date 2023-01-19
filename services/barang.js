const {InsertBarang, deleteBarang, searchFilter, updateBarang, getAll} = require('../models/barang')


exports.insertServices = async (data) =>{
    const insertModel = await InsertBarang(data)
    return insertModel;
    
}
exports.updateServices = async (data, id) => {
    const updateModel = await updateBarang(data, id)
    return updateModel;

}
exports.deleteServices = async (id) => {
    const deleteModel = await deleteBarang(id);
    return deleteModel;
}
exports.searchServices = async (data) =>{
    const searchModel = await searchFilter(data)
    return searchModel;
}

