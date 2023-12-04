//userValidation.js
const validator = require('express-validator');

const userValidationRules = () => {
  return [
    validator.body('user_name').notEmpty().withMessage('Username is required'),
    validator.body('user_age').notEmpty().withMessage('User Age is required'),
    validator.body('user_contact').notEmpty().withMessage('User contact is required'),
    validator.body('user_email').isEmail().withMessage('Invalid email address'),
    validator.body('user_city').notEmpty().withMessage('User city is required'),
  ];
};

const validate = (req, res, next) => {
  const errors = validator.validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = errors.array().map((err) => ({
    [err.param]: err.msg,
  }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
