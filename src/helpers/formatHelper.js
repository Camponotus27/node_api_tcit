class FormatApiResponseClass {
    constructor(res) {
        this.res = res;
    }

    Success(data, message = '', staus = 200) {
        this.res.status(staus).json(this.formatResponseCorrect(data, message));
    }

    Error(data, message = '', etatus = 400) {
        this.res.status(staus).json(this.formatResponseError(data, message));
    }
    
    formatResponseCorrect(data, message = '') {
        return {
            message: message,
            errors: {},
            data: data
        };
    }

    formatResponseError (errors, message = '') {
        return {
            message: message,
            errors: errors,
            data: {}
        };
    }
}

const FormatApiResponse = (res) => new FormatApiResponseClass(res)

module.exports = {
    FormatApiResponse
}