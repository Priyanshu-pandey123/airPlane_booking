const { StatusCodes } = require("http-status-codes");
const { json } = require("sequelize");
const { errorResponse } = require("../utils/common");
const validateCreateRequest = (req, res, next) => {
  const { modelNumber, capacity } = req.body;
  console.log(modelNumber, capacity, "form middleware");
  errorResponse.error = { explanation: "fill all the feild as reqiured" };

  if (!modelNumber || !capacity) {
    return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
