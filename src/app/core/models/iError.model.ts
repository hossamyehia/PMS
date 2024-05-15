export interface iError {
    message: string;
    statusCode: number;
    additionalInfo: {
        errors: {
            [key: string]: string[];
        };
    };
}