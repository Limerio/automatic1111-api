export type VersionResponse = {}

export type ModelListResponse = {}

export type ModuleListResponse = {}

export type ControlTypesResponse = {}

export type SettingsResponse = {}

export type DetectPayload = {
  /**
   * Controlnet Module
   * @default none
   */
  controlnet_module?: string
  /**
   * Controlnet Input Images
   * @default []
   */
  controlnet_input_images?: string[]
  /**
   * Controlnet Processor Resolution
   * @default 512
   */
  controlnet_processor_res?: number
  /**
   * Controlnet Threshold a
   * @default 64
   */
  controlnet_threshold_a?: number
  /**
   * Controlnet Threshold b
   * @default 64
   */
  controlnet_threshold_b?: number
}
export type DetectResponse = {}
