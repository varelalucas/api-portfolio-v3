export type ProjectPostContent = {
  name: string,
  description: string,
  time: string,
  github_url: string,
  url: string,
  img_url: string
}

export type ProjectDeleteContent = {
  id: string
}

export type ProjectGetContent = {
  name: string
}

export type ProjectPutContent = {
  id: string,
  new_name: string,
  new_description: string,
  new_time: string,
  new_url: string,
  new_github_url: string
  new_image_url: string
}