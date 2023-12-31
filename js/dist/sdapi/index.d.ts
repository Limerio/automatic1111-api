import type { CmdFlagsResponse, CreateEmbeddingPayload, CreateEmbeddingResponse, CreateHypernetworkPayload, CreateHypernetworkResponse, EmbeddingsResponse, ExtraBatchImagesPayload, ExtraBatchImagesResponse, ExtraSimpleImagePayload, FaceRestorersResponse, HypernetworksResponse, Img2ImgPayload, Img2ImgResponse, InterrogatePayload, InterrogateResponse, InterruptResponse, LatentUpscaleModesResponse, LorasResponse, MemoryResponse, OptionsPayload, PayloadResponse, PngInfoPayload, PngInfoResponse, PreprocessPayload, PreprocessResponse, ProgressResponse, PromptStylesResponse, RealesrganModelsResponse, RefreshCheckpointResponse, RefreshCheckpointsResponse, RefreshLorasResponse, RefreshVaeResponse, SamplersResponse, ScriptInfoResponse, ScriptsResponse, SdModelsResponse, SdVaeResponse, SkipResponse, TrainEmbeddingPayload, TrainEmbeddingResponse, TrainHypernetworkPayload, TrainHypernetworkResponse, Txt2ImgPayload, Txt2ImgResponse, UnloadCheckpointResponse, UpscalersResponse } from './types.ts';
export declare class SDApi {
    private readonly api;
    constructor(url: string);
    txt2Img(payload: Txt2ImgPayload): Promise<Txt2ImgResponse>;
    img2Img(payload: Img2ImgPayload): Promise<Img2ImgResponse>;
    extraSingleImage(payload: ExtraSimpleImagePayload): Promise<ExtraBatchImagesResponse>;
    extraBatchImages(payload: ExtraBatchImagesPayload): Promise<ExtraBatchImagesResponse>;
    pngInfo(payload: PngInfoPayload): Promise<PngInfoResponse>;
    progress(): Promise<ProgressResponse>;
    interrogate(payload: InterrogatePayload): Promise<InterrogateResponse>;
    interrupt(): Promise<InterruptResponse>;
    skip(): Promise<SkipResponse>;
    Payload(): Promise<PayloadResponse>;
    setPayload(payload: OptionsPayload): Promise<PayloadResponse>;
    cmdFlags(): Promise<CmdFlagsResponse>;
    samplers(): Promise<SamplersResponse>;
    upscalers(): Promise<UpscalersResponse>;
    latentUpscaleModes(): Promise<LatentUpscaleModesResponse>;
    sdModels(): Promise<SdModelsResponse>;
    sdVae(): Promise<SdVaeResponse>;
    hypernetworks(): Promise<HypernetworksResponse>;
    faceRestorers(): Promise<FaceRestorersResponse>;
    realesrganModels(): Promise<RealesrganModelsResponse>;
    promptStyles(): Promise<PromptStylesResponse>;
    embeddings(): Promise<EmbeddingsResponse>;
    refreshCheckpoints(): Promise<RefreshCheckpointsResponse>;
    refreshVae(): Promise<RefreshVaeResponse>;
    createEmbedding(payload: CreateEmbeddingPayload): Promise<CreateEmbeddingResponse>;
    createHypernetwork(payload: CreateHypernetworkPayload): Promise<CreateHypernetworkResponse>;
    preprocess(payload: PreprocessPayload): Promise<PreprocessResponse>;
    trainEmbedding(payload: TrainEmbeddingPayload): Promise<TrainEmbeddingResponse>;
    trainHypernetwork(payload: TrainHypernetworkPayload): Promise<TrainHypernetworkResponse>;
    memory(): Promise<MemoryResponse>;
    unloadCheckpoint(): Promise<UnloadCheckpointResponse>;
    refreshCheckpoint(): Promise<RefreshCheckpointResponse>;
    scripts(): Promise<ScriptsResponse>;
    scriptInfo(): Promise<ScriptInfoResponse>;
    loras(): Promise<LorasResponse>;
    refreshLoras(): Promise<RefreshLorasResponse>;
}
