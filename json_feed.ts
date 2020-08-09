enum FeedVersion {
  "https://jsonfeed.org/version/1",
  "https://jsonfeed.org/version/1.1",
}

type FeedVersionString = keyof typeof FeedVersion;

export default interface Feed {
  version: FeedVersionString;
  title: string;
  home_page_url?: string;
  feed_url?: string;
  description?: string;
  user_comment?: string;
  next_url?: string;
  icon?: string;
  favicon?: string;
  author?: Author; // 1.0 holdover
  authors?: Author[];
  language?: string;
  expired?: boolean;

  // TODO: hubs
  // TODO: handle extensions? ("_blue_shed")

  items: Item[];
}

export interface Author {
  name?: string;
  url?: string;
  avatar?: string;
}

export interface Item {
  id: string;
  url?: string;
  external_url?: string;
  title?: string;
  content_html?: string;
  content_text?: string;
  summary?: string;
  image?: string;
  banner_image?: string;
  date_published?: string; // RFC 3339, not always zulu time
  date_modified?: string;
  author?: Author; // 1.0 holdover
  authors?: Author[];
  tags?: string[];
  language?: string;

  attachments?: Attachment[];
}

export interface Attachment {
  url: string;
  mime_type: string;
  title?: string;
  size_in_bytes?: number;
  duration_in_seconds?: number;
}
