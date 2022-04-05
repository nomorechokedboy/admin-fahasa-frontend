import Joi from "joi";

export interface LoginData {
    email: string;
    password: string;
}

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const loginSchema = Joi.object<LoginData>({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .message("Invalid email"),
    password: Joi.string(),
});

export default loginSchema;
