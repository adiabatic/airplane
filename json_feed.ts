enum JSONFeedVersion {
  "https://jsonfeed.org/version/1",
  "https://jsonfeed.org/version/1.1",
}

type JSONFeedVersionString = keyof typeof JSONFeedVersion;

export default interface JSONFeed {
  version: JSONFeedVersionString;
  title: string;
  home_page_url?: string;
  feed_url?: string;
  description?: string;
  user_comment?: string;
  next_url?: string;
  icon?: string;
  favicon?: string;
  author?: JSONFeedAuthor; // 1.0 holdover
  authors?: JSONFeedAuthor[];
  language?: string;
  expired?: boolean;

  // TODO: hubs
  // TODO: handle extensions? ("_blue_shed")

  items: JSONFeedItem[];
}

export interface JSONFeedAuthor {
  name?: string;
  url?: string;
  avatar?: string;
}

export interface JSONFeedItem {
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
  author?: JSONFeedAuthor; // 1.0 holdover
  authors?: JSONFeedAuthor[];
  tags?: string[];
  language?: string;

  attachments?: JSONFeedAttachment[];
}

export interface JSONFeedAttachment {
  url: string;
  mime_type: string;
  title?: string;
  size_in_bytes?: number;
  duration_in_seconds?: number;
}
