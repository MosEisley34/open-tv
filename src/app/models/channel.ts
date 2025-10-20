import { MediaType } from "./mediaType";

export class Channel {
  id?: number;
  name?: string;
  provider?: string;
  group?: string;
  group_id?: number;
  image?: string;
  url?: string;
  media_type?: MediaType;
  source_id?: number;
  favorite?: boolean;
  stream_id?: number;
  tv_archive?: boolean;
}
