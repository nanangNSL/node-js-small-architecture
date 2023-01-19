const { query } = require("../config/configDB");

exports.InsertBarang = async (data) => {
  let date = new Date().toISOString().split("T")[0];
  const createQuery = await query(
    `INSERT INTO table_barang(nama_barang, stock_barang, jumlah_terjual, tanggal_transaksi, jenis_barang) VALUES
    ($1, $2, $3, $4, $5)`,
    [data.nama_barang, data.stock_barang, data.jumlah_terjual, date, data.jenis_barang]
  );
  if (createQuery.rowCount === 0) {
    return "No Insert data";
  }
  return data;
};

exports.updateBarang = async (data, id) => {
  let date = new Date().toISOString().split("T")[0];
  const updateQuery = await query(
    `UPDATE table_barang SET nama_barang=$1, stock_barang=$2, jumlah_terjual=$3, tanggal_transaksi=$4, jenis_barang=$5 WHERE id_nomor=$6`,
    [data?.nama_barang, data?.stock_barang, data?.jumlah_terjual, date, data?.jenis_barang, id]
  );
  if (!updateQuery) {
    return false;
  } else {
    return data;
  }
};

exports.deleteBarang = async (id) => {
  const deleteQuery = await query(
    `DELETE FROM table_barang WHERE id_nomor = $1`,
    [id]
  );
  if (!deleteQuery) {
    return false;
  } else {
    return "success";
  }
};

exports.searchFilter = async (dataParams) => {
  let syntxQuery = `SELECT * FROM table_barang
 WHERE nama_barang LIKE '%'||$1||'%' `;
  let values = [dataParams?.q];
  if (dataParams?.start_date && dataParams?.end_date) {
    syntxQuery += `AND tanggal_transaksi >= $2 AND tanggal_transaksi <= $3`;
    values.push(dataParams.start_date);
    values.push(dataParams.end_date);
  }
  if (dataParams?.sort_by === "nama_barang") {
    syntxQuery += `ORDER BY nama_barang ${dataParams?.sort_order}`;
  } else if (dataParams?.sort_by === "tanggal_transaksi") {
    syntxQuery += `ORDER BY tanggal_transaksi ${dataParams?.sort_order}`;
  }
  const searcQuery = await query(syntxQuery, values);
  if(searcQuery){
    return searcQuery?.rows;
  }
};


