import React from 'react';
import {Layout} from 'antd';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MenuTop from './components/MenuTop';

//Pages
import Home from './pages/Home';
import NewMovie from './pages/New-movie';
import Movie from './pages/Movie';
import Popular from './pages/Popular';
import Search from './pages/Search';
import Error404 from './pages/Error404';


function App() {

  const {Header, Content} = Layout;

  return (
    <Layout>
     <Router>
     <Header>
         <MenuTop/>
       </Header>
       <Content>
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/new-movie" component={NewMovie}/>
         <Route exact path="/popular" component={Popular}/>
         <Route exact path="/search" component={Search}/>
         <Route exact path="/movie/:id" component={Movie}/>
         <Route exact path="*" component={Error404}/>
       </Switch>
       </Content>
       
       
     </Router>
    </Layout>
  );
}

export default App;
