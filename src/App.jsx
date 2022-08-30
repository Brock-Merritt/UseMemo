import App1 from "./App1";

function App() {
  const [text, setText] = useState("");

  const expensiveFunction = () => {
    let total = 0;
    for(let i = 0; i < text.length; i++) {
      total += i;
      }
      return total;
  };

  console.log("component rendered")
  return (
    <div>
      <input
      onChange={(e) => setText(e.target.value)}
      placeholder="enter a text"/>
      <span>Total: {sum}</span>
    </div>
  );
}

export default App;
