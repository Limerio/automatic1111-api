# automatic1111-api

## Description

### Problem

I want to find a way to automate the creation of my stable diffusion images with a python or javascript codebase.

### Solution

The automatic1111, a stable diffusion web UI to create images with stable diffusion models combine with a lot of features and one of them are an web API to interacte with the system behind the web UI.

I create in 2 differents languages Typescript (this is possible to use it with Javascript) and an other with Python

## Tasks

- [x] Interact with the controlnet plugin
  - [x] GET version
  - [x] GET models list
  - [x] GET modules list
  - [x] GET control types
  - [x] GET settings
  - [x] POST detect
- [x] Interact with the stable diffusion api
  - [x] POST txt2img
  - [x] POST img2img
  - [x] POST extra-single-image
  - [x] POST extra-batch-images
  - [x] POST png-info
  - [x] GET progress
  - [x] POST interrogate
  - [x] POST skip
  - [x] GET options
  - [x] POST options
  - [x] GET cmd-flags
  - [x] GET samplers
  - [x] GET upscalers
  - [x] GET latent-upscale-modes
  - [x] GET sd-models
  - [x] GET sd-vae
  - [x] GET hypernetworks
  - [x] GET face-restorers
  - [x] GET realesrgan-models
  - [x] GET prompt-styles
  - [x] GET emdeddings
  - [x] POST refresh-checkpoints
  - [x] POST refresh-vae
  - [x] POST create embedding
  - [x] POST create hypernetwork
  - [x] POST preprocess
  - [x] POST train embedding
  - [x] POST train hypernetwork
  - [x] GET memory
  - [x] POST unload-checkpoint
  - [x] POST refresh-checkpoint
  - [x] GET scripts
  - [x] GET script-info
  - [x] GET loras
  - [x] POST refresh-loras
