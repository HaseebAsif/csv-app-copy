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
            <>
              {" "}
              <TreeNode
                key={child.id}
                node={child}
                onToggle={onToggle}
                parentExpanded={parentExpanded || expanded}
              />
              {parentExpanded ? (
                <div
                  style={{
                    height: 37 * child?.children?.length + "%",
                    top: 18 * child?.children?.length + "%",
                  }}
                />
              ) : (
                <div className={`connector`} />
              )}
            </>
          ))}
        </div>
      )}

      {/* {expanded && <div className="connector-vertical" />} */}
    </div>
  );
}

export default TreeNode;
