import { AxiosResponse } from 'axios';

interface CommunicationError extends AxiosResponse{
    error: string;
}

type AxiosReturnType = Promise<AxiosResponse<object, any>  | CommunicationError>

export { CommunicationError, AxiosReturnType };