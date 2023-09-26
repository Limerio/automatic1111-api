export type Txt2ImgPayload = {
  /**
   * Prompt
   * @default
   */
  prompt?: string
  /**
   * Negative Prompt
   * @default
   */
  negative_prompt?: string
  /** Styles */
  styles?: string[]
  /**
   * Seed
   * @default -1
   */
  seed?: number
  /**
   * Subseed
   * @default -1
   */
  subseed?: number
  /**
   * Subseed Strength
   * @default 0
   */
  subseed_strength?: number
  /**
   * Seed Resize From H
   * @default -1
   */
  seed_resize_from_h?: number
  /**
   * Seed Resize From W
   * @default -1
   */
  seed_resize_from_w?: number
  /** Sampler Name */
  sampler_name?: string
  /**
   * Batch Size
   * @default 1
   */
  batch_size?: number
  /**
   * N Iter
   * @default 1
   */
  n_iter?: number
  /**
   * Steps
   * @default 50
   */
  steps?: number
  /**
   * Cfg Scale
   * @default 7
   */
  cfg_scale?: number
  /**
   * Width
   * @default 512
   */
  width?: number
  /**
   * Height
   * @default 512
   */
  height?: number
  /** Restore Faces */
  restore_faces?: boolean
  /** Tiling */
  tiling?: boolean
  /**
   * Do Not Save Samples
   * @default false
   */
  do_not_save_samples?: boolean
  /**
   * Do Not Save Grid
   * @default false
   */
  do_not_save_grid?: boolean
  /** Eta */
  eta?: number
  /**
   * Denoising Strength
   * @default 0
   */
  denoising_strength?: number
  /** S Min Uncond */
  s_min_uncond?: number
  /** S Churn */
  s_churn?: number
  /** S Tmax */
  s_tmax?: number
  /** S Tmin */
  s_tmin?: number
  /** S Noise */
  s_noise?: number
  /** Override Settings */
  override_settings?: Record<string, never>
  /**
   * Override Settings Restore Afterwards
   * @default true
   */
  override_settings_restore_afterwards?: boolean
  /** Refiner Checkpoint */
  refiner_checkpoint?: string
  /** Refiner Switch At */
  refiner_switch_at?: number
  /**
   * Disable Extra Networks
   * @default false
   */
  disable_extra_networks?: boolean
  /** Comments */
  comments?: Record<string, never>
  /**
   * Enable Hr
   * @default false
   */
  enable_hr?: boolean
  /**
   * Firstphase Width
   * @default 0
   */
  firstphase_width?: number
  /**
   * Firstphase Height
   * @default 0
   */
  firstphase_height?: number
  /**
   * Hr Scale
   * @default 2
   */
  hr_scale?: number
  /** Hr Upscaler */
  hr_upscaler?: string
  /**
   * Hr Second Pass Steps
   * @default 0
   */
  hr_second_pass_steps?: number
  /**
   * Hr Resize X
   * @default 0
   */
  hr_resize_x?: number
  /**
   * Hr Resize Y
   * @default 0
   */
  hr_resize_y?: number
  /** Hr Checkpoint Name */
  hr_checkpoint_name?: string
  /** Hr Sampler Name */
  hr_sampler_name?: string
  /**
   * Hr Prompt
   * @default
   */
  hr_prompt?: string
  /**
   * Hr Negative Prompt
   * @default
   */
  hr_negative_prompt?: string
  /**
   * Sampler Index
   * @default Euler
   */
  sampler_index?: string
  /** Script Name */
  script_name?: string
  /**
   * Script Args
   * @default []
   */
  script_args?: unknown[]
  /**
   * Send Images
   * @default true
   */
  send_images?: boolean
  /**
   * Save Images
   * @default false
   */
  save_images?: boolean
  /**
   * Alwayson Scripts
   * @default {}
   */
  alwayson_scripts?: Record<string, never>
}

export type Txt2ImgResponse = {
  /**
   * Image
   * @description The generated image in base64 format.
   */
  images?: string[]
  /** Parameters */
  parameters: Record<string, never>
  /** Info */
  info: string
}

export type Img2ImgPayload = {
  /**
   * Prompt
   * @default
   */
  prompt?: string
  /**
   * Negative Prompt
   * @default
   */
  negative_prompt?: string
  /** Styles */
  styles?: string[]
  /**
   * Seed
   * @default -1
   */
  seed?: number
  /**
   * Subseed
   * @default -1
   */
  subseed?: number
  /**
   * Subseed Strength
   * @default 0
   */
  subseed_strength?: number
  /**
   * Seed Resize From H
   * @default -1
   */
  seed_resize_from_h?: number
  /**
   * Seed Resize From W
   * @default -1
   */
  seed_resize_from_w?: number
  /** Sampler Name */
  sampler_name?: string
  /**
   * Batch Size
   * @default 1
   */
  batch_size?: number
  /**
   * N Iter
   * @default 1
   */
  n_iter?: number
  /**
   * Steps
   * @default 50
   */
  steps?: number
  /**
   * Cfg Scale
   * @default 7
   */
  cfg_scale?: number
  /**
   * Width
   * @default 512
   */
  width?: number
  /**
   * Height
   * @default 512
   */
  height?: number
  /** Restore Faces */
  restore_faces?: boolean
  /** Tiling */
  tiling?: boolean
  /**
   * Do Not Save Samples
   * @default false
   */
  do_not_save_samples?: boolean
  /**
   * Do Not Save Grid
   * @default false
   */
  do_not_save_grid?: boolean
  /** Eta */
  eta?: number
  /**
   * Denoising Strength
   * @default 0.75
   */
  denoising_strength?: number
  /** S Min Uncond */
  s_min_uncond?: number
  /** S Churn */
  s_churn?: number
  /** S Tmax */
  s_tmax?: number
  /** S Tmin */
  s_tmin?: number
  /** S Noise */
  s_noise?: number
  /** Override Settings */
  override_settings?: Record<string, never>
  /**
   * Override Settings Restore Afterwards
   * @default true
   */
  override_settings_restore_afterwards?: boolean
  /** Refiner Checkpoint */
  refiner_checkpoint?: string
  /** Refiner Switch At */
  refiner_switch_at?: number
  /**
   * Disable Extra Networks
   * @default false
   */
  disable_extra_networks?: boolean
  /** Comments */
  comments?: Record<string, never>
  /** Init Images */
  init_images?: unknown[]
  /**
   * Resize Mode
   * @default 0
   */
  resize_mode?: number
  /** Image Cfg Scale */
  image_cfg_scale?: number
  /** Mask */
  mask?: string
  /**
   * Mask Blur X
   * @default 4
   */
  mask_blur_x?: number
  /**
   * Mask Blur Y
   * @default 4
   */
  mask_blur_y?: number
  /** Mask Blur */
  mask_blur?: number
  /**
   * Inpainting Fill
   * @default 0
   */
  inpainting_fill?: number
  /**
   * Inpaint Full Res
   * @default true
   */
  inpaint_full_res?: boolean
  /**
   * Inpaint Full Res Padding
   * @default 0
   */
  inpaint_full_res_padding?: number
  /**
   * Inpainting Mask Invert
   * @default 0
   */
  inpainting_mask_invert?: number
  /** Initial Noise Multiplier */
  initial_noise_multiplier?: number
  /** Latent Mask */
  latent_mask?: string
  /**
   * Sampler Index
   * @default Euler
   */
  sampler_index?: string
  /**
   * Include Init Images
   * @default false
   */
  include_init_images?: boolean
  /** Script Name */
  script_name?: string
  /**
   * Script Args
   * @default []
   */
  script_args?: unknown[]
  /**
   * Send Images
   * @default true
   */
  send_images?: boolean
  /**
   * Save Images
   * @default false
   */
  save_images?: boolean
  /**
   * Alwayson Scripts
   * @default {}
   */
  alwayson_scripts?: Record<string, never>
}

export type Img2ImgResponse = {
  /**
   * Image
   * @description The generated image in base64 format.
   */
  images?: string[]
  /** Parameters */
  parameters: Record<string, never>
  /** Info */
  info: string
}

export type ExtraSimpleImagePayload = {
  /**
   * Resize Mode
   * @description Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   * @default 0
   * @enum {integer}
   */
  resize_mode?: 0 | 1
  /**
   * Show results
   * @description Should the backend return the generated image?
   * @default true
   */
  show_extras_results?: boolean
  /**
   * GFPGAN Visibility
   * @description Sets the visibility of GFPGAN, values should be between 0 and 1.
   * @default 0
   */
  gfpgan_visibility?: number
  /**
   * CodeFormer Visibility
   * @description Sets the visibility of CodeFormer, values should be between 0 and 1.
   * @default 0
   */
  codeformer_visibility?: number
  /**
   * CodeFormer Weight
   * @description Sets the weight of CodeFormer, values should be between 0 and 1.
   * @default 0
   */
  codeformer_weight?: number
  /**
   * Upscaling Factor
   * @description By how much to upscale the image, only used when resize_mode=0.
   * @default 2
   */
  upscaling_resize?: number
  /**
   * Target Width
   * @description Target width for the upscaler to hit. Only used when resize_mode=1.
   * @default 512
   */
  upscaling_resize_w?: number
  /**
   * Target Height
   * @description Target height for the upscaler to hit. Only used when resize_mode=1.
   * @default 512
   */
  upscaling_resize_h?: number
  /**
   * Crop to fit
   * @description Should the upscaler crop the image to fit in the chosen size?
   * @default true
   */
  upscaling_crop?: boolean
  /**
   * Main upscaler
   * @description The name of the main upscaler to use, it has to be one of this list:
   * @default None
   */
  upscaler_1?: string
  /**
   * Secondary upscaler
   * @description The name of the secondary upscaler to use, it has to be one of this list:
   * @default None
   */
  upscaler_2?: string
  /**
   * Secondary upscaler visibility
   * @description Sets the visibility of secondary upscaler, values should be between 0 and 1.
   * @default 0
   */
  extras_upscaler_2_visibility?: number
  /**
   * Upscale first
   * @description Should the upscaler run before restoring faces?
   * @default false
   */
  upscale_first?: boolean
  /**
   * Image
   * @description Image to work on, must be a Base64 string containing the image's data.
   * @default
   */
  image?: string
}
export type ExtraSimpleImageResponse = {
  /**
   * HTML info
   * @description A series of HTML tags containing the process info.
   */
  html_info: string
  /**
   * Image
   * @description The generated image in base64 format.
   */
  image?: string
}

export type ExtraBatchImagesPayload = {
  /**
   * Resize Mode
   * @description Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   * @default 0
   * @enum {integer}
   */
  resize_mode?: 0 | 1
  /**
   * Show results
   * @description Should the backend return the generated image?
   * @default true
   */
  show_extras_results?: boolean
  /**
   * GFPGAN Visibility
   * @description Sets the visibility of GFPGAN, values should be between 0 and 1.
   * @default 0
   */
  gfpgan_visibility?: number
  /**
   * CodeFormer Visibility
   * @description Sets the visibility of CodeFormer, values should be between 0 and 1.
   * @default 0
   */
  codeformer_visibility?: number
  /**
   * CodeFormer Weight
   * @description Sets the weight of CodeFormer, values should be between 0 and 1.
   * @default 0
   */
  codeformer_weight?: number
  /**
   * Upscaling Factor
   * @description By how much to upscale the image, only used when resize_mode=0.
   * @default 2
   */
  upscaling_resize?: number
  /**
   * Target Width
   * @description Target width for the upscaler to hit. Only used when resize_mode=1.
   * @default 512
   */
  upscaling_resize_w?: number
  /**
   * Target Height
   * @description Target height for the upscaler to hit. Only used when resize_mode=1.
   * @default 512
   */
  upscaling_resize_h?: number
  /**
   * Crop to fit
   * @description Should the upscaler crop the image to fit in the chosen size?
   * @default true
   */
  upscaling_crop?: boolean
  /**
   * Main upscaler
   * @description The name of the main upscaler to use, it has to be one of this list:
   * @default None
   */
  upscaler_1?: string
  /**
   * Secondary upscaler
   * @description The name of the secondary upscaler to use, it has to be one of this list:
   * @default None
   */
  upscaler_2?: string
  /**
   * Secondary upscaler visibility
   * @description Sets the visibility of secondary upscaler, values should be between 0 and 1.
   * @default 0
   */
  extras_upscaler_2_visibility?: number
  /**
   * Upscale first
   * @description Should the upscaler run before restoring faces?
   * @default false
   */
  upscale_first?: boolean
  /**
   * Images
   * @description List of images to work on. Must be Base64 strings
   */
  imageList: {
    /**
     * File data
     * @description Base64 representation of the file
     */
    data: string
    /** File name */
    name: string
  }[]
}
export type ExtraBatchImagesResponse = {
  /**
   * HTML info
   * @description A series of HTML tags containing the process info.
   */
  html_info: string
  /**
   * Images
   * @description The generated images in base64 format.
   */
  images: string[]
}

export type PngInfoPayload = {
  /**
   * Image
   * @description The base64 encoded PNG image
   */
  image: string
}
export type PngInfoResponse = {
  /**
   * Image info
   * @description A string with the parameters used to generate the image
   */
  info: string
  /**
   * Items
   * @description An object containing all the info the image had
   */
  items: Record<string, never>
}

export type ProgressResponse = {
  /**
   * Progress
   * @description The progress with a range of 0 to 1
   */
  progress: number
  /** ETA in secs */
  eta_relative: number
  /**
   * State
   * @description The current state snapshot
   */
  state: Record<string, never>
  /**
   * Current image
   * @description The current image in base64 format. opts.show_progress_every_n_steps is required for this to work.
   */
  current_image?: string
  /**
   * Info text
   * @description Info text used by WebUI.
   */
  textinfo?: string
}

export type InterrogatePayload = {
  /**
   * Image
   * @description Image to work on, must be a Base64 string containing the image's data.
   * @default
   */
  image?: string
  /**
   * Model
   * @description The interrogate model used.
   * @default clip
   */
  model?: string
}
export type InterrogateResponse = {}

export type InterruptResponse = {}

export type SkipResponse = {}

export type OptionsPayload = Record<string, never>
export type OptionsResponse = {
  /**
   * Samples Save
   * @description Always save all generated images
   * @default true
   */
  samples_save?: boolean
  /**
   * Samples Format
   * @description File format for images
   * @default png
   */
  samples_format?: string
  /**
   * Samples Filename Pattern
   * @description Images filename pattern
   * @default
   */
  samples_filename_pattern?: unknown
  /**
   * Save Images Add Number
   * @description Add number to filename when saving
   * @default true
   */
  save_images_add_number?: boolean
  /**
   * Grid Save
   * @description Always save all generated image grids
   * @default true
   */
  grid_save?: boolean
  /**
   * Grid Format
   * @description File format for grids
   * @default png
   */
  grid_format?: string
  /**
   * Grid Extended Filename
   * @description Add extended info (seed, prompt) to filename when saving grid
   * @default false
   */
  grid_extended_filename?: unknown
  /**
   * Grid Only If Multiple
   * @description Do not save grids consisting of one picture
   * @default true
   */
  grid_only_if_multiple?: boolean
  /**
   * Grid Prevent Empty Spots
   * @description Prevent empty spots in grid (when set to autodetect)
   * @default false
   */
  grid_prevent_empty_spots?: unknown
  /**
   * Grid Zip Filename Pattern
   * @description Archive filename pattern
   * @default
   */
  grid_zip_filename_pattern?: unknown
  /**
   * N Rows
   * @description Grid row count; use -1 for autodetect and 0 for it to be same as batch size
   * @default -1
   */
  n_rows?: number
  /**
   * Font
   * @description Font for image grids that have text
   * @default
   */
  font?: unknown
  /**
   * Grid Text Active Color
   * @description Text color for image grids
   * @default #000000
   */
  grid_text_active_color?: string
  /**
   * Grid Text Inactive Color
   * @description Inactive text color for image grids
   * @default #999999
   */
  grid_text_inactive_color?: string
  /**
   * Grid Background Color
   * @description Background color for image grids
   * @default #ffffff
   */
  grid_background_color?: string
  /**
   * Enable Pnginfo
   * @description Save text information about generation parameters as chunks to png files
   * @default true
   */
  enable_pnginfo?: boolean
  /**
   * Save Txt
   * @description Create a text file next to every image with generation parameters.
   * @default false
   */
  save_txt?: unknown
  /**
   * Save Images Before Face Restoration
   * @description Save a copy of image before doing face restoration.
   * @default false
   */
  save_images_before_face_restoration?: unknown
  /**
   * Save Images Before Highres Fix
   * @description Save a copy of image before applying highres fix.
   * @default false
   */
  save_images_before_highres_fix?: unknown
  /**
   * Save Images Before Color Correction
   * @description Save a copy of image before applying color correction to img2img results
   * @default false
   */
  save_images_before_color_correction?: unknown
  /**
   * Save Mask
   * @description For inpainting, save a copy of the greyscale mask
   * @default false
   */
  save_mask?: unknown
  /**
   * Save Mask Composite
   * @description For inpainting, save a masked composite
   * @default false
   */
  save_mask_composite?: unknown
  /**
   * Jpeg Quality
   * @description Quality for saved jpeg images
   * @default 80
   */
  jpeg_quality?: number
  /**
   * Webp Lossless
   * @description Use lossless compression for webp images
   * @default false
   */
  webp_lossless?: unknown
  /**
   * Export For 4Chan
   * @description Save copy of large images as JPG
   * @default true
   */
  export_for_4chan?: boolean
  /**
   * Img Downscale Threshold
   * @description File size limit for the above option, MB
   * @default 4
   */
  img_downscale_threshold?: number
  /**
   * Target Side Length
   * @description Width/height limit for the above option, in pixels
   * @default 4000
   */
  target_side_length?: number
  /**
   * Img Max Size Mp
   * @description Maximum image size
   * @default 200
   */
  img_max_size_mp?: number
  /**
   * Use Original Name Batch
   * @description Use original name for output filename during batch process in extras tab
   * @default true
   */
  use_original_name_batch?: boolean
  /**
   * Use Upscaler Name As Suffix
   * @description Use upscaler name as filename suffix in the extras tab
   * @default false
   */
  use_upscaler_name_as_suffix?: unknown
  /**
   * Save Selected Only
   * @description When using 'Save' button, only save a single selected image
   * @default true
   */
  save_selected_only?: boolean
  /**
   * Save Init Img
   * @description Save init images when using img2img
   * @default false
   */
  save_init_img?: unknown
  /**
   * Temp Dir
   * @description Directory for temporary images; leave empty for default
   * @default
   */
  temp_dir?: unknown
  /**
   * Clean Temp Dir At Start
   * @description Cleanup non-default temporary directory when starting webui
   * @default false
   */
  clean_temp_dir_at_start?: unknown
  /**
   * Save Incomplete Images
   * @description Save incomplete images
   * @default false
   */
  save_incomplete_images?: unknown
  /**
   * Outdir Samples
   * @description Output directory for images; if empty, defaults to three directories below
   * @default
   */
  outdir_samples?: unknown
  /**
   * Outdir Txt2Img Samples
   * @description Output directory for txt2img images
   * @default outputs/txt2img-images
   */
  outdir_txt2img_samples?: string
  /**
   * Outdir Img2Img Samples
   * @description Output directory for img2img images
   * @default outputs/img2img-images
   */
  outdir_img2img_samples?: string
  /**
   * Outdir Extras Samples
   * @description Output directory for images from extras tab
   * @default outputs/extras-images
   */
  outdir_extras_samples?: string
  /**
   * Outdir Grids
   * @description Output directory for grids; if empty, defaults to two directories below
   * @default
   */
  outdir_grids?: unknown
  /**
   * Outdir Txt2Img Grids
   * @description Output directory for txt2img grids
   * @default outputs/txt2img-grids
   */
  outdir_txt2img_grids?: string
  /**
   * Outdir Img2Img Grids
   * @description Output directory for img2img grids
   * @default outputs/img2img-grids
   */
  outdir_img2img_grids?: string
  /**
   * Outdir Save
   * @description Directory for saving images using the Save button
   * @default log/images
   */
  outdir_save?: string
  /**
   * Outdir Init Images
   * @description Directory for saving init images when using img2img
   * @default outputs/init-images
   */
  outdir_init_images?: string
  /**
   * Save To Dirs
   * @description Save images to a subdirectory
   * @default true
   */
  save_to_dirs?: boolean
  /**
   * Grid Save To Dirs
   * @description Save grids to a subdirectory
   * @default true
   */
  grid_save_to_dirs?: boolean
  /**
   * Use Save To Dirs For Ui
   * @description When using "Save" button, save images to a subdirectory
   * @default false
   */
  use_save_to_dirs_for_ui?: unknown
  /**
   * Directories Filename Pattern
   * @description Directory name pattern
   * @default [date]
   */
  directories_filename_pattern?: string
  /**
   * Directories Max Prompt Words
   * @description Max prompt words for [prompt_words] pattern
   * @default 8
   */
  directories_max_prompt_words?: number
  /**
   * Esrgan Tile
   * @description Tile size for ESRGAN upscalers.
   * @default 192
   */
  ESRGAN_tile?: number
  /**
   * Esrgan Tile Overlap
   * @description Tile overlap for ESRGAN upscalers.
   * @default 8
   */
  ESRGAN_tile_overlap?: number
  /**
   * Realesrgan Enabled Models
   * @description Select which Real-ESRGAN models to show in the web UI.
   * @default [
   *   "R-ESRGAN 4x+",
   *   "R-ESRGAN 4x+ Anime6B"
   * ]
   */
  realesrgan_enabled_models?: unknown[]
  /**
   * Upscaler For Img2Img
   * @description Upscaler for img2img
   */
  upscaler_for_img2img?: unknown
  /**
   * Face Restoration
   * @description Restore faces
   * @default false
   */
  face_restoration?: unknown
  /**
   * Face Restoration Model
   * @description Face restoration model
   * @default CodeFormer
   */
  face_restoration_model?: string
  /**
   * Code Former Weight
   * @description CodeFormer weight
   * @default 0.5
   */
  code_former_weight?: number
  /**
   * Face Restoration Unload
   * @description Move face restoration model from VRAM into RAM after processing
   * @default false
   */
  face_restoration_unload?: unknown
  /**
   * Auto Launch Browser
   * @description Automatically open webui in browser on startup
   * @default Local
   */
  auto_launch_browser?: string
  /**
   * Show Warnings
   * @description Show warnings in console.
   * @default false
   */
  show_warnings?: unknown
  /**
   * Show Gradio Deprecation Warnings
   * @description Show gradio deprecation warnings in console.
   * @default true
   */
  show_gradio_deprecation_warnings?: boolean
  /**
   * Memmon Poll Rate
   * @description VRAM usage polls per second during generation.
   * @default 8
   */
  memmon_poll_rate?: number
  /**
   * Samples Log Stdout
   * @description Always print all generation info to standard output
   * @default false
   */
  samples_log_stdout?: unknown
  /**
   * Multiple Tqdm
   * @description Add a second progress bar to the console that shows progress for an entire job.
   * @default true
   */
  multiple_tqdm?: boolean
  /**
   * Print Hypernet Extra
   * @description Print extra hypernetwork information to console.
   * @default false
   */
  print_hypernet_extra?: unknown
  /**
   * List Hidden Files
   * @description Load models/files in hidden directories
   * @default true
   */
  list_hidden_files?: boolean
  /**
   * Disable Mmap Load Safetensors
   * @description Disable memmapping for loading .safetensors files.
   * @default false
   */
  disable_mmap_load_safetensors?: unknown
  /**
   * Hide Ldm Prints
   * @description Prevent Stability-AI's ldm/sgm modules from printing noise to console.
   * @default true
   */
  hide_ldm_prints?: boolean
  /**
   * Api Enable Requests
   * @description Allow http:// and https:// URLs for input images in API
   * @default true
   */
  api_enable_requests?: boolean
  /**
   * Api Forbid Local Requests
   * @description Forbid URLs to local resources
   * @default true
   */
  api_forbid_local_requests?: boolean
  /**
   * Api Useragent
   * @description User agent for requests
   * @default
   */
  api_useragent?: unknown
  /**
   * Unload Models When Training
   * @description Move VAE and CLIP to RAM when training if possible. Saves VRAM.
   * @default false
   */
  unload_models_when_training?: unknown
  /**
   * Pin Memory
   * @description Turn on pin_memory for DataLoader. Makes training slightly faster but can increase memory usage.
   * @default false
   */
  pin_memory?: unknown
  /**
   * Save Optimizer State
   * @description Saves Optimizer state as separate *.optim file. Training of embedding or HN can be resumed with the matching optim file.
   * @default false
   */
  save_optimizer_state?: unknown
  /**
   * Save Training Settings To Txt
   * @description Save textual inversion and hypernet settings to a text file whenever training starts.
   * @default true
   */
  save_training_settings_to_txt?: boolean
  /**
   * Dataset Filename Word Regex
   * @description Filename word regex
   * @default
   */
  dataset_filename_word_regex?: unknown
  /**
   * Dataset Filename Join String
   * @description Filename join string
   * @default
   */
  dataset_filename_join_string?: string
  /**
   * Training Image Repeats Per Epoch
   * @description Number of repeats for a single input image per epoch; used only for displaying epoch number
   * @default 1
   */
  training_image_repeats_per_epoch?: number
  /**
   * Training Write Csv Every
   * @description Save an csv containing the loss to log directory every N steps, 0 to disable
   * @default 500
   */
  training_write_csv_every?: number
  /**
   * Training Xattention Optimizations
   * @description Use cross attention optimizations while training
   * @default false
   */
  training_xattention_optimizations?: unknown
  /**
   * Training Enable Tensorboard
   * @description Enable tensorboard logging.
   * @default false
   */
  training_enable_tensorboard?: unknown
  /**
   * Training Tensorboard Save Images
   * @description Save generated images within tensorboard.
   * @default false
   */
  training_tensorboard_save_images?: unknown
  /**
   * Training Tensorboard Flush Every
   * @description How often, in seconds, to flush the pending tensorboard events and summaries to disk.
   * @default 120
   */
  training_tensorboard_flush_every?: number
  /**
   * Sd Model Checkpoint
   * @description Stable Diffusion checkpoint
   */
  sd_model_checkpoint?: unknown
  /**
   * Sd Checkpoints Limit
   * @description Maximum number of checkpoints loaded at the same time
   * @default 1
   */
  sd_checkpoints_limit?: number
  /**
   * Sd Checkpoints Keep In Cpu
   * @description Only keep one model on device
   * @default true
   */
  sd_checkpoints_keep_in_cpu?: boolean
  /**
   * Sd Checkpoint Cache
   * @description Checkpoints to cache in RAM
   * @default 0
   */
  sd_checkpoint_cache?: unknown
  /**
   * Sd Unet
   * @description SD Unet
   * @default Automatic
   */
  sd_unet?: string
  /**
   * Enable Quantization
   * @description Enable quantization in K samplers for sharper and cleaner results. This may change existing seeds
   * @default false
   */
  enable_quantization?: unknown
  /**
   * Enable Emphasis
   * @description Enable emphasis
   * @default true
   */
  enable_emphasis?: boolean
  /**
   * Enable Batch Seeds
   * @description Make K-diffusion samplers produce same images in a batch as when making a single image
   * @default true
   */
  enable_batch_seeds?: boolean
  /**
   * Comma Padding Backtrack
   * @description Prompt word wrap length limit
   * @default 20
   */
  comma_padding_backtrack?: number
  /**
   * Clip Stop At Last Layers
   * @description Clip skip
   * @default 1
   */
  CLIP_stop_at_last_layers?: number
  /**
   * Upcast Attn
   * @description Upcast cross attention layer to float32
   * @default false
   */
  upcast_attn?: unknown
  /**
   * Randn Source
   * @description Random number generator source.
   * @default GPU
   */
  randn_source?: string
  /**
   * Tiling
   * @description Tiling
   * @default false
   */
  tiling?: unknown
  /**
   * Hires Fix Refiner Pass
   * @description Hires fix: which pass to enable refiner for
   * @default second pass
   */
  hires_fix_refiner_pass?: string
  /**
   * Sdxl Crop Top
   * @description crop top coordinate
   * @default 0
   */
  sdxl_crop_top?: unknown
  /**
   * Sdxl Crop Left
   * @description crop left coordinate
   * @default 0
   */
  sdxl_crop_left?: unknown
  /**
   * Sdxl Refiner Low Aesthetic Score
   * @description SDXL low aesthetic score
   * @default 2.5
   */
  sdxl_refiner_low_aesthetic_score?: number
  /**
   * Sdxl Refiner High Aesthetic Score
   * @description SDXL high aesthetic score
   * @default 6
   */
  sdxl_refiner_high_aesthetic_score?: number
  /**
   * Sd Vae Explanation
   * @default <abbr title='Variational autoencoder'>VAE</abbr> is a neural network that transforms a standard <abbr title='red/green/blue'>RGB</abbr>
   * image into latent space representation and back. Latent space representation is what stable diffusion is working on during sampling
   * (i.e. when the progress bar is between empty and full). For txt2img, VAE is used to create a resulting image after the sampling is finished.
   * For img2img, VAE is used to process user's input image before the sampling, and to create an image after sampling.
   */
  sd_vae_explanation?: string
  /**
   * Sd Vae Checkpoint Cache
   * @description VAE Checkpoints to cache in RAM
   * @default 0
   */
  sd_vae_checkpoint_cache?: unknown
  /**
   * Sd Vae
   * @description SD VAE
   * @default Automatic
   */
  sd_vae?: string
  /**
   * Sd Vae Overrides Per Model Preferences
   * @description Selected VAE overrides per-model preferences
   * @default true
   */
  sd_vae_overrides_per_model_preferences?: boolean
  /**
   * Auto Vae Precision
   * @description Automatically revert VAE to 32-bit floats
   * @default true
   */
  auto_vae_precision?: boolean
  /**
   * Sd Vae Encode Method
   * @description VAE type for encode
   * @default Full
   */
  sd_vae_encode_method?: string
  /**
   * Sd Vae Decode Method
   * @description VAE type for decode
   * @default Full
   */
  sd_vae_decode_method?: string
  /**
   * Inpainting Mask Weight
   * @description Inpainting conditioning mask strength
   * @default 1
   */
  inpainting_mask_weight?: number
  /**
   * Initial Noise Multiplier
   * @description Noise multiplier for img2img
   * @default 1
   */
  initial_noise_multiplier?: number
  /**
   * Img2Img Extra Noise
   * @description Extra noise multiplier for img2img and hires fix
   * @default 0
   */
  img2img_extra_noise?: unknown
  /**
   * Img2Img Color Correction
   * @description Apply color correction to img2img results to match original colors.
   * @default false
   */
  img2img_color_correction?: unknown
  /**
   * Img2Img Fix Steps
   * @description With img2img, do exactly the amount of steps the slider specifies.
   * @default false
   */
  img2img_fix_steps?: unknown
  /**
   * Img2Img Background Color
   * @description With img2img, fill transparent parts of the input image with this color.
   * @default #ffffff
   */
  img2img_background_color?: string
  /**
   * Img2Img Editor Height
   * @description Height of the image editor
   * @default 720
   */
  img2img_editor_height?: number
  /**
   * Img2Img Sketch Default Brush Color
   * @description Sketch initial brush color
   * @default #ffffff
   */
  img2img_sketch_default_brush_color?: string
  /**
   * Img2Img Inpaint Mask Brush Color
   * @description Inpaint mask brush color
   * @default #ffffff
   */
  img2img_inpaint_mask_brush_color?: string
  /**
   * Img2Img Inpaint Sketch Default Brush Color
   * @description Inpaint sketch initial brush color
   * @default #ffffff
   */
  img2img_inpaint_sketch_default_brush_color?: string
  /**
   * Return Mask
   * @description For inpainting, include the greyscale mask in results for web
   * @default false
   */
  return_mask?: unknown
  /**
   * Return Mask Composite
   * @description For inpainting, include masked composite in results for web
   * @default false
   */
  return_mask_composite?: unknown
  /**
   * Cross Attention Optimization
   * @description Cross attention optimization
   * @default Automatic
   */
  cross_attention_optimization?: string
  /**
   * S Min Uncond
   * @description Negative Guidance minimum sigma
   * @default 0
   */
  s_min_uncond?: unknown
  /**
   * Token Merging Ratio
   * @description Token merging ratio
   * @default 0
   */
  token_merging_ratio?: unknown
  /**
   * Token Merging Ratio Img2Img
   * @description Token merging ratio for img2img
   * @default 0
   */
  token_merging_ratio_img2img?: unknown
  /**
   * Token Merging Ratio Hr
   * @description Token merging ratio for high-res pass
   * @default 0
   */
  token_merging_ratio_hr?: unknown
  /**
   * Pad Cond Uncond
   * @description Pad prompt/negative prompt to be same length
   * @default false
   */
  pad_cond_uncond?: unknown
  /**
   * Persistent Cond Cache
   * @description Persistent cond cache
   * @default true
   */
  persistent_cond_cache?: boolean
  /**
   * Batch Cond Uncond
   * @description Batch cond/uncond
   * @default true
   */
  batch_cond_uncond?: boolean
  /**
   * Use Old Emphasis Implementation
   * @description Use old emphasis implementation. Can be useful to reproduce old seeds.
   * @default false
   */
  use_old_emphasis_implementation?: unknown
  /**
   * Use Old Karras Scheduler Sigmas
   * @description Use old karras scheduler sigmas (0.1 to 10).
   * @default false
   */
  use_old_karras_scheduler_sigmas?: unknown
  /**
   * No Dpmpp Sde Batch Determinism
   * @description Do not make DPM++ SDE deterministic across different batch sizes.
   * @default false
   */
  no_dpmpp_sde_batch_determinism?: unknown
  /**
   * Use Old Hires Fix Width Height
   * @description For hires fix, use width/height sliders to set final resolution rather than first pass (disables Upscale by, Resize width/height to).
   * @default false
   */
  use_old_hires_fix_width_height?: unknown
  /**
   * Dont Fix Second Order Samplers Schedule
   * @description Do not fix prompt schedule for second order samplers.
   * @default false
   */
  dont_fix_second_order_samplers_schedule?: unknown
  /**
   * Hires Fix Use Firstpass Conds
   * @description For hires fix, calculate conds of second pass using extra networks of first pass.
   * @default false
   */
  hires_fix_use_firstpass_conds?: unknown
  /**
   * Use Old Scheduling
   * @description Use old prompt editing timelines.
   * @default false
   */
  use_old_scheduling?: unknown
  /**
   * Interrogate Keep Models In Memory
   * @description Keep models in VRAM
   * @default false
   */
  interrogate_keep_models_in_memory?: unknown
  /**
   * Interrogate Return Ranks
   * @description Include ranks of model tags matches in results.
   * @default false
   */
  interrogate_return_ranks?: unknown
  /**
   * Interrogate Clip Num Beams
   * @description BLIP: num_beams
   * @default 1
   */
  interrogate_clip_num_beams?: number
  /**
   * Interrogate Clip Min Length
   * @description BLIP: minimum description length
   * @default 24
   */
  interrogate_clip_min_length?: number
  /**
   * Interrogate Clip Max Length
   * @description BLIP: maximum description length
   * @default 48
   */
  interrogate_clip_max_length?: number
  /**
   * Interrogate Clip Dict Limit
   * @description CLIP: maximum number of lines in text file
   * @default 1500
   */
  interrogate_clip_dict_limit?: number
  /**
   * Interrogate Clip Skip Categories
   * @description CLIP: skip inquire categories
   * @default []
   */
  interrogate_clip_skip_categories?: unknown
  /**
   * Interrogate Deepbooru Score Threshold
   * @description deepbooru: score threshold
   * @default 0.5
   */
  interrogate_deepbooru_score_threshold?: number
  /**
   * Deepbooru Sort Alpha
   * @description deepbooru: sort tags alphabetically
   * @default true
   */
  deepbooru_sort_alpha?: boolean
  /**
   * Deepbooru Use Spaces
   * @description deepbooru: use spaces in tags
   * @default true
   */
  deepbooru_use_spaces?: boolean
  /**
   * Deepbooru Escape
   * @description deepbooru: escape (\) brackets
   * @default true
   */
  deepbooru_escape?: boolean
  /**
   * Deepbooru Filter Tags
   * @description deepbooru: filter out those tags
   * @default
   */
  deepbooru_filter_tags?: unknown
  /**
   * Extra Networks Show Hidden Directories
   * @description Show hidden directories
   * @default true
   */
  extra_networks_show_hidden_directories?: boolean
  /**
   * Extra Networks Hidden Models
   * @description Show cards for models in hidden directories
   * @default When searched
   */
  extra_networks_hidden_models?: string
  /**
   * Extra Networks Default Multiplier
   * @description Default multiplier for extra networks
   * @default 1
   */
  extra_networks_default_multiplier?: number
  /**
   * Extra Networks Card Width
   * @description Card width for Extra Networks
   * @default 0
   */
  extra_networks_card_width?: unknown
  /**
   * Extra Networks Card Height
   * @description Card height for Extra Networks
   * @default 0
   */
  extra_networks_card_height?: unknown
  /**
   * Extra Networks Card Text Scale
   * @description Card text scale
   * @default 1
   */
  extra_networks_card_text_scale?: number
  /**
   * Extra Networks Card Show Desc
   * @description Show description on card
   * @default true
   */
  extra_networks_card_show_desc?: boolean
  /**
   * Extra Networks Add Text Separator
   * @description Extra networks separator
   * @default
   */
  extra_networks_add_text_separator?: string
  /**
   * Ui Extra Networks Tab Reorder
   * @description Extra networks tab order
   * @default
   */
  ui_extra_networks_tab_reorder?: unknown
  /**
   * Textual Inversion Print At Load
   * @description Print a list of Textual Inversion embeddings when loading model
   * @default false
   */
  textual_inversion_print_at_load?: unknown
  /**
   * Textual Inversion Add Hashes To Infotext
   * @description Add Textual Inversion hashes to infotext
   * @default true
   */
  textual_inversion_add_hashes_to_infotext?: boolean
  /**
   * Sd Hypernetwork
   * @description Add hypernetwork to prompt
   * @default None
   */
  sd_hypernetwork?: string
  /**
   * Localization
   * @description Localization
   * @default None
   */
  localization?: string
  /**
   * Gradio Theme
   * @description Gradio theme
   * @default Default
   */
  gradio_theme?: string
  /**
   * Gradio Themes Cache
   * @description Cache gradio themes locally
   * @default true
   */
  gradio_themes_cache?: boolean
  /**
   * Gallery Height
   * @description Gallery height
   * @default
   */
  gallery_height?: unknown
  /**
   * Return Grid
   * @description Show grid in results for web
   * @default true
   */
  return_grid?: boolean
  /**
   * Do Not Show Images
   * @description Do not show any images in results for web
   * @default false
   */
  do_not_show_images?: unknown
  /**
   * Send Seed
   * @description Send seed when sending prompt or image to other interface
   * @default true
   */
  send_seed?: boolean
  /**
   * Send Size
   * @description Send size when sending prompt or image to another interface
   * @default true
   */
  send_size?: boolean
  /**
   * Js Modal Lightbox
   * @description Enable full page image viewer
   * @default true
   */
  js_modal_lightbox?: boolean
  /**
   * Js Modal Lightbox Initially Zoomed
   * @description Show images zoomed in by default in full page image viewer
   * @default true
   */
  js_modal_lightbox_initially_zoomed?: boolean
  /**
   * Js Modal Lightbox Gamepad
   * @description Navigate image viewer with gamepad
   * @default false
   */
  js_modal_lightbox_gamepad?: unknown
  /**
   * Js Modal Lightbox Gamepad Repeat
   * @description Gamepad repeat period, in milliseconds
   * @default 250
   */
  js_modal_lightbox_gamepad_repeat?: number
  /**
   * Show Progress In Title
   * @description Show generation progress in window title.
   * @default true
   */
  show_progress_in_title?: boolean
  /**
   * Samplers In Dropdown
   * @description Use dropdown for sampler selection instead of radio group
   * @default true
   */
  samplers_in_dropdown?: boolean
  /**
   * Dimensions And Batch Together
   * @description Show Width/Height and Batch sliders in same row
   * @default true
   */
  dimensions_and_batch_together?: boolean
  /**
   * Keyedit Precision Attention
   * @description Ctrl+up/down precision when editing (attention:1.1)
   * @default 0.1
   */
  keyedit_precision_attention?: number
  /**
   * Keyedit Precision Extra
   * @description Ctrl+up/down precision when editing <extra networks:0.9>
   * @default 0.05
   */
  keyedit_precision_extra?: number
  /**
   * Keyedit Delimiters
   * @description Ctrl+up/down word delimiters
   * @default .,\/!?%^*;:{}=`~()
   */
  keyedit_delimiters?: string
  /**
   * Keyedit Move
   * @description Alt+left/right moves prompt elements
   * @default true
   */
  keyedit_move?: boolean
  /**
   * Quicksettings List
   * @description Quicksettings list
   * @default [
   *   "sd_model_checkpoint"
   * ]
   */
  quicksettings_list?: unknown[]
  /**
   * Ui Tab Order
   * @description UI tab order
   * @default []
   */
  ui_tab_order?: unknown
  /**
   * Hidden Tabs
   * @description Hidden UI tabs
   * @default []
   */
  hidden_tabs?: unknown
  /**
   * Ui Reorder List
   * @description txt2img/img2img UI item order
   * @default []
   */
  ui_reorder_list?: unknown
  /**
   * Hires Fix Show Sampler
   * @description Hires fix: show hires checkpoint and sampler selection
   * @default false
   */
  hires_fix_show_sampler?: unknown
  /**
   * Hires Fix Show Prompts
   * @description Hires fix: show hires prompt and negative prompt
   * @default false
   */
  hires_fix_show_prompts?: unknown
  /**
   * Disable Token Counters
   * @description Disable prompt token counters
   * @default false
   */
  disable_token_counters?: unknown
  /**
   * Add Model Hash To Info
   * @description Add model hash to generation information
   * @default true
   */
  add_model_hash_to_info?: boolean
  /**
   * Add Model Name To Info
   * @description Add model name to generation information
   * @default true
   */
  add_model_name_to_info?: boolean
  /**
   * Add User Name To Info
   * @description Add user name to generation information when authenticated
   * @default false
   */
  add_user_name_to_info?: unknown
  /**
   * Add Version To Infotext
   * @description Add program version to generation information
   * @default true
   */
  add_version_to_infotext?: boolean
  /**
   * Disable Weights Auto Swap
   * @description Disregard checkpoint information from pasted infotext
   * @default true
   */
  disable_weights_auto_swap?: boolean
  /**
   * Infotext Styles
   * @description Infer styles from prompts of pasted infotext
   * @default Apply if any
   */
  infotext_styles?: string
  /**
   * Show Progressbar
   * @description Show progressbar
   * @default true
   */
  show_progressbar?: boolean
  /**
   * Live Previews Enable
   * @description Show live previews of the created image
   * @default true
   */
  live_previews_enable?: boolean
  /**
   * Live Previews Image Format
   * @description Live preview file format
   * @default png
   */
  live_previews_image_format?: string
  /**
   * Show Progress Grid
   * @description Show previews of all images generated in a batch as a grid
   * @default true
   */
  show_progress_grid?: boolean
  /**
   * Show Progress Every N Steps
   * @description Live preview display period
   * @default 10
   */
  show_progress_every_n_steps?: number
  /**
   * Show Progress Type
   * @description Live preview method
   * @default Approx NN
   */
  show_progress_type?: string
  /**
   * Live Preview Allow Lowvram Full
   * @description Allow Full live preview method with lowvram/medvram
   * @default false
   */
  live_preview_allow_lowvram_full?: unknown
  /**
   * Live Preview Content
   * @description Live preview subject
   * @default Prompt
   */
  live_preview_content?: string
  /**
   * Live Preview Refresh Period
   * @description Progressbar and preview update period
   * @default 1000
   */
  live_preview_refresh_period?: number
  /**
   * Live Preview Fast Interrupt
   * @description Return image with chosen live preview method on interrupt
   * @default false
   */
  live_preview_fast_interrupt?: unknown
  /**
   * Hide Samplers
   * @description Hide samplers in user interface
   * @default []
   */
  hide_samplers?: unknown
  /**
   * Eta Ddim
   * @description Eta for DDIM
   * @default 0
   */
  eta_ddim?: unknown
  /**
   * Eta Ancestral
   * @description Eta for k-diffusion samplers
   * @default 1
   */
  eta_ancestral?: number
  /**
   * Ddim Discretize
   * @description img2img DDIM discretize
   * @default uniform
   */
  ddim_discretize?: string
  /**
   * S Churn
   * @description sigma churn
   * @default 0
   */
  s_churn?: unknown
  /**
   * S Tmin
   * @description sigma tmin
   * @default 0
   */
  s_tmin?: unknown
  /**
   * S Tmax
   * @description sigma tmax
   * @default 0
   */
  s_tmax?: unknown
  /**
   * S Noise
   * @description sigma noise
   * @default 1
   */
  s_noise?: number
  /**
   * K Sched Type
   * @description Scheduler type
   * @default Automatic
   */
  k_sched_type?: string
  /**
   * Sigma Min
   * @description sigma min
   * @default 0
   */
  sigma_min?: unknown
  /**
   * Sigma Max
   * @description sigma max
   * @default 0
   */
  sigma_max?: unknown
  /**
   * Rho
   * @description rho
   * @default 0
   */
  rho?: unknown
  /**
   * Eta Noise Seed Delta
   * @description Eta noise seed delta
   * @default 0
   */
  eta_noise_seed_delta?: unknown
  /**
   * Always Discard Next To Last Sigma
   * @description Always discard next-to-last sigma
   * @default false
   */
  always_discard_next_to_last_sigma?: unknown
  /**
   * Sgm Noise Multiplier
   * @description SGM noise multiplier
   * @default false
   */
  sgm_noise_multiplier?: unknown
  /**
   * Uni Pc Variant
   * @description UniPC variant
   * @default bh1
   */
  uni_pc_variant?: string
  /**
   * Uni Pc Skip Type
   * @description UniPC skip type
   * @default time_uniform
   */
  uni_pc_skip_type?: string
  /**
   * Uni Pc Order
   * @description UniPC order
   * @default 3
   */
  uni_pc_order?: number
  /**
   * Uni Pc Lower Order Final
   * @description UniPC lower order final
   * @default true
   */
  uni_pc_lower_order_final?: boolean
  /**
   * Postprocessing Enable In Main Ui
   * @description Enable postprocessing operations in txt2img and img2img tabs
   * @default []
   */
  postprocessing_enable_in_main_ui?: unknown
  /**
   * Postprocessing Operation Order
   * @description Postprocessing operation order
   * @default []
   */
  postprocessing_operation_order?: unknown
  /**
   * Upscaling Max Images In Cache
   * @description Maximum number of images in upscaling cache
   * @default 5
   */
  upscaling_max_images_in_cache?: number
  /**
   * Disabled Extensions
   * @description Disable these extensions
   * @default []
   */
  disabled_extensions?: unknown
  /**
   * Disable All Extensions
   * @description Disable all extensions (preserves the list of disabled extensions)
   * @default none
   */
  disable_all_extensions?: string
  /**
   * Restore Config State File
   * @description Config state file to restore from, under 'config-states/' folder
   * @default
   */
  restore_config_state_file?: unknown
  /**
   * Sd Checkpoint Hash
   * @description SHA256 hash of the current checkpoint
   * @default
   */
  sd_checkpoint_hash?: unknown
}

export type CmdFlagsResponse = {
  /**
   * F
   * @description ==SUPPRESS==
   * @default false
   */
  f?: boolean
  /**
   * Update All Extensions
   * @description launch.py argument: download updates for all extensions when starting the program
   * @default false
   */
  update_all_extensions?: boolean
  /**
   * Skip Python Version Check
   * @description launch.py argument: do not check python version
   * @default false
   */
  skip_python_version_check?: boolean
  /**
   * Skip Torch Cuda Test
   * @description launch.py argument: do not check if CUDA is able to work properly
   * @default false
   */
  skip_torch_cuda_test?: boolean
  /**
   * Reinstall Xformers
   * @description launch.py argument: install the appropriate version of xformers even if you have some version already installed
   * @default false
   */
  reinstall_xformers?: boolean
  /**
   * Reinstall Torch
   * @description launch.py argument: install the appropriate version of torch even if you have some version already installed
   * @default false
   */
  reinstall_torch?: boolean
  /**
   * Update Check
   * @description launch.py argument: check for updates at startup
   * @default false
   */
  update_check?: boolean
  /**
   * Test Server
   * @description launch.py argument: configure server for testing
   * @default false
   */
  test_server?: boolean
  /**
   * Log Startup
   * @description launch.py argument: print a detailed log of what's happening at startup
   * @default false
   */
  log_startup?: boolean
  /**
   * Skip Prepare Environment
   * @description launch.py argument: skip all environment preparation
   * @default false
   */
  skip_prepare_environment?: boolean
  /**
   * Skip Install
   * @description launch.py argument: skip installation of packages
   * @default false
   */
  skip_install?: boolean
  /**
   * Dump Sysinfo
   * @description launch.py argument: dump limited sysinfo file (without information about extensions, options) to disk and quit
   * @default false
   */
  dump_sysinfo?: boolean
  /**
   * Loglevel
   * @description log level; one of: CRITICAL, ERROR, WARNING, INFO, DEBUG
   */
  loglevel?: string
  /**
   * Do Not Download Clip
   * @description do not download CLIP model even if it's not included in the checkpoint
   * @default false
   */
  do_not_download_clip?: boolean
  /**
   * Data Dir
   * @description base path where all user data is stored
   * @default APP_DIR
   */
  data_dir?: string
  /**
   * Config
   * @description path to config which constructs model
   * @default APP_DIR\configs\v1-inference.yaml
   */
  config?: string
  /**
   * Ckpt
   * @description path to checkpoint of stable diffusion model; if specified, this checkpoint will be added to the list of checkpoints and loaded
   * @default APP_DIR\model.ckpt
   */
  ckpt?: string
  /**
   * Ckpt Dir
   * @description Path to directory with stable diffusion checkpoints
   */
  ckpt_dir?: string
  /**
   * Vae Dir
   * @description Path to directory with VAE files
   */
  vae_dir?: string
  /**
   * Gfpgan Dir
   * @description GFPGAN directory
   * @default ./GFPGAN
   */
  gfpgan_dir?: string
  /**
   * Gfpgan Model
   * @description GFPGAN model file name
   */
  gfpgan_model?: string
  /**
   * No Half
   * @description do not switch the model to 16-bit floats
   * @default false
   */
  no_half?: boolean
  /**
   * No Half Vae
   * @description do not switch the VAE model to 16-bit floats
   * @default false
   */
  no_half_vae?: boolean
  /**
   * No Progressbar Hiding
   * @description do not hide progressbar in gradio UI (we hide it because it slows down ML if you have hardware acceleration in browser)
   * @default false
   */
  no_progressbar_hiding?: boolean
  /**
   * Max Batch Count
   * @description maximum batch count value for the UI
   * @default 16
   */
  max_batch_count?: number
  /**
   * Embeddings Dir
   * @description embeddings directory for textual inversion (default: embeddings)
   * @default APP_DIR\embeddings
   */
  embeddings_dir?: string
  /**
   * Textual Inversion Templates Dir
   * @description directory with textual inversion templates
   * @default APP_DIR\textual_inversion_templates
   */
  textual_inversion_templates_dir?: string
  /**
   * Hypernetwork Dir
   * @description hypernetwork directory
   * @default APP_DIR\models\hypernetworks
   */
  hypernetwork_dir?: string
  /**
   * Localizations Dir
   * @description localizations directory
   * @default APP_DIR\localizations
   */
  localizations_dir?: string
  /**
   * Allow Code
   * @description allow custom script execution from webui
   * @default false
   */
  allow_code?: boolean
  /**
   * Medvram
   * @description enable stable diffusion model optimizations for sacrificing a little speed for low VRM usage
   * @default false
   */
  medvram?: boolean
  /**
   * Medvram Sdxl
   * @description enable --medvram optimization just for SDXL models
   * @default false
   */
  medvram_sdxl?: boolean
  /**
   * Lowvram
   * @description enable stable diffusion model optimizations for sacrificing a lot of speed for very low VRM usage
   * @default false
   */
  lowvram?: boolean
  /**
   * Lowram
   * @description load stable diffusion checkpoint weights to VRAM instead of RAM
   * @default false
   */
  lowram?: boolean
  /**
   * Always Batch Cond Uncond
   * @description does not do anything
   * @default false
   */
  always_batch_cond_uncond?: boolean
  /**
   * Unload Gfpgan
   * @description does not do anything.
   * @default false
   */
  unload_gfpgan?: boolean
  /**
   * Precision
   * @description evaluate at this precision
   * @default autocast
   */
  precision?: string
  /**
   * Upcast Sampling
   * @description upcast sampling. No effect with --no-half. Usually produces similar results to --no-half with better performance while using less memory.
   * @default false
   */
  upcast_sampling?: boolean
  /**
   * Share
   * @description use share=True for gradio and make the UI accessible through their site
   * @default false
   */
  share?: boolean
  /**
   * Ngrok
   * @description ngrok authtoken, alternative to gradio --share
   */
  ngrok?: string
  /**
   * Ngrok Region
   * @description does not do anything.
   * @default
   */
  ngrok_region?: string
  /**
   * Ngrok Options
   * @description The options to pass to ngrok in JSON format, e.g.: '{"authtoken_from_env":true, "basic_auth":"user:password", "oauth_provider":"google", "oauth_allow_emails":"user@asdf.com"}'
   * @default {}
   */
  ngrok_options?: Record<string, never>
  /**
   * Enable Insecure Extension Access
   * @description enable extensions tab regardless of other options
   * @default false
   */
  enable_insecure_extension_access?: boolean
  /**
   * Codeformer Models Path
   * @description Path to directory with codeformer model file(s).
   * @default APP_DIR\models\Codeformer
   */
  codeformer_models_path?: string
  /**
   * Gfpgan Models Path
   * @description Path to directory with GFPGAN model file(s).
   * @default APP_DIR\models\GFPGAN
   */
  gfpgan_models_path?: string
  /**
   * Esrgan Models Path
   * @description Path to directory with ESRGAN model file(s).
   * @default APP_DIR\models\ESRGAN
   */
  esrgan_models_path?: string
  /**
   * Bsrgan Models Path
   * @description Path to directory with BSRGAN model file(s).
   * @default APP_DIR\models\BSRGAN
   */
  bsrgan_models_path?: string
  /**
   * Realesrgan Models Path
   * @description Path to directory with RealESRGAN model file(s).
   * @default APP_DIR\models\RealESRGAN
   */
  realesrgan_models_path?: string
  /**
   * Clip Models Path
   * @description Path to directory with CLIP model file(s).
   */
  clip_models_path?: string
  /**
   * Xformers
   * @description enable xformers for cross attention layers
   * @default false
   */
  xformers?: boolean
  /**
   * Force Enable Xformers
   * @description enable xformers for cross attention layers regardless of whether the checking code thinks you can run it; do not make bug reports if this fails to work
   * @default false
   */
  force_enable_xformers?: boolean
  /**
   * Xformers Flash Attention
   * @description enable xformers with Flash Attention to improve reproducibility (supported for SD2.x or variant only)
   * @default false
   */
  xformers_flash_attention?: boolean
  /**
   * Deepdanbooru
   * @description does not do anything
   * @default false
   */
  deepdanbooru?: boolean
  /**
   * Opt Split Attention
   * @description prefer Doggettx's cross-attention layer optimization for automatic choice of optimization
   * @default false
   */
  opt_split_attention?: boolean
  /**
   * Opt Sub Quad Attention
   * @description prefer memory efficient sub-quadratic cross-attention layer optimization for automatic choice of optimization
   * @default false
   */
  opt_sub_quad_attention?: boolean
  /**
   * Sub Quad Q Chunk Size
   * @description query chunk size for the sub-quadratic cross-attention layer optimization to use
   * @default 1024
   */
  sub_quad_q_chunk_size?: number
  /**
   * Sub Quad Kv Chunk Size
   * @description kv chunk size for the sub-quadratic cross-attention layer optimization to use
   */
  sub_quad_kv_chunk_size?: string
  /**
   * Sub Quad Chunk Threshold
   * @description the percentage of VRAM threshold for the sub-quadratic cross-attention layer optimization to use chunking
   */
  sub_quad_chunk_threshold?: string
  /**
   * Opt Split Attention Invokeai
   * @description prefer InvokeAI's cross-attention layer optimization for automatic choice of optimization
   * @default false
   */
  opt_split_attention_invokeai?: boolean
  /**
   * Opt Split Attention V1
   * @description prefer older version of split attention optimization for automatic choice of optimization
   * @default false
   */
  opt_split_attention_v1?: boolean
  /**
   * Opt Sdp Attention
   * @description prefer scaled dot product cross-attention layer optimization for automatic choice of optimization; requires PyTorch 2.*
   * @default false
   */
  opt_sdp_attention?: boolean
  /**
   * Opt Sdp No Mem Attention
   * @description prefer scaled dot product cross-attention layer optimization without memory efficient attention for automatic choice of optimization, makes image generation deterministic; requires PyTorch 2.*
   * @default false
   */
  opt_sdp_no_mem_attention?: boolean
  /**
   * Disable Opt Split Attention
   * @description prefer no cross-attention layer optimization for automatic choice of optimization
   * @default false
   */
  disable_opt_split_attention?: boolean
  /**
   * Disable Nan Check
   * @description do not check if produced images/latent spaces have nans; useful for running without a checkpoint in CI
   * @default false
   */
  disable_nan_check?: boolean
  /**
   * Use Cpu
   * @description use CPU as torch device for specified modules
   * @default []
   */
  use_cpu?: unknown[]
  /**
   * Disable Model Loading Ram Optimization
   * @description disable an optimization that reduces RAM use when loading a model
   * @default false
   */
  disable_model_loading_ram_optimization?: boolean
  /**
   * Listen
   * @description launch gradio with 0.0.0.0 as server name, allowing to respond to network requests
   * @default false
   */
  listen?: boolean
  /**
   * Port
   * @description launch gradio with given server port, you need root/admin rights for ports < 1024, defaults to 7860 if available
   */
  port?: string
  /**
   * Show Negative Prompt
   * @description does not do anything
   * @default false
   */
  show_negative_prompt?: boolean
  /**
   * Ui Config File
   * @description filename to use for ui configuration
   * @default APP_DIR\ui-config.json
   */
  ui_config_file?: string
  /**
   * Hide Ui Dir Config
   * @description hide directory configuration from webui
   * @default false
   */
  hide_ui_dir_config?: boolean
  /**
   * Freeze Settings
   * @description disable editing settings
   * @default false
   */
  freeze_settings?: boolean
  /**
   * Ui Settings File
   * @description filename to use for ui settings
   * @default APP_DIR\config.json
   */
  ui_settings_file?: string
  /**
   * Gradio Debug
   * @description launch gradio with --debug option
   * @default false
   */
  gradio_debug?: boolean
  /**
   * Gradio Auth
   * @description set gradio authentication like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
   */
  gradio_auth?: string
  /**
   * Gradio Auth Path
   * @description set gradio authentication file path ex. "/path/to/auth/file" same auth format as --gradio-auth
   */
  gradio_auth_path?: string
  /**
   * Gradio Img2Img Tool
   * @description does not do anything
   */
  gradio_img2img_tool?: string
  /**
   * Gradio Inpaint Tool
   * @description does not do anything
   */
  gradio_inpaint_tool?: string
  /**
   * Gradio Allowed Path
   * @description add path to gradio's allowed_paths, make it possible to serve files from it
   * @default [
   *   "D:\\Documents\\stable-diffusion-webui"
   * ]
   */
  gradio_allowed_path?: unknown[]
  /**
   * Opt Channelslast
   * @description change memory type for stable diffusion to channels last
   * @default false
   */
  opt_channelslast?: boolean
  /**
   * Styles File
   * @description filename to use for styles
   * @default APP_DIR\styles.csv
   */
  styles_file?: string
  /**
   * Autolaunch
   * @description open the webui URL in the system's default browser upon launch
   * @default false
   */
  autolaunch?: boolean
  /**
   * Theme
   * @description launches the UI with light or dark theme
   */
  theme?: string
  /**
   * Use Textbox Seed
   * @description use textbox for seeds in UI (no up/down, but possible to input long seeds)
   * @default false
   */
  use_textbox_seed?: boolean
  /**
   * Disable Console Progressbars
   * @description do not output progressbars to console
   * @default false
   */
  disable_console_progressbars?: boolean
  /**
   * Enable Console Prompts
   * @description print prompts to console when generating with txt2img and img2img
   * @default false
   */
  enable_console_prompts?: boolean
  /**
   * Vae Path
   * @description Checkpoint to use as VAE; setting this argument disables all settings related to VAE
   */
  vae_path?: string
  /**
   * Disable Safe Unpickle
   * @description disable checking pytorch models for malicious code
   * @default false
   */
  disable_safe_unpickle?: boolean
  /**
   * Api
   * @description use api=True to launch the API together with the webui (use --nowebui instead for only the API)
   * @default false
   */
  api?: boolean
  /**
   * Api Auth
   * @description Set authentication for API like "username:password"; or comma-delimit multiple like "u1:p1,u2:p2,u3:p3"
   */
  api_auth?: string
  /**
   * Api Log
   * @description use api-log=True to enable logging of all API requests
   * @default false
   */
  api_log?: boolean
  /**
   * Nowebui
   * @description use api=True to launch the API instead of the webui
   * @default false
   */
  nowebui?: boolean
  /**
   * Ui Debug Mode
   * @description Don't load model to quickly launch UI
   * @default false
   */
  ui_debug_mode?: boolean
  /**
   * Device Id
   * @description Select the default CUDA device to use (export CUDA_VISIBLE_DEVICES=0,1,etc might be needed before)
   */
  device_id?: string
  /**
   * Administrator
   * @description Administrator rights
   * @default false
   */
  administrator?: boolean
  /**
   * Cors Allow Origins
   * @description Allowed CORS origin(s) in the form of a comma-separated list (no spaces)
   */
  cors_allow_origins?: string
  /**
   * Cors Allow Origins Regex
   * @description Allowed CORS origin(s) in the form of a single regular expression
   */
  cors_allow_origins_regex?: string
  /**
   * Tls Keyfile
   * @description Partially enables TLS, requires --tls-certfile to fully function
   */
  tls_keyfile?: string
  /**
   * Tls Certfile
   * @description Partially enables TLS, requires --tls-keyfile to fully function
   */
  tls_certfile?: string
  /**
   * Disable Tls Verify
   * @description When passed, enables the use of self-signed certificates.
   */
  disable_tls_verify?: string
  /**
   * Server Name
   * @description Sets hostname of server
   */
  server_name?: string
  /**
   * Gradio Queue
   * @description does not do anything
   * @default true
   */
  gradio_queue?: boolean
  /**
   * No Gradio Queue
   * @description Disables gradio queue; causes the webpage to use http requests instead of websockets; was the defaul in earlier versions
   * @default false
   */
  no_gradio_queue?: boolean
  /**
   * Skip Version Check
   * @description Do not check versions of torch and xformers
   * @default false
   */
  skip_version_check?: boolean
  /**
   * No Hashing
   * @description disable sha256 hashing of checkpoints to help loading performance
   * @default false
   */
  no_hashing?: boolean
  /**
   * No Download Sd Model
   * @description don't download SD1.5 model even if no model is found in --ckpt-dir
   * @default false
   */
  no_download_sd_model?: boolean
  /**
   * Subpath
   * @description customize the subpath for gradio, use with reverse proxy
   */
  subpath?: string
  /**
   * Add Stop Route
   * @description add /_stop route to stop server
   * @default false
   */
  add_stop_route?: boolean
  /**
   * Api Server Stop
   * @description enable server stop/restart/kill via api
   * @default false
   */
  api_server_stop?: boolean
  /**
   * Timeout Keep Alive
   * @description set timeout_keep_alive for uvicorn
   * @default 30
   */
  timeout_keep_alive?: number
  /**
   * Disable All Extensions
   * @description prevent all extensions from running regardless of any other settings
   * @default false
   */
  disable_all_extensions?: boolean
  /**
   * Disable Extra Extensions
   * @description  prevent all extensions except built-in from running regardless of any other settings
   * @default false
   */
  disable_extra_extensions?: boolean
  /**
   * Controlnet Dir
   * @description Path to directory with ControlNet models
   */
  controlnet_dir?: string
  /**
   * Controlnet Annotator Models Path
   * @description Path to directory with annotator model directories
   */
  controlnet_annotator_models_path?: string
  /**
   * No Half Controlnet
   * @description do not switch the ControlNet models to 16-bit floats (only needed without --no-half)
   */
  no_half_controlnet?: string
  /**
   * Controlnet Preprocessor Cache Size
   * @description Cache size for controlnet preprocessor results
   * @default 16
   */
  controlnet_preprocessor_cache_size?: number
  /**
   * Controlnet Loglevel
   * @description Set the log level (DEBUG, INFO, WARNING, ERROR, CRITICAL)
   * @default INFO
   */
  controlnet_loglevel?: string
  /**
   * Ldsr Models Path
   * @description Path to directory with LDSR model file(s).
   * @default APP_DIR\models\LDSR
   */
  ldsr_models_path?: string
  /**
   * Lora Dir
   * @description Path to directory with Lora networks.
   * @default APP_DIR\models\Lora
   */
  lora_dir?: string
  /**
   * Lyco Dir Backcompat
   * @description Path to directory with LyCORIS networks (for backawards compatibility; can also use --lyco-dir).
   * @default APP_DIR\models\LyCORIS
   */
  lyco_dir_backcompat?: string
  /**
   * Scunet Models Path
   * @description Path to directory with ScuNET model file(s).
   * @default APP_DIR\models\ScuNET
   */
  scunet_models_path?: string
  /**
   * Swinir Models Path
   * @description Path to directory with SwinIR model file(s).
   * @default APP_DIR\models\SwinIR
   */
  swinir_models_path?: string
}

export type SamplersResponse = {
  /** Name */
  name: string
  /** Aliases */
  aliases: string[]
  /** Options */
  options: {
    [key: string]: string
  }
}[]

export type UpscalersResponse = {
  /** Name */
  name: string
  /** Model Name */
  model_name?: string
  /** Path */
  model_path?: string
  /** URL */
  model_url?: string
  /** Scale */
  scale?: number
}[]

export type LatentUpscaleModesResponse = {
  /** Name */
  name: string
}[]

export type SdModelsResponse = {
  /** Title */
  title: string
  /** Model Name */
  model_name: string
  /** Short hash */
  hash?: string
  /** sha256 hash */
  sha256?: string
  /** Filename */
  filename: string
  /** Config file */
  config?: string
}[]

export type SdVaeResponse = {
  /** Model Name */
  model_name: string
  /** Filename */
  filename: string
}[]

export type HypernetworksResponse = {
  /** Name */
  name: string
  /** Path */
  path?: string
}[]

export type FaceRestorersResponse = {
  /** Name */
  name: string
  /** Path */
  cmd_dir?: string
}[]

export type RealesrganModelsResponse = {
  /** Name */
  name: string
  /** Path */
  path?: string
  /** Scale */
  scale?: number
}[]

export type PromptStylesResponse = {
  /** Name */
  name: string
  /** Prompt */
  prompt?: string
  /** Negative Prompt */
  negative_prompt?: string
}[]

type EmbeddingItem = {
  /**
   * Step
   * @description The number of steps that were used to train this embedding, if available
   */
  step?: number
  /**
   * SD Checkpoint
   * @description The hash of the checkpoint this embedding was trained on, if available
   */
  sd_checkpoint?: string
  /**
   * SD Checkpoint Name
   * @description The name of the checkpoint this embedding was trained on, if available. Note that this is the name that was used by the trainer; for a stable identifier, use `sd_checkpoint` instead
   */
  sd_checkpoint_name?: string
  /**
   * Shape
   * @description The length of each individual vector in the embedding
   */
  shape: number
  /**
   * Vectors
   * @description The number of vectors in the embedding
   */
  vectors: number
}

export type EmbeddingsResponse = {
  /**
   * Loaded
   * @description Embeddings loaded for the current model
   */
  loaded: {
    [key: string]: EmbeddingItem
  }
  /**
   * Skipped
   * @description Embeddings skipped for the current model (likely due to architecture incompatibility)
   */
  skipped: {
    [key: string]: EmbeddingItem
  }
}

export type RefreshCheckpointsResponse = {}

export type RefreshVaeResponse = {}

export type CreateEmbeddingPayload = Record<string, never>
export type CreateEmbeddingResponse = {
  /**
   * Create info
   * @description Response string from create embedding or hypernetwork task.
   */
  info: string
}

export type CreateHypernetworkPayload = Record<string, never>
export type CreateHypernetworkResponse = {
  /**
   * Create info
   * @description Response string from create embedding or hypernetwork task.
   */
  info: string
}

export type PreprocessPayload = Record<string, never>
export type PreprocessResponse = {
  /**
   * Preprocess info
   * @description Response string from preprocessing task.
   */
  info: string
}

export type TrainEmbeddingPayload = Record<string, never>
export type TrainEmbeddingResponse = {
  /**
   * Train info
   * @description Response string from train embedding or hypernetwork task.
   */
  info: string
}

export type TrainHypernetworkPayload = Record<string, never>
export type TrainHypernetworkResponse = {
  /**
   * Train info
   * @description Response string from train embedding or hypernetwork task.
   */
  info: string
}

export type MemoryResponse = {
  /**
   * RAM
   * @description System memory stats
   */
  ram: Record<string, never>
  /**
   * CUDA
   * @description nVidia CUDA memory stats
   */
  cuda: Record<string, never>
}

export type UnloadCheckpointResponse = {}

export type RefreshCheckpointResponse = {}

export type ScriptsResponse = {
  /**
   * Txt2img
   * @description Titles of scripts (txt2img)
   */
  txt2img?: unknown[]
  /**
   * Img2img
   * @description Titles of scripts (img2img)
   */
  img2img?: unknown[]
}

type ScriptArg = {
  /**
   * Label
   * @description Name of the argument in UI
   */
  label?: string
  /**
   * Value
   * @description Default value of the argument
   */
  value?: unknown
  /**
   * Minimum
   * @description Minimum allowed value for the argumentin UI
   */
  minimum?: unknown
  /**
   * Minimum
   * @description Maximum allowed value for the argumentin UI
   */
  maximum?: unknown
  /**
   * Minimum
   * @description Step for changing value of the argumentin UI
   */
  step?: unknown
  /**
   * Choices
   * @description Possible values for the argument
   */
  choices?: string[]
}

export type ScriptInfoResponse = {
  /**
   * Name
   * @description Script name
   */
  name?: string
  /**
   * IsAlwayson
   * @description Flag specifying whether this script is an alwayson script
   */
  is_alwayson?: boolean
  /**
   * IsImg2img
   * @description Flag specifying whether this script is an img2img script
   */
  is_img2img?: boolean
  /**
   * Arguments
   * @description List of script's arguments
   */
  args: ScriptArg[]
}

export type LorasResponse = {}

export type RefreshLorasResponse = {}
