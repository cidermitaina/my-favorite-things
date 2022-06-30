import { microcmsClient } from '../../libs/microcmsClient'

export const fetcher = async (url: string) =>
  microcmsClient
    .get({
      endpoint: url,
    })
    .then((res) => res)
