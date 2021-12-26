export type ProjectPostContent = {
  name: string,
  img_url: string,
  description: string,
  time: string,
  github_url: string,
  url: string
}

export type ProjectDeleteContent = {
  id: string
}

export type ProjectGetContent = {
  name: string
}