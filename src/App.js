import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './components/main'
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className = "header-col" title="Sukritibhardwaj" scroll>
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/skills">Experience</Link>
                <Link to="/project">Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="Sukritibhardwaj">
            <Navigation>
                <Link to="/landingpage">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/skills">Experience</Link>
                <Link to="/project">Projects</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
