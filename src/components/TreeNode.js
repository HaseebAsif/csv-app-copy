import { useState } from "react";
import "./TreeNode.css";

function TreeNode({ node, onToggle, parentExpanded }) {
  const [expanded, setExpanded] = useState(false);

  function handleToggle() {
    setExpanded(!expanded);
    onToggle(node.id);
  }
  console.log(expanded);
  return (
    <div className={`tree-node ${expanded && node.children ? "expanded" : ""}`}>
      <div onClick={handleToggle} className="toggle-button">
        {parentExpanded && (
          <div className="connector-horizontalContainer">
            <div className="connector-horizontal" />
          </div>
        )}
        <h4>{node.name}</h4>
        <span className={`toggle-icon ${expanded ? "expanded" : "collapsed"}`}>
          {expanded ? "-" : "+"}
        </span>
      </div>

      {expanded && node.children && (
        <div className="tree-node__children">
          {node.children.map((child) => (
            <div key={child.id} className="tree-node-child">
              <TreeNode
                node={child}
                onToggle={onToggle}
                parentExpanded={parentExpanded || expanded}
              />

              <div className={`connector`} />
            </div>
          ))}
        </div>
      )}

      {/* {expanded && <div className="connector-vertical" />} */}
    </div>
  );
}

export default TreeNode;
