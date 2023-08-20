import { get } from './base'

export type User = {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  company: string
  followers: number
}

export const Users = {
  single: async (): Promise<User> => (await get(`/users/atiliosilfer`)).data,
}

export const Issues = {
  index: async () => await get('/repos/atiliosilfer/github-blog/issues/'),
  single: async (id: number) =>
    await get(`/repos/atiliosilfer/github-blog/issues/${id}`),
  searchByName: async (issueName: string) =>
    await get(`/search/issues/`, {
      params: {
        q: `${issueName} repo:atiliosilfer/github-blog`,
      },
    }),
}
