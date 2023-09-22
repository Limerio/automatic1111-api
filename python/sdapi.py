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

  def txt2img(self, payload):
    return post_res(self.url, 'txt2img', payload)

  def img2img(self, payload):
    return post_res(self.url, 'img2img', payload)

  def extra_single_image(self, payload):
    return post_res(self.url, 'extra-single-image', payload)

  def extra_batch_images(self, payload):
    return post_res(self.url, 'extra-batch-images', payload)

  def png_info(self, payload):
    return post_res(self.url, 'png-info', payload)

  def progress(self):
    return get_res(self.url, 'progress')

  def interrogate(self, payload):
    return post_res(self.url, 'interrogate', payload)

  def interrupt(self):
    return post_res(self.url, 'interrupt', {})

  def skip(self):
    return post_res(self.url, 'skip', {})

  def options(self):
    return get_res(self.url, 'options')

  def set_options(self, payload):
    return post_res(self.url, 'options', payload)

  def cmd_flags(self):
    return get_res(self.url, 'cmd-flags')

  def samplers(self):
    return get_res(self.url, 'samplers')

  def upscalers(self):
    return get_res(self.url, 'upscalers')

  def latent_upscale_modes(self):
    return get_res(self.url, 'latent-upscale-modes')

  def sd_models(self):
    return get_res(self.url, 'sd-models')

  def sd_vae(self):
    return get_res(self.url, 'sd-vae')

  def hypernetworks(self):
    return get_res(self.url, 'hypernetworks')

  def face_restorers(self):
    return get_res(self.url, 'face-restorers')
  
  def realesrgan_models(self):
    return get_res(self.url, 'realesrgan-models')

  def prompt_styles(self):
    return get_res(self.url, 'prompt-styles')

  def embeddings(self):
    return get_res(self.url, 'embeddings')

  def post_refresh_checkpoints(self):
    return post_res(self.url, 'refresh-checkpoints', {})

  def refresh_vae(self):
    return post_res(self.url, 'refresh-vae', {})

  def create_embedding(self, payload):
    return post_res(self.url, 'create/embedding', payload)

  def create_hypernetwork(self, payload):
    return post_res(self.url, 'create/hypernetwork', payload)
  
  def preprocess(self, payload):
    return post_res(self.url, 'preprocess', payload)

  def train_embedding(self, payload):
    return post_res(self.url, 'train/embedding', payload)

  def train_hypernetwork(self, payload):
    return post_res(self.url, 'train/hypernetwork', payload)

  def memory(self):
    return get_res(self.url, 'memory')

  def unload_checkpoint(self):
    return post_res(self.url, 'unload-checkpoint', {})

  def refresh_checkpoint(self):
    return post_res(self.url, 'refresh-checkpoint', {})

  def scripts(self):
    return get_res(self.url, 'scripts')

  def script_info(self):
    return get_res(self.url, 'script-info')

  def loras(self):
    return get_res(self.url, 'loras')

  def refresh_loras(self):
    return post_res(self.url, 'refresh-loras', {})

