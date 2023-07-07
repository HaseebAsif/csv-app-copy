import { useState } from "react";
import TreeNode from "./TreeNode";

import "./Tree.css";
function Tree({ data }) {
  // state varialbe to keep track of all the nodes
  // usestate is a hook in whick we can change the state/value of a variable in realtime
  const [expandedNodes, setExpandedNodes] = useState([]);
  //fat arrow function which takes nodeID as a input

  //This function is opening and closing the node child. If it is already expanded then close it else expand it
  const handleToggle = (nodeId) => {
    if (expandedNodes.includes(nodeId)) {
      const filtered = expandedNodes.filter((id) => id === nodeId);
      setExpandedNodes(filtered);
    } else {
      // "..." is a spread operator here. lets say expandednode = [1, 2, 3]
      setExpandedNodes([...expandedNodes, nodeId]);
    }
  };

  return (
    <div className="tree">
      {/* Variant of a for loop */}
      {/* lets say we have a data=[1 [5,6 ,7],2,3]. node here represents 1 2 3
      And we are passing each node one by one to treenode compont and displaying it again and again */}
      {data.map((node) => (
        <TreeNode key={node.id} node={node} onToggle={handleToggle} />
      ))}
    </div>
  );
}

export default Tree;
