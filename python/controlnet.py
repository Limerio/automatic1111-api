import requests


def get_res(url, path):
    res = requests.get(url=f'{url}/controlnet/{path}')
    return res.json()

def post_res(url, path, payload):
    res = requests.post(url=f'{url}/controlnet/{path}', payload=payload)
    return res.json()

class ControlNet:
  def __init__(self, url):
    self.url = url

  def version(self):
    return get_res(self.url, 'version')

  def model_list(self):
    return get_res(self.url, 'model_list')

  def module_list(self):
    return get_res(self.url, 'module_list')

  def control_types(self):
    return get_res(self.url, 'control_types')
  
  def settings(self):
    return get_res(self.url, 'settings')

  def detect(self, payload):
    return post_res(self.url, 'detect', payload)