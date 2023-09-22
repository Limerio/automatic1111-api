var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const api = (url, base) => {
    const request = (method, path, payload) => __awaiter(void 0, void 0, void 0, function* () {
        let data;
        switch (method) {
            case 'GET':
                data = {
                    method,
                    body: JSON.stringify(payload),
                };
                break;
            case 'POST':
                data = {
                    method,
                };
                break;
        }
        const res = yield fetch(`${url}/${base}/${path}`, data);
        return yield res.json();
    });
    return { request };
};
