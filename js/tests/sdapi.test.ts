import { beforeAll, describe, expect, it } from 'vitest'
import { SDApi } from '../src/index.ts'

describe('SDApi Test', () => {
  let sdapi: SDApi

  beforeAll(() => {
    sdapi = new SDApi('localhost:7860')
  })

  it('Text To Img', async () => {
    const txt2ImgResult = await sdapi.txt2img()

    expect(txt2ImgResult.status).toBe(200)
    expect(txt2ImgResult.data).toBe()
  })
  it('Img To Img', async () => {
    const img2imgResult = await sdapi.img2img()

    expect(img2imgResult.status).toBe(200)
    expect(img2imgResult.data).toBe()
  })
  it('Extra Single Image', async () => {
    const extraSingleImageResult = await sdapi.extraSingleImage()

    expect(extraSingleImageResult.status).toBe(200)
    expect(extraSingleImageResult.data).toBe()
  })
  it('Extra Batch Images', async () => {
    const extraBatchImagesResult = await sdapi.extraBatchImages()

    expect(extraBatchImagesResult.status).toBe(200)
    expect(extraBatchImagesResult.data).toBe()
  })
  it('Png Info', async () => {
    const pngInfoResult = await sdapi.pngInfo()

    expect(pngInfoResult.status).toBe(200)
    expect(pngInfoResult.data).toBe()
  })
  it('Progress', async () => {
    const progressResult = await sdapi.progress()

    expect(progressResult.status).toBe(200)
    expect(progressResult.data).toBe()
  })
  it('Interrogate', async () => {
    const interrogateResult = await sdapi.interrogate()

    expect(interrogateResult.status).toBe(200)
    expect(interrogateResult.data).toBe()
  })
  it('Interrupt', async () => {
    const interruptResult = await sdapi.interrupt()

    expect(interruptResult.status).toBe(200)
    expect(interruptResult.data).toBe()
  })
  it('Skip', async () => {
    const skipResult = await sdapi.skip()

    expect(skipResult.status).toBe(200)
    expect(skipResult.data).toBe()
  })
  it('Options', async () => {
    const optionsResult = await sdapi.options()

    expect(optionsResult.status).toBe(200)
    expect(optionsResult.data).toBe()
  })
  it('Set Options', async () => {
    const setOptionsResult = await sdapi.setOptions()

    expect(setOptionsResult.status).toBe(200)
    expect(setOptionsResult.data).toBe()
  })
  it('Cmd Flags', async () => {
    const cmdFlagsResult = await sdapi.cmdFlags()

    expect(cmdFlagsResult.status).toBe(200)
    expect(cmdFlagsResult.data).toBe()
  })
  it('Samplers', async () => {
    const samplersResult = await sdapi.samplers()

    expect(samplersResult.status).toBe(200)
    expect(samplersResult.data).toBe()
  })
  it('UpScalers', async () => {
    const upscalersResult = await sdapi.upscalers()

    expect(upscalersResult.status).toBe(200)
    expect(upscalersResult.data).toBe()
  })
  it('Latent Upscale Modes', async () => {
    const latentUpscaleModesResult = await sdapi.latentUpscaleModes()

    expect(latentUpscaleModesResult.status).toBe(200)
    expect(latentUpscaleModesResult.data).toBe()
  })
  it('SD Models', async () => {
    const sdModelsResult = await sdapi.sdModels()

    expect(sdModelsResult.status).toBe(200)
    expect(sdModelsResult.data).toBe()
  })
  it('SD Vae', async () => {
    const sdVaeResult = await sdapi.sdVae()

    expect(sdVaeResult.status).toBe(200)
    expect(sdVaeResult.data).toBe()
  })
  it('Hypernetworks', async () => {
    const hypernetworksResult = await sdapi.hypernetworks()

    expect(hypernetworksResult.status).toBe(200)
    expect(hypernetworksResult.data).toBe()
  })
  it('Face Restorers', async () => {
    const faceRestorersResult = await sdapi.faceRestorers()

    expect(faceRestorersResult.status).toBe(200)
    expect(faceRestorersResult.data).toBe()
  })
  it('Realesrgan Models', async () => {
    const realesrganModelsResult = await sdapi.realesrganModels()

    expect(realesrganModelsResult.status).toBe(200)
    expect(realesrganModelsResult.data).toBe()
  })
  it('Prompt Styles', async () => {
    const promptStylesResult = await sdapi.promptStyles()

    expect(promptStylesResult.status).toBe(200)
    expect(promptStylesResult.data).toBe()
  })
  it('Embeddings', async () => {
    const embeddingsResult = await sdapi.embeddings()

    expect(embeddingsResult.status).toBe(200)
    expect(embeddingsResult.data).toBe()
  })
  it('Refresh Checkpoints', async () => {
    const refreshCheckpointsResult = await sdapi.refreshCheckpoints()

    expect(refreshCheckpointsResult.status).toBe(200)
    expect(refreshCheckpointsResult.data).toBe()
  })
  it('Refresh Vae', async () => {
    const refreshVaeResult = await sdapi.refreshVae()

    expect(refreshVaeResult.status).toBe(200)
    expect(refreshVaeResult.data).toBe()
  })
  it('Create Embedding', async () => {
    const createEmbeddingResult = await sdapi.createEmbedding()

    expect(createEmbeddingResult.status).toBe(200)
    expect(createEmbeddingResult.data).toBe()
  })
  it('Create Hypernetwork', async () => {
    const createHypernetworkResult = await sdapi.createHypernetwork()

    expect(createHypernetworkResult.status).toBe(200)
    expect(createHypernetworkResult.data).toBe()
  })
  it('Preprocess', async () => {
    const preprocessResult = await sdapi.preprocess()

    expect(preprocessResult.status).toBe(200)
    expect(preprocessResult.data).toBe()
  })
  it('Train Embedding', async () => {
    const trainEmbeddingResult = await sdapi.trainEmbedding()

    expect(trainEmbeddingResult.status).toBe(200)
    expect(trainEmbeddingResult.data).toBe()
  })
  it('Train Hypernetwork', async () => {
    const trainHypernetworkResult = await sdapi.trainHypernetwork()

    expect(trainHypernetworkResult.status).toBe(200)
    expect(trainHypernetworkResult.data).toBe()
  })
  it('Memory', async () => {
    const memoryResult = await sdapi.memory()

    expect(memoryResult.status).toBe(200)
    expect(memoryResult.data).toBe()
  })
  it('Unload Checkpoint', async () => {
    const unloadCheckpointResult = await sdapi.unloadCheckpoint()

    expect(unloadCheckpointResult.status).toBe(200)
    expect(unloadCheckpointResult.data).toBe()
  })
  it('Scripts', async () => {
    const scriptsResult = await sdapi.scripts()

    expect(scriptsResult.status).toBe(200)
    expect(scriptsResult.data).toBe()
  })
  it('Script Info', async () => {
    const scriptInfoResult = await sdapi.scriptInfo()

    expect(scriptInfoResult.status).toBe(200)
    expect(scriptInfoResult.data).toBe()
  })
  it('Loras', async () => {
    const lorasResult = await sdapi.loras()

    expect(lorasResult.status).toBe(200)
    expect(lorasResult.data).toBe()
  })
  it('Refresh Loras', async () => {
    const refreshLorasResult = await sdapi.refreshLoras()

    expect(refreshLorasResult.status).toBe(200)
    expect(refreshLorasResult.data).toBe()
  })
})
