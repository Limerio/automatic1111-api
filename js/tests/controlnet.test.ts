import { beforeAll, describe, expect, it } from 'vitest'
import { ControlNet } from '../src/index.ts'

describe('ControlNet Test', () => {
  let controlNet: ControlNet

  beforeAll(() => {
    controlNet = new ControlNet('localhost:7860')
  })

  it('Version', async () => {
    const versionResult = await controlNet.version()

    expect(versionResult.status).toBe(200)
    expect(versionResult.data).toBe()
  })
  it('Model List', async () => {
    const modelListResult = await controlNet.modelList()

    expect(modelListResult.status).toBe(200)
    expect(modelListResult.data).toBe()
  })
  it('Module List', async () => {
    const moduleListResult = await controlNet.moduleList()

    expect(moduleListResult.status).toBe(200)
    expect(moduleListResult.data).toBe()
  })
  it('Control Types', async () => {
    const controlTypesResult = await controlNet.controlTypes()

    expect(controlTypesResult.status).toBe(200)
    expect(controlTypesResult.data).toBe()
  })
  it('Settings', async () => {
    const settingsResult = await controlNet.settings()

    expect(settingsResult.status).toBe(200)
    expect(settingsResult.data).toBe()
  })
  it('Detect', async () => {
    const detectResult = await controlNet.detect()

    expect(detectResult.status).toBe(200)
    expect(detectResult.data).toBe()
  })
})
