import { ControlTypesResponse, DetectPayload, DetectResponse, ModelListResponse, ModuleListResponse, SettingsResponse, VersionResponse } from './types.ts';
export declare class Controlnet {
    private readonly api;
    constructor(url: string);
    version(): Promise<VersionResponse>;
    modelList(): Promise<ModelListResponse>;
    moduleList(): Promise<ModuleListResponse>;
    controlTypes(): Promise<ControlTypesResponse>;
    settings(): Promise<SettingsResponse>;
    detect(payload: DetectPayload): Promise<DetectResponse>;
}
