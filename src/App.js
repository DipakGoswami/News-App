// import React, { Component } from "react";
// import Navbar from "./Components/Navbar";
// import News from "./Components/News";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="general"/></Route>
//             <Route path="/business"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="business"/></Route>
//             <Route path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="entertainment"/></Route>
//             <Route path="/general"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="general"/></Route>
//             <Route path="/health"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="health"/></Route>
//             <Route path="/science"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="science"/></Route>
//             <Route path="/sports"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="sports"/></Route>
//             <Route path="/technology"><News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} country={country} category="technology"/></Route>
//           </Routes>
//         </Router>
//       </div>
//     );
//   }
// }
import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App = ()=>{
  const pageSize = 6
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  
  const country ='us'
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color="f11946"
            progress={progress}
            />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business"pageSize={pageSize} country={country} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country={country}category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country={country} category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country={country} category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country={country} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country={country} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country={country} category="technology" />} />
          </Routes>
        </Router>
      </div>
    );
  }
export default App;