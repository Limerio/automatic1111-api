import requests


def get_res(url, path):
    res = requests.get(url=f'{url}/sdapi/v1/{path}')
    return res.json()

def post_res(url, path, payload):
    res = requests.post(url=f'{url}/sdapi/v1/{path}', payload=payload)
    return res.json()

class SDAPI:
  def __init__(self, url):
    self.url = url

  def post_txt2img(self, payload):
    return post_res(self.url, 'txt2img', payload)

  def post_img2img(self, payload):
    return post_res(self.url, 'img2img', payload)

  def post_extra_single_image(self, payload):
    return post_res(self.url, 'extra-single-image', payload)

  def post_extra_batch_images(self, payload):
    return post_res(self.url, 'extra-batch-images', payload)

  def post_png_info(self, payload):
    return post_res(self.url, 'png-info', payload)

  def get_progress(self):
    return get_res(self.url, 'progress')

  def post_interrogate(self, payload):
    return post_res(self.url, 'interrogate', payload)

  def post_interrupt(self):
    return post_res(self.url, 'interrupt', {})

  def post_skip(self):
    return post_res(self.url, 'skip', {})

  def get_options(self):
    return get_res(self.url, 'options')

  def post_options(self, payload):
    return post_res(self.url, 'options', payload)

  def get_cmd_flags(self):
    return get_res(self.url, 'cmd-flags')

  def get_samplers(self):
    return get_res(self.url, 'samplers')

  def get_upscalers(self):
    return get_res(self.url, 'upscalers')

  def get_latent_upscale_modes(self):
    return get_res(self.url, 'latent-upscale-modes')

  def get_sd_models(self):
    return get_res(self.url, 'sd-models')

  def get_sd_vae(self):
    return get_res(self.url, 'sd-vae')

  def get_hypernetworks(self):
    return get_res(self.url, 'hypernetworks')

  def get_face_restorers(self):
    return get_res(self.url, 'face-restorers')
  
  def get_realesrgan_models(self):
    return get_res(self.url, 'realesrgan-models')

  def get_prompt_styles(self):
    return get_res(self.url, 'prompt-styles')

  def get_embeddings(self):
    return get_res(self.url, 'embeddings')

  def post_refresh_checkpoints(self):
    return post_res(self.url, 'refresh-checkpoints', {})

  def post_refresh_vae(self):
    return post_res(self.url, 'refresh-vae', {})

  def post_create_embedding(self, payload):
    return post_res(self.url, 'create/embedding', payload)

  def post_create_hypernetwork(self, payload):
    return post_res(self.url, 'create/hypernetwork', payload)
  
  def post_preprocess(self, payload):
    return post_res(self.url, 'preprocess', payload)

  def post_train_embedding(self, payload):
    return post_res(self.url, 'train/embedding', payload)

  def post_train_hypernetwork(self, payload):
    return post_res(self.url, 'train/hypernetwork', payload)

  def get_memory(self):
    return get_res(self.url, 'memory')

  def post_unload_checkpoint(self):
    return post_res(self.url, 'unload-checkpoint', {})

  def post_refresh_checkpoint(self):
    return post_res(self.url, 'refresh-checkpoint', {})

  def get_scripts(self):
    return get_res(self.url, 'scripts')

  def get_script_info(self):
    return get_res(self.url, 'script-info')

  def get_loras(self):
    return get_res(self.url, 'loras')

  def post_refresh_loras(self):
    return post_res(self.url, 'refresh-loras', {})

