import { Api, api } from '../api.ts'
import { Response } from '../types.ts'
import {
  ControlTypesResponse,
  DetectPayload,
  DetectResponse,
  ModelListResponse,
  ModuleListResponse,
  SettingsResponse,
  VersionResponse,
} from './types.ts'

export class ControlNet {
  private readonly api: Api

  constructor(url: string) {
    this.api = api(url, 'controlnet')
  }

  async version(): Promise<Response<VersionResponse>> {
    return await this.api.request<VersionResponse, undefined>('GET', 'version')
  }

  async modelList(): Promise<Response<ModelListResponse>> {
    return await this.api.request<ModelListResponse, undefined>(
      'GET',
      'model_list',
    )
  }

  async moduleList(): Promise<Response<ModuleListResponse>> {
    return await this.api.request<ModuleListResponse, undefined>(
      'GET',
      'module_list',
    )
  }

  async controlTypes(): Promise<Response<ControlTypesResponse>> {
    return await this.api.request<ControlTypesResponse, undefined>(
      'GET',
      'control_types',
    )
  }

  async settings(): Promise<Response<SettingsResponse>> {
    return await this.api.request<SettingsResponse, undefined>(
      'GET',
      'settings',
    )
  }

  async detect(payload: DetectPayload): Promise<Response<DetectResponse>> {
    return await this.api.request<DetectResponse, DetectPayload>(
      'POST',
      'detect',
      payload,
    )
  }
}
