import "./App.css";
import Tree from "./components/Tree";

function App() {
  // Data: Array of objects
  const treeData = [
    {
      id: 1,
      name: "Node 1",
      children: [
        {
          id: 2,
          name: "Node 1.1",
          children: [
            { id: 3, name: "Node 1.1.1" },
            { id: 4, name: "Node 1.1.2" },
            { id: 9, name: "Node 1.1.3" },
          ],
        },
        { id: 5, name: "Node 1.2" },
        {
          id: 6,
          name: "Node 1.3",
          children: [
            { id: 7, name: "Node 1.3.1" },
            { id: 8, name: "Node 1.3.2" },
          ],
        },
      ],
    },
  ];
  return (
    //jsx
    <div className="app">
      <h1>CSV App - Tree Opener</h1>
      {/* Child Component, Here we sent the data from parent to child using props */}
      <Tree data={treeData} />
    </div>
  );
}

export default App;
