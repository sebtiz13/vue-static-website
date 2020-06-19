import { BlogPost } from '@/types/BlogPost';

export interface BlogCategory {
  path: string;
  publicPath: string;
  title: string;
  belongsTo: {
    edges: Array<{
      node: BlogPost
    }>
  }
}
