export interface LivePreviewResult {
  code: number
  message: string
  ttl: number
  data: Data
}
export interface Data {
  playurl_info: PlayURL
}
export interface PlayURL {
  playurl: Stream
}
export interface Stream {
  format: Format[]
}
export interface Format {
  codec: Codec[]
}

export interface Codec {
  base_url: string
  url_info: URLInfo[]
}
export interface URLInfo {
  extra: string
  host: string
}
