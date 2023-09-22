export type Txt2ImgPayload = {
  prompt: string;
  steps: number;
};

export type Txt2ImgResponse = {};

export type Img2ImgPayload = {
  prompt: string;
  steps: number;
  image: string;
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
