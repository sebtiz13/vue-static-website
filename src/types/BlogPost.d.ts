import { RemarkHeading } from './RemarkHeading';
import { Image } from './Image';

export interface BlogPost {
  path: string;
  content: string;
  excerpt: string;
  title: string;
  slug: string;
  date: string;
  categories: Array<string>;
  thumbnail: Image;
  headings: Array<RemarkHeading>;
  timeToRead: number;
}
