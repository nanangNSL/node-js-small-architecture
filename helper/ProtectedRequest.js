exports.Protected = (data) => {
  if (
    !data?.nama_barang ||
    !data?.stock_barang ||
    !data?.jumlah_terjual ||
    data?.nama_barang == null ||
    data?.nama_barang == undefined ||
    data?.stock_barang == "" ||
    data?.stock_barang <= 0 ||
    data?.stock_barang == null ||
    data?.stock_barang == undefined ||
    data?.jumlah_terjual == "" ||
    data?.jumlah_terjual == null ||
    data?.jumlah_terjual == undefined ||
    data?.jumlah_terjual > data?.stock_barang
  ) {
    return false;
  } else {
    return true;
  }
};


