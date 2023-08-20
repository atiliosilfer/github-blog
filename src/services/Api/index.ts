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

export type Issue = {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

export const Issues = {
  index: async (): Promise<Issue[]> =>
    (await get('/repos/atiliosilfer/github-blog/issues')).data,
  single: async (number: number): Promise<Issue> =>
    (await get(`/repos/atiliosilfer/github-blog/issues/${number}`)).data,
  searchByName: async (issueName: string): Promise<{ items: Issue[] }> =>
    (
      await get(`/search/issues`, {
        params: {
          q: `${issueName} repo:atiliosilfer/github-blog`,
        },
      })
    ).data,
}
