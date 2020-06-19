import { RemarkHeading } from './RemarkHeading';
import { BlogCategory } from './BlogCategory';
import { Image } from './Image';

export interface BlogPost {
  path: string;
  publicPath: string;
  content: string;
  excerpt: string;
  title: string;
  slug: string;
  date: string;
  categories: Array<BlogCategory>;
  thumbnail: Image;
  headings: Array<RemarkHeading>;
  timeToRead: number;
}
