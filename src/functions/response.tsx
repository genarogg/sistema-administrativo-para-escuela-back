type ResponseType = "success" | "error";

interface ResponsePayload {
    message: string;
    type?: ResponseType;
    token?: string;
    [key: string]: any;
}

const createResponse = (message: string, type: ResponseType, token?: string, additionalParams?: object): ResponsePayload => {
    const payload: ResponsePayload = { message, type };

    if (token) {
        payload.token = token;
    }

    if (additionalParams) {
        Object.assign(payload, additionalParams);
    }

    return payload;
};

// { message: string, token?: string, additionalParams?: object }

// Funciones de ayuda
const successResponse = ({ message, token, additionalParams }: ResponsePayload): ResponsePayload => {
    return createResponse(message, "success", token, additionalParams);
};

const errorResponse = ({ message, token, additionalParams }: ResponsePayload): ResponsePayload => {
    return createResponse(message, "error", token, additionalParams);
};

export { createResponse, successResponse, errorResponse };