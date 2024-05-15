import { HttpHeaders } from "@angular/common/http";
import { iError } from "./iError.model";

export interface iErrorResponse{
    headers?: HttpHeaders;
    error: iError;
    message?: string;
    name?: string;
    ok?: boolean;
    status?: number;
    statusText?: string;
    url?: string;
}