type RequestMethods = 'GET' | 'POST';
export interface Api {
    request: <D, P>(method: RequestMethods, path: string, payload?: P) => Promise<D>;
}
export declare const api: (url: string, base: string) => {
    request: <D, P>(method: RequestMethods, path: string, payload?: P | undefined) => Promise<D>;
};
export {};
