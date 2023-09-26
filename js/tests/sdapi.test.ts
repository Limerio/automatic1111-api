import { beforeAll, describe, expect, it } from 'vitest'
import { SDApi } from '../src/index.ts'

describe('SDApi Test', () => {
  let sdapi: SDApi

  beforeAll(() => {
    sdapi = new SDApi('localhost:7860')
  })

  it('Text To Img', async () => {
    expect(await sdapi.txt2Img()).toBe()
  })
  it('Img To Img', async () => {
    expect(await sdapi.img2Img()).toBe()
  })
  it('Extra Single Image', async () => {
    expect(await sdapi.extraSingleImage()).toBe()
  })
  it('Extra Batch Images', async () => {
    expect(await sdapi.extraBatchImages()).toBe()
  })
  it('Png Info', async () => {
    expect(await sdapi.pngInfo()).toBe()
  })
  it('Progress', async () => {
    expect(await sdapi.progress()).toBe()
  })
  it('Interrogate', async () => {
    expect(await sdapi.interrogate()).toBe()
  })
  it('Interrupt', async () => {
    expect(await sdapi.interrupt()).toBe()
  })
  it('Skip', async () => {
    expect(await sdapi.skip()).toBe()
  })
  it('Options', async () => {
    expect(await sdapi.options()).toBe()
  })
  it('Set Options', async () => {
    expect(await sdapi.setOptions()).toBe()
  })
  it('Cmd Flags', async () => {
    expect(await sdapi.cmdFlags()).toBe()
  })
  it('Samplers', async () => {
    expect(await sdapi.samplers()).toBe()
  })
  it('UpScalers', async () => {
    expect(await sdapi.upscalers()).toBe()
  })
  it('Latent Upscale Modes', async () => {
    expect(await sdapi.latentUpscaleModes()).toBe()
  })
  it('SD Models', async () => {
    expect(await sdapi.sdModels()).toBe()
  })
  it('SD Vae', async () => {
    expect(await sdapi.sdVae()).toBe()
  })
  it('Hypernetworks', async () => {
    expect(await sdapi.hypernetworks()).toBe()
  })
  it('Face Restorers', async () => {
    expect(await sdapi.faceRestorers()).toBe()
  })
  it('Realesrgan Models', async () => {
    expect(await sdapi.realesrganModels()).toBe()
  })
  it('Prompt Styles', async () => {
    expect(await sdapi.promptStyles()).toBe()
  })
  it('Embeddings', async () => {
    expect(await sdapi.embeddings()).toBe()
  })
  it('Refresh Checkpoints', async () => {
    expect(await sdapi.refreshCheckpoints()).toBe()
  })
  it('Refresh Vae', async () => {
    expect(await sdapi.refreshVae()).toBe()
  })
  it('Create Embedding', async () => {
    expect(await sdapi.createEmbedding()).toBe()
  })
  it('Create Hypernetwork', async () => {
    expect(await sdapi.createHypernetwork()).toBe()
  })
  it('Preprocess', async () => {
    expect(await sdapi.preprocess()).toBe()
  })
  it('Train Embedding', async () => {
    expect(await sdapi.trainEmbedding()).toBe()
  })
  it('Train Hypernetwork', async () => {
    expect(await sdapi.trainHypernetwork()).toBe()
  })
  it('Memory', async () => {
    expect(await sdapi.memory()).toBe()
  })
  it('Unload Checkpoint', async () => {
    expect(await sdapi.unloadCheckpoint()).toBe()
  })
  it('Scripts', async () => {
    expect(await sdapi.scripts()).toBe()
  })
  it('Script Info', async () => {
    expect(await sdapi.scriptInfo()).toBe()
  })
  it('Loras', async () => {
    expect(await sdapi.loras()).toBe()
  })
  it('Refresh Loras', async () => {
    expect(await sdapi.refreshLoras()).toBe()
  })
})
