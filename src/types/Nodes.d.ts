import { PageInfo } from './PageInfo';
import { RemarkHeading } from './RemarkHeading';
import { Image } from './Image';

export interface Node {
  id: string | number
}

export interface NodeConnectionEdge<N extends Node> {
  node: N
  next: N
  previous: N
}

export type NodeBelongsToEdge<N extends Node> = NodeConnectionEdge<N>

export interface NodeConnection<N extends Node> {
  totalCount: number
  PageInfo: PageInfo
  edges: NodeConnectionEdge<N>[]
}

export interface NodeBelongsTo<N extends Node> extends NodeConnection<N> {
  edges: NodeBelongsToEdge<N>[]
}

export interface FileNode extends Node {
  path: string
  publicPath: string
  content: string
  excerpt: string
  title: string
  slug: string
  headings: RemarkHeading[]
  timeToRead: number
}

export interface Refs extends Node {
  path: string
  publicPath: string
  title: string
}

export interface NodeRelations<N extends Node> {
  belongsTo: NodeBelongsTo<N>
}

export interface BlogPost extends FileNode {
  categories: BlogCategory[]
  thumbnail: Image
  date: string
}

export interface sitePages extends FileNode {
  thumbnail: Image
  date: string
}

export type MarkdownPageConnection = NodeConnection<sitePages>

export type BlogPostConnection = NodeConnection<BlogPost>

export type BlogCategory = Refs

export type BlogCategoryConnection = NodeConnection<BlogCategory>

export type SitesPagesConnection = NodeConnection<sitePages>

export type NodeCollections<N extends Node> = Array<N>
