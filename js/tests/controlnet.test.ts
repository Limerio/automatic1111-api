import { beforeAll, describe, expect, it } from 'vitest'
import { ControlNet } from '../src/index.ts'

describe('ControlNet Test', () => {
  let controlNet: ControlNet

  beforeAll(() => {
    controlNet = new ControlNet('localhost:7860')
  })

  it('Version', async () => {
    expect(await controlNet.version()).toBe()
  })
  it('Model List', async () => {
    expect(await controlNet.modelList()).toBe()
  })
  it('Module List', async () => {
    expect(await controlNet.moduleList()).toBe()
  })
  it('Control Types', async () => {
    expect(await controlNet.controlTypes()).toBe()
  })
  it('Settings', async () => {
    expect(await controlNet.settings()).toBe()
  })
  it('Detect', async () => {
    expect(await controlNet.detect()).toBe()
  })
})
