exports.Message = (error, req, res, next) => {
  const codes = {
    badRequest: 400,
    validationError: 400,
    authError: 401,
  };
  const status = codes[error.name] || error.status || 500;
  res.status(status).json({
    error: {
      status,
      name: error.name || "error",
      message: error.message || "error",
    },
  });
  next();
};
