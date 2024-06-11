import './App.css';
import pricePlan from "./data/pricePlan.json"
import { PlanTier } from "./component/planTier.js"

function App() {
  return (
    <div className="App">
      <div className="row mt-2">
        {pricePlan.map((data) => (
            <PlanTier tierData={data} />
          ))}
      </div>  
    </div>
  );
}

export default App;