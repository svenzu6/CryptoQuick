export interface NewsResponse <T>{
    type: string
    data: T
}

export type NewsData = {
    value: NewsType[]
}

export type NewsType = {
    name: string
    url: string
    description: string
    image: ImageType
}

export type ImageType = {
    thumbnail: ThumbnailType
}

export type NewsRequestType = {
    count: number
    newsCategory: string
}

export type ThumbnailType = {
    contentUrl: string
}