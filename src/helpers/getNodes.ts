import { Node, NodeConnection, NodeCollections } from '@/types/Nodes';

export default function getNodes<N extends Node>(
  collections: NodeConnection<N>,
): NodeCollections<N> {
  return collections.edges.map(({ node }) => (node));
}
