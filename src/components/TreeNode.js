import { useState } from "react";
import "./TreeNode.css";

function TreeNode({ node, onToggle, parentExpanded }) {
  const [expanded, setExpanded] = useState(false);

  function handleToggle() {
    setExpanded(!expanded);
    //onToggle is a handleToggle function of file Tree.js
    onToggle(node.id);
  }
  console.log(expanded);
  return (
    // We can assign the classes based on the variable. Classname defined conditionally
    <div className={`tree-node ${expanded && node.children ? "expanded" : ""}`}>
      <div onClick={handleToggle} className="toggle-button">
        {parentExpanded && (
          <div className="connector-horizontalContainer">
            <div className="connector-horizontal" />
          </div>
        )}
        <h4>{node.name}</h4>
        {/* // We can assign the classes based on the variable. Classname defined
        conditionally */}
        <span className={`toggle-icon ${expanded ? "expanded" : "collapsed"}`}>
          {/* Baseb on the state, we are defining the - or + symbol; */}
          {expanded ? "-" : "+"}
        </span>
      </div>

      {expanded && node.children && (
        <div className="tree-node__children">
          {/* Here we are calling a child of a child. Or grnadchild from child */}
          {/* parentExpanded={parentExpanded || expanded} if we have this prop then it is a grandchild else it is a child */}

          {node.children.map((child) => (
            <div key={child.id} className="tree-node-child">
              {/* treenode and connector are side by side or siblings. If we increase the heigth of the treenode than the height of the connector will also be increased */}
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
    </div>
  );
}

export default TreeNode;
