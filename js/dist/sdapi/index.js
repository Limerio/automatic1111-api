var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { api } from '../api.ts';
export class SDApi {
    constructor(url) {
        this.api = api(url, 'sdapi/v1');
    }
    txt2Img(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'txt2img', payload);
        });
    }
    img2Img(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'img2img', payload);
        });
    }
    extraSingleImage(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'extra-single-image', payload);
        });
    }
    extraBatchImages(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'extra-batch-images', payload);
        });
    }
    pngInfo(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'png-info', payload);
        });
    }
    progress() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'progress');
        });
    }
    interrogate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'interrogate', payload);
        });
    }
    interrupt() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'interrupt');
        });
    }
    skip() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'skip');
        });
    }
    options() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'options');
        });
    }
    setOptions(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'options', payload);
        });
    }
    cmdFlags() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'cmd-flags');
        });
    }
    samplers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'samplers');
        });
    }
    upscalers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'upscalers');
        });
    }
    latentUpscaleModes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'latent-upscale-modes');
        });
    }
    sdModels() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'sd-models');
        });
    }
    sdVae() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'sd-vae');
        });
    }
    hypernetworks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'hypernetworks');
        });
    }
    faceRestorers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'face-restorers');
        });
    }
    realesrganModels() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'realesrgan-models');
        });
    }
    promptStyles() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'prompt-styles');
        });
    }
    embeddings() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'embeddings');
        });
    }
    refreshCheckpoints() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'refresh-checkpoints');
        });
    }
    refreshVae() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'refresh-vae');
        });
    }
    createEmbedding(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'create/embedding', payload);
        });
    }
    createHypernetwork(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'create/hypernetwork', payload);
        });
    }
    preprocess(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'preprocess', payload);
        });
    }
    trainEmbedding(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'train/embedding', payload);
        });
    }
    trainHypernetwork(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'train/hypernetwork', payload);
        });
    }
    memory() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'memory');
        });
    }
    unloadCheckpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'unload-checkpoint');
        });
    }
    refreshCheckpoint() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'refresh-checkpoint');
        });
    }
    scripts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'scripts');
        });
    }
    scriptInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'script-info');
        });
    }
    loras() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('GET', 'loras');
        });
    }
    refreshLoras() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.request('POST', 'refresh-loras');
        });
    }
}
