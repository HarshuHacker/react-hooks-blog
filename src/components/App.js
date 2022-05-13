import { Switch, Route } from "react-router-dom";

import { CreatePost, Home, Navbar, PostDetail } from "./index"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post/:postId" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
