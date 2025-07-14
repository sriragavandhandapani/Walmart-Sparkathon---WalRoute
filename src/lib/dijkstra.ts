/**
 * @fileoverview This file implements the A* (A-star) pathfinding algorithm.
 * A* is an industry-standard algorithm for finding the shortest path between
 * two points, and is more efficient than Dijkstra's for many use cases
 * because it uses a heuristic to guide its search.
 */

import type { LayoutNode, LayoutEdge } from '@/lib/types';

// Helper function to calculate Euclidean distance between two nodes
const calculateDistance = (node1: LayoutNode, node2: LayoutNode): number => {
  return Math.sqrt(Math.pow(node2.x - node1.x, 2) + Math.pow(node2.y - node1.y, 2));
};

/**
 * Finds the shortest path between two nodes using the A* (A-star) algorithm.
 *
 * @param nodes - Array of all nodes in the graph.
 * @param edges - Array of all edges connecting the nodes.
 * @param startId - The ID of the starting node.
 * @param endId - The ID of the destination node.
 * @returns An array of node IDs representing the shortest path.
 */
export function aStar(nodes: LayoutNode[], edges: LayoutEdge[], startId: string, endId: string): string[] {
  const nodeMap = new Map(nodes.map(node => [node.id, node]));

  // Create an adjacency list for the graph
  const adj: { [key: string]: string[] } = {};
  nodes.forEach(node => (adj[node.id] = []));
  edges.forEach(([u, v]) => {
    adj[u].push(v);
    adj[v].push(u);
  });

  const endNode = nodeMap.get(endId);
  if (!endNode) return [];

  // Heuristic function (h): straight-line distance to the end node
  const heuristic = (nodeId: string): number => {
    const node = nodeMap.get(nodeId)!;
    return calculateDistance(node, endNode);
  };

  // The set of nodes to be evaluated
  const openSet = new Set<string>([startId]);

  // For each node, which node it can most efficiently be reached from.
  const cameFrom: { [key: string]: string | null } = {};

  // Cost from start to a node (gScore)
  const gScore: { [key: string]: number } = {};
  nodes.forEach(node => (gScore[node.id] = Infinity));
  gScore[startId] = 0;

  // Total cost from start to goal through a node (fScore = gScore + heuristic)
  const fScore: { [key:string]: number } = {};
  nodes.forEach(node => (fScore[node.id] = Infinity));
  fScore[startId] = heuristic(startId);

  while (openSet.size > 0) {
    // Find the node in openSet with the lowest fScore value
    let currentId = '';
    let minFScore = Infinity;
    for (const nodeId of openSet) {
      if (fScore[nodeId] < minFScore) {
        minFScore = fScore[nodeId];
        currentId = nodeId;
      }
    }

    // If we've reached the end, reconstruct the path
    if (currentId === endId) {
      const path: string[] = [];
      let current: string | null = endId;
      while (current) {
        path.unshift(current);
        current = cameFrom[current] ?? null;
      }
      return path;
    }

    openSet.delete(currentId);
    const currentNode = nodeMap.get(currentId)!;

    // Check neighbors
    for (const neighborId of adj[currentId]) {
      const neighborNode = nodeMap.get(neighborId)!;
      const tentativeGScore = gScore[currentId] + calculateDistance(currentNode, neighborNode);

      if (tentativeGScore < gScore[neighborId]) {
        // This path to neighbor is better than any previous one. Record it!
        cameFrom[neighborId] = currentId;
        gScore[neighborId] = tentativeGScore;
        fScore[neighborId] = gScore[neighborId] + heuristic(neighborId);
        if (!openSet.has(neighborId)) {
          openSet.add(neighborId);
        }
      }
    }
  }

  return []; // Return empty path if no path is found
}
