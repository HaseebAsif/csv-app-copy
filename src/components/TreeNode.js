import { useState } from "react";
import "./TreeNode.css";

function TreeNode({ node, onToggle, parentExpanded }) {
  const [expanded, setExpanded] = useState(false);

  function handleToggle() {
    setExpanded(!expanded);
    onToggle(node.id);
  }

  return (
    <div className={`tree-node ${expanded ? "expanded" : ""}`}>
      <div onClick={handleToggle} className="toggle-button">
        <h4>{node.name}</h4>
        <span className={`toggle-icon ${expanded ? "expanded" : "collapsed"}`}>
          {expanded ? "-" : "+"}
        </span>
      </div>

      {expanded && node.children && (
        <div className="tree-node__children">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              onToggle={onToggle}
              parentExpanded={parentExpanded || expanded}
            />
          ))}
        </div>
      )}

      {parentExpanded && <div className="connector-horizontal" />}
      {parentExpanded && <div className="connector" />}
      {expanded && <div className="connector-vertical" />}
    </div>
  );
}

export default TreeNode;
