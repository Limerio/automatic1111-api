import { Api, api } from '../api.ts';
import {
  ControlTypesResponse,
  DetectPayload,
  DetectResponse,
  ModelListResponse,
  ModuleListResponse,
  SettingsResponse,
  VersionResponse,
} from './types.ts';

export class Controlnet {
  private readonly api: Api;

  constructor(url: string) {
    this.api = api(url, 'controlnet');
  }

  async version(): Promise<VersionResponse> {
    return await this.api.request<VersionResponse, undefined>('GET', 'version');
  }

  async modelList(): Promise<ModelListResponse> {
    return await this.api.request<ModelListResponse, undefined>(
      'GET',
      'model_list',
    );
  }

  async moduleList(): Promise<ModuleListResponse> {
    return await this.api.request<ModuleListResponse, undefined>(
      'GET',
      'module_list',
    );
  }

  async controlTypes(): Promise<ControlTypesResponse> {
    return await this.api.request<ControlTypesResponse, undefined>(
      'GET',
      'control_types',
    );
  }

  async settings(): Promise<SettingsResponse> {
    return await this.api.request<SettingsResponse, undefined>(
      'GET',
      'settings',
    );
  }

  async detect(payload: DetectPayload): Promise<DetectResponse> {
    return await this.api.request<DetectResponse, DetectPayload>(
      'POST',
      'detect',
      payload,
    );
  }
}
