import { Api, api } from '../api.ts'
import { Response } from '../types.ts'
import type {
  CmdFlagsResponse,
  CreateEmbeddingPayload,
  CreateEmbeddingResponse,
  CreateHypernetworkPayload,
  CreateHypernetworkResponse,
  EmbeddingsResponse,
  ExtraBatchImagesPayload,
  ExtraBatchImagesResponse,
  ExtraSimpleImagePayload,
  ExtraSimpleImageResponse,
  FaceRestorersResponse,
  HypernetworksResponse,
  Img2ImgPayload,
  Img2ImgResponse,
  InterrogatePayload,
  InterrogateResponse,
  InterruptResponse,
  LatentUpscaleModesResponse,
  LorasResponse,
  MemoryResponse,
  OptionsPayload,
  OptionsResponse,
  PngInfoPayload,
  PngInfoResponse,
  PreprocessPayload,
  PreprocessResponse,
  ProgressResponse,
  PromptStylesResponse,
  RealesrganModelsResponse,
  RefreshCheckpointsResponse,
  RefreshLorasResponse,
  RefreshVaeResponse,
  SamplersResponse,
  ScriptInfoResponse,
  ScriptsResponse,
  SdModelsResponse,
  SdVaeResponse,
  SkipResponse,
  TrainEmbeddingPayload,
  TrainEmbeddingResponse,
  TrainHypernetworkPayload,
  TrainHypernetworkResponse,
  Txt2ImgPayload,
  Txt2ImgResponse,
  UnloadCheckpointResponse,
  UpscalersResponse,
} from './types.ts'

export class SDApi {
  private readonly api: Api

  constructor(url: string) {
    this.api = api(url, 'sdapi/v1')
  }

  async txt2Img(payload: Txt2ImgPayload): Promise<Response<Txt2ImgResponse>> {
    return await this.api.request<Txt2ImgResponse, Txt2ImgPayload>(
      'POST',
      'txt2img',
      payload,
    )
  }

  async img2Img(payload: Img2ImgPayload): Promise<Response<Img2ImgResponse>> {
    return await this.api.request<Img2ImgResponse, Img2ImgPayload>(
      'POST',
      'img2img',
      payload,
    )
  }

  async extraSingleImage(
    payload: ExtraSimpleImagePayload,
  ): Promise<Response<ExtraSimpleImageResponse>> {
    return await this.api.request<
      ExtraSimpleImageResponse,
      ExtraSimpleImagePayload
    >('POST', 'extra-single-image', payload)
  }

  async extraBatchImages(
    payload: ExtraBatchImagesPayload,
  ): Promise<Response<ExtraBatchImagesResponse>> {
    return await this.api.request<
      ExtraBatchImagesResponse,
      ExtraBatchImagesPayload
    >('POST', 'extra-batch-images', payload)
  }

  async pngInfo(payload: PngInfoPayload): Promise<Response<PngInfoResponse>> {
    return await this.api.request<PngInfoResponse, PngInfoPayload>(
      'POST',
      'png-info',
      payload,
    )
  }

  async progress(): Promise<Response<ProgressResponse>> {
    return await this.api.request<ProgressResponse, undefined>(
      'GET',
      'progress',
    )
  }

  async interrogate(
    payload: InterrogatePayload,
  ): Promise<Promise<InterrogateResponse>> {
    return await this.api.request<InterrogateResponse, InterrogatePayload>(
      'POST',
      'interrogate',
      payload,
    )
  }

  async interrupt(): Promise<Response<InterruptResponse>> {
    return await this.api.request<InterruptResponse, undefined>(
      'POST',
      'interrupt',
    )
  }

  async skip(): Promise<Response<SkipResponse>> {
    return await this.api.request<SkipResponse, undefined>('POST', 'skip')
  }

  async options(): Promise<Response<OptionsResponse>> {
    return await this.api.request<OptionsResponse, undefined>('GET', 'options')
  }

  async setOptions(
    payload: OptionsPayload,
  ): Promise<Response<OptionsResponse>> {
    return await this.api.request<OptionsResponse, OptionsPayload>(
      'POST',
      'options',
      payload,
    )
  }

  async cmdFlags(): Promise<Response<CmdFlagsResponse>> {
    return await this.api.request<CmdFlagsResponse, undefined>(
      'GET',
      'cmd-flags',
    )
  }

  async samplers(): Promise<Response<SamplersResponse>> {
    return await this.api.request<SamplersResponse, undefined>(
      'GET',
      'samplers',
    )
  }

  async upscalers(): Promise<Response<UpscalersResponse>> {
    return await this.api.request<UpscalersResponse, undefined>(
      'GET',
      'upscalers',
    )
  }

  async latentUpscaleModes(): Promise<Response<LatentUpscaleModesResponse>> {
    return await this.api.request<LatentUpscaleModesResponse, undefined>(
      'GET',
      'latent-upscale-modes',
    )
  }

  async sdModels(): Promise<Response<SdModelsResponse>> {
    return await this.api.request<SdModelsResponse, undefined>(
      'GET',
      'sd-models',
    )
  }

  async sdVae(): Promise<Response<SdVaeResponse>> {
    return await this.api.request<SdVaeResponse, undefined>('GET', 'sd-vae')
  }

  async hypernetworks(): Promise<Response<HypernetworksResponse>> {
    return await this.api.request<HypernetworksResponse, undefined>(
      'GET',
      'hypernetworks',
    )
  }

  async faceRestorers(): Promise<Response<FaceRestorersResponse>> {
    return await this.api.request<FaceRestorersResponse, undefined>(
      'GET',
      'face-restorers',
    )
  }

  async realesrganModels(): Promise<Response<RealesrganModelsResponse>> {
    return await this.api.request<RealesrganModelsResponse, undefined>(
      'GET',
      'realesrgan-models',
    )
  }

  async promptStyles(): Promise<Response<PromptStylesResponse>> {
    return await this.api.request<PromptStylesResponse, undefined>(
      'GET',
      'prompt-styles',
    )
  }

  async embeddings(): Promise<Response<EmbeddingsResponse>> {
    return await this.api.request<EmbeddingsResponse, undefined>(
      'GET',
      'embeddings',
    )
  }

  async refreshCheckpoints(): Promise<Response<RefreshCheckpointsResponse>> {
    return await this.api.request<RefreshCheckpointsResponse, undefined>(
      'POST',
      'refresh-checkpoints',
    )
  }

  async refreshVae(): Promise<Response<RefreshVaeResponse>> {
    return await this.api.request<RefreshVaeResponse, undefined>(
      'POST',
      'refresh-vae',
    )
  }

  async createEmbedding(
    payload: CreateEmbeddingPayload,
  ): Promise<Response<CreateEmbeddingResponse>> {
    return await this.api.request<
      CreateEmbeddingResponse,
      CreateEmbeddingPayload
    >('POST', 'create/embedding', payload)
  }

  async createHypernetwork(
    payload: CreateHypernetworkPayload,
  ): Promise<Response<CreateHypernetworkResponse>> {
    return await this.api.request<
      CreateHypernetworkResponse,
      CreateHypernetworkPayload
    >('POST', 'create/hypernetwork', payload)
  }

  async preprocess(
    payload: PreprocessPayload,
  ): Promise<Response<PreprocessResponse>> {
    return await this.api.request<PreprocessResponse, PreprocessPayload>(
      'POST',
      'preprocess',
      payload,
    )
  }

  async trainEmbedding(
    payload: TrainEmbeddingPayload,
  ): Promise<Response<TrainEmbeddingResponse>> {
    return await this.api.request<
      TrainEmbeddingResponse,
      TrainEmbeddingPayload
    >('POST', 'train/embedding', payload)
  }

  async trainHypernetwork(
    payload: TrainHypernetworkPayload,
  ): Promise<Response<TrainHypernetworkResponse>> {
    return await this.api.request<
      TrainHypernetworkResponse,
      TrainHypernetworkPayload
    >('POST', 'train/hypernetwork', payload)
  }

  async memory(): Promise<Response<MemoryResponse>> {
    return await this.api.request<MemoryResponse, undefined>('GET', 'memory')
  }

  async unloadCheckpoint(): Promise<Response<UnloadCheckpointResponse>> {
    return await this.api.request<UnloadCheckpointResponse, undefined>(
      'POST',
      'unload-checkpoint',
    )
  }

  async scripts(): Promise<Response<ScriptsResponse>> {
    return await this.api.request<ScriptsResponse, undefined>('GET', 'scripts')
  }

  async scriptInfo(): Promise<Response<ScriptInfoResponse>> {
    return await this.api.request<ScriptInfoResponse, undefined>(
      'GET',
      'script-info',
    )
  }

  async loras(): Promise<Response<LorasResponse>> {
    return await this.api.request<LorasResponse, undefined>('GET', 'loras')
  }

  async refreshLoras(): Promise<Response<RefreshLorasResponse>> {
    return await this.api.request<RefreshLorasResponse, undefined>(
      'POST',
      'refresh-loras',
    )
  }
}
