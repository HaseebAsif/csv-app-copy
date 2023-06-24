import { useState } from "react";

import TreeNode from "./TreeNode";

import "./Tree.css";
function Tree({ data }) {
  // state varialbe to keep track of all the nodes
  const [expandedNodes, setExpandedNodes] = useState([]);

  const handleToggle = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      const filtered = expandedNodes.filter((id) => id === nodeId);
      setExpandedNodes(filtered);
    } else {
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  return (
    <div className="tree">
      {data.map((node) => (
        <TreeNode key={node.id} node={node} onToggle={handleToggle} />
      ))}
    </div>
  );
}

export default Tree;
