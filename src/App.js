import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Users from "./pages/User/Users"
import User from "./pages/User/User"
import Posts from "./pages/Post/Posts"
import Layout from "./components/Layout";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache(),

});


function App() {

  return (
      <div className="App">
        <ApolloProvider client={client}>
            <Routes>
                <Route path="/" element={ <Layout/>}>
                  <Route path="/" element={ <Home/> } />
                  <Route path="users" element={ <Users/> } />
                  <Route path="user/:id" element={ <User/> } />
                  <Route path="posts" element={ <Posts/> } />
                </Route>
            </Routes>
        </ApolloProvider>
        
      </div>
  );
}

export default App;
