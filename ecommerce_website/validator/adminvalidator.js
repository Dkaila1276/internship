const validator = require('express-validator');

const adminValidationRules = () => {
    return [
        validator.body('admin_email').isEmail().withMessage('Invalid email address'),
        validator.body('admin_password').notEmpty().withMessage('Admin password is required'),
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
    adminValidationRules,
    validate,
};
