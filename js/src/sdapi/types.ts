export type Txt2ImgPayload = {
  /**
       * Prompt
       * @default
       */
      prompt?: string;
      /**
       * Negative Prompt
       * @default
       */
      negative_prompt?: string;
      /** Styles */
      styles?: string[];
      /**
       * Seed
       * @default -1
       */
      seed?: number;
      /**
       * Subseed
       * @default -1
       */
      subseed?: number;
      /**
       * Subseed Strength
       * @default 0
       */
      subseed_strength?: number;
      /**
       * Seed Resize From H
       * @default -1
       */
      seed_resize_from_h?: number;
      /**
       * Seed Resize From W
       * @default -1
       */
      seed_resize_from_w?: number;
      /** Sampler Name */
      sampler_name?: string;
      /**
       * Batch Size
       * @default 1
       */
      batch_size?: number;
      /**
       * N Iter
       * @default 1
       */
      n_iter?: number;
      /**
       * Steps
       * @default 50
       */
      steps?: number;
      /**
       * Cfg Scale
       * @default 7
       */
      cfg_scale?: number;
      /**
       * Width
       * @default 512
       */
      width?: number;
      /**
       * Height
       * @default 512
       */
      height?: number;
      /** Restore Faces */
      restore_faces?: boolean;
      /** Tiling */
      tiling?: boolean;
      /**
       * Do Not Save Samples
       * @default false
       */
      do_not_save_samples?: boolean;
      /**
       * Do Not Save Grid
       * @default false
       */
      do_not_save_grid?: boolean;
      /** Eta */
      eta?: number;
      /**
       * Denoising Strength
       * @default 0
       */
      denoising_strength?: number;
      /** S Min Uncond */
      s_min_uncond?: number;
      /** S Churn */
      s_churn?: number;
      /** S Tmax */
      s_tmax?: number;
      /** S Tmin */
      s_tmin?: number;
      /** S Noise */
      s_noise?: number;
      /** Override Settings */
      override_settings?: Record<string, never>;
      /**
       * Override Settings Restore Afterwards
       * @default true
       */
      override_settings_restore_afterwards?: boolean;
      /** Refiner Checkpoint */
      refiner_checkpoint?: string;
      /** Refiner Switch At */
      refiner_switch_at?: number;
      /**
       * Disable Extra Networks
       * @default false
       */
      disable_extra_networks?: boolean;
      /** Comments */
      comments?: Record<string, never>;
      /**
       * Enable Hr
       * @default false
       */
      enable_hr?: boolean;
      /**
       * Firstphase Width
       * @default 0
       */
      firstphase_width?: number;
      /**
       * Firstphase Height
       * @default 0
       */
      firstphase_height?: number;
      /**
       * Hr Scale
       * @default 2
       */
      hr_scale?: number;
      /** Hr Upscaler */
      hr_upscaler?: string;
      /**
       * Hr Second Pass Steps
       * @default 0
       */
      hr_second_pass_steps?: number;
      /**
       * Hr Resize X
       * @default 0
       */
      hr_resize_x?: number;
      /**
       * Hr Resize Y
       * @default 0
       */
      hr_resize_y?: number;
      /** Hr Checkpoint Name */
      hr_checkpoint_name?: string;
      /** Hr Sampler Name */
      hr_sampler_name?: string;
      /**
       * Hr Prompt
       * @default
       */
      hr_prompt?: string;
      /**
       * Hr Negative Prompt
       * @default
       */
      hr_negative_prompt?: string;
      /**
       * Sampler Index
       * @default Euler
       */
      sampler_index?: string;
      /** Script Name */
      script_name?: string;
      /**
       * Script Args
       * @default []
       */
      script_args?: unknown[];
      /**
       * Send Images
       * @default true
       */
      send_images?: boolean;
      /**
       * Save Images
       * @default false
       */
      save_images?: boolean;
      /**
       * Alwayson Scripts
       * @default {}
       */
      alwayson_scripts?: Record<string, never>;
};

export type Txt2ImgResponse = {};

export type Img2ImgPayload = {
  /**
       * Prompt
       * @default
       */
      prompt?: string;
      /**
       * Negative Prompt
       * @default
       */
      negative_prompt?: string;
      /** Styles */
      styles?: string[];
      /**
       * Seed
       * @default -1
       */
      seed?: number;
      /**
       * Subseed
       * @default -1
       */
      subseed?: number;
      /**
       * Subseed Strength
       * @default 0
       */
      subseed_strength?: number;
      /**
       * Seed Resize From H
       * @default -1
       */
      seed_resize_from_h?: number;
      /**
       * Seed Resize From W
       * @default -1
       */
      seed_resize_from_w?: number;
      /** Sampler Name */
      sampler_name?: string;
      /**
       * Batch Size
       * @default 1
       */
      batch_size?: number;
      /**
       * N Iter
       * @default 1
       */
      n_iter?: number;
      /**
       * Steps
       * @default 50
       */
      steps?: number;
      /**
       * Cfg Scale
       * @default 7
       */
      cfg_scale?: number;
      /**
       * Width
       * @default 512
       */
      width?: number;
      /**
       * Height
       * @default 512
       */
      height?: number;
      /** Restore Faces */
      restore_faces?: boolean;
      /** Tiling */
      tiling?: boolean;
      /**
       * Do Not Save Samples
       * @default false
       */
      do_not_save_samples?: boolean;
      /**
       * Do Not Save Grid
       * @default false
       */
      do_not_save_grid?: boolean;
      /** Eta */
      eta?: number;
      /**
       * Denoising Strength
       * @default 0.75
       */
      denoising_strength?: number;
      /** S Min Uncond */
      s_min_uncond?: number;
      /** S Churn */
      s_churn?: number;
      /** S Tmax */
      s_tmax?: number;
      /** S Tmin */
      s_tmin?: number;
      /** S Noise */
      s_noise?: number;
      /** Override Settings */
      override_settings?: Record<string, never>;
      /**
       * Override Settings Restore Afterwards
       * @default true
       */
      override_settings_restore_afterwards?: boolean;
      /** Refiner Checkpoint */
      refiner_checkpoint?: string;
      /** Refiner Switch At */
      refiner_switch_at?: number;
      /**
       * Disable Extra Networks
       * @default false
       */
      disable_extra_networks?: boolean;
      /** Comments */
      comments?: Record<string, never>;
      /** Init Images */
      init_images?: unknown[];
      /**
       * Resize Mode
       * @default 0
       */
      resize_mode?: number;
      /** Image Cfg Scale */
      image_cfg_scale?: number;
      /** Mask */
      mask?: string;
      /**
       * Mask Blur X
       * @default 4
       */
      mask_blur_x?: number;
      /**
       * Mask Blur Y
       * @default 4
       */
      mask_blur_y?: number;
      /** Mask Blur */
      mask_blur?: number;
      /**
       * Inpainting Fill
       * @default 0
       */
      inpainting_fill?: number;
      /**
       * Inpaint Full Res
       * @default true
       */
      inpaint_full_res?: boolean;
      /**
       * Inpaint Full Res Padding
       * @default 0
       */
      inpaint_full_res_padding?: number;
      /**
       * Inpainting Mask Invert
       * @default 0
       */
      inpainting_mask_invert?: number;
      /** Initial Noise Multiplier */
      initial_noise_multiplier?: number;
      /** Latent Mask */
      latent_mask?: string;
      /**
       * Sampler Index
       * @default Euler
       */
      sampler_index?: string;
      /**
       * Include Init Images
       * @default false
       */
      include_init_images?: boolean;
      /** Script Name */
      script_name?: string;
      /**
       * Script Args
       * @default []
       */
      script_args?: unknown[];
      /**
       * Send Images
       * @default true
       */
      send_images?: boolean;
      /**
       * Save Images
       * @default false
       */
      save_images?: boolean;
      /**
       * Alwayson Scripts
       * @default {}
       */
      alwayson_scripts?: Record<string, never>;
};

export type Img2ImgResponse = {};

export type ExtraSimpleImagePayload = {};
export type ExtraSimpleImageResponse = {};

export type ExtraBatchImagesPayload = {};
export type ExtraBatchImagesResponse = {};

export type PngInfoPayload = {};
export type PngInfoResponse = {};

export type ProgressResponse = {};

export type InterrogatePayload = {};
export type InterrogateResponse = {};

export type InterruptResponse = {};

export type SkipResponse = {};

export type OptionsPayload = {};
export type PayloadResponse = {};

export type CmdFlagsResponse = {};

export type SamplersResponse = {};

export type UpscalersResponse = {};

export type LatentUpscaleModesResponse = {};

export type SdModelsResponse = {};

export type SdVaeResponse = {};

export type HypernetworksResponse = {};

export type FaceRestorersResponse = {};

export type RealesrganModelsResponse = {};

export type PromptStylesResponse = {};

export type EmbeddingsResponse = {};

export type RefreshCheckpointsResponse = {};

export type RefreshVaeResponse = {};

export type CreateEmbeddingPayload = {};
export type CreateEmbeddingResponse = {};

export type CreateHypernetworkPayload = {};
export type CreateHypernetworkResponse = {};

export type PreprocessPayload = {};
export type PreprocessResponse = {};

export type TrainEmbeddingPayload = {};
export type TrainEmbeddingResponse = {};

export type TrainHypernetworkPayload = {};
export type TrainHypernetworkResponse = {};

export type MemoryResponse = {};

export type UnloadCheckpointResponse = {};

export type RefreshCheckpointResponse = {};

export type ScriptsResponse = {};

export type ScriptInfoResponse = {};

export type LorasResponse = {};

export type RefreshLorasResponse = {};
