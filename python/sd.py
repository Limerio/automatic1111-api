import requests


def get_res(url, path):
    res = requests.get(url=f'{url}/sdapi/v1/{path}')
    return res.json()

def post_res(url, path, payload):
    res = requests.post(url=f'{url}/sdapi/v1/{path}', payload=payload)
    return res.json()

class StableDiffusion:
  def __init__(self, url):
    self.url = url

  def get_loras(self):
    return get_res(self.url, 'loras')
  
  def get_samplers(self):
    return get_res(self.url, 'samplers')
  
  def get_options(self):
    return get_res(self.url, 'options')
  
  def get_sd_models(self):
    return get_res(self.url, 'sd-models')
  
  def get_samplers(self):
    return get_res(self.url, 'samplers')

  def get_upscalers(self):
    return get_res(self.url, 'upscalers')

  def get_hypernetworks(self):
    return get_res(self.url, 'hypernetworks')

  def get_sd_vae(self):
    return get_res(self.url, 'sd-vae')

  def get_face_restorers(self):
    return get_res(self.url, 'face-restorers')
  
  def get_prompt_styles(self):
    return get_res(self.url, 'prompt-styles')
  
  def get_scripts(self):
    return get_res(self.url, 'scripts')

  def get_script_info(self):
    return get_res(self.url, 'script-info')
  
  def get_embeddings(self):
    return get_res(self.url, 'embeddings')

  def get_realesrgan_models(self):
    return get_res(self.url, 'realesrgan-models')

  def get_cmd_flags(self):
    return get_res(self.url, 'cmd-flags')

  def get_progress(self):
    return get_res(self.url, 'progress')

  def post_options(self, payload):
    return post_res(self.url, 'options', payload)

  def post_skip(self):
    return post_res(self.url, 'skip', {})

  def post_interrupt(self):
    return post_res(self.url, 'interrupt', {})

  def post_refresh_checkpoints(self):
    return post_res(self.url, 'refresh-checkpoints', {})

  def post_refresh_vae(self):
    return post_res(self.url, 'refresh-vae', {})

  def post_refresh_loras(self):
    return post_res(self.url, 'refresh-loras', {})

  def post_png_info(self, payload):
    return post_res(self.url, 'png-info', payload)

  def post_img2img(self, payload):
    return post_res(self.url, 'img2img', payload)

  def post_txt2txt(self, payload):
    return post_res(self.url, 'img2img', payload)

  def post_extra_batch_images(self, payload):
    return post_res(self.url, 'extra-batch-images', payload)

  def post_extra_single_image(self, payload):
    return post_res(self.url, 'extra-single-image', payload)