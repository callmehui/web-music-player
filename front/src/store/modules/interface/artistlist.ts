import { IFiltersState } from "@/views/home/components/main-content/views/artist-list/components/interface/filters";

export interface IArtist {
  id: number /** 歌手id */;
  name: string /** 歌手名称 */;
  picUrl: string /** 歌手头像 */;
}

export interface IArtistListState {
  loading: boolean /** 是否显示loading */;
  artistList: IArtist[] /** 歌手列表 */;
}

export interface ISetArtistListPayload {
  filters: IFiltersState /** 歌手筛选器 */;
  limit: number /** 每页条数 */;
  offset: number /** 分页偏移量 */;
}
