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
  return <App1 />;
}

export default App;
