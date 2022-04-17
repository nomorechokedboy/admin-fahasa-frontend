import Joi from "joi";

export default interface RegisterData {
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
    firstName: string;
    lastName: string;
    birthdate: Date;
    salary: number;
}

export const registerSchema = Joi.object<RegisterData>({
    birthdate: Joi.date()
        .less(Date.now() - 16 * 365 * 24 * 60 * 60 * 1000)
        .message("Employee's age must greater than 16"),
    confirmPassword: Joi.any()
        .equal(Joi.ref("password"))
        .messages({ "any.only": "{{#label}} does not match" }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .message("Invalid email"),
    firstName: Joi.string().min(3).max(10),
    lastName: Joi.string().min(3).max(10),
    password: Joi.string()
        .min(8)
        .message("Password should contains at least 8 characters"),
    role: Joi.string(),
    salary: Joi.number()
        .min(30000)
        .message("Salary must be greater than 30.000đ"),
});
