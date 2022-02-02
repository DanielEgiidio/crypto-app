import React from 'react';
import { Switch, Route, Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import {
    Navbar,
    Homepage,
    Criptomoedas,
    CriptoDetalhes,
    Novidades,
    Exchanges,
} from './components';

import './App.css';

const App = () => {
    return (
        <div className="app" >
            <div className="navbar" >
                <Navbar />
            </div>
            <div className="main">
                <Layout >
                    <div className="routes">
                        <Switch>
                            <Route exact path="/" >
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges" >
                                <Exchanges />
                            </Route>
                            <Route exact path="/criptomoedas" >
                                <Criptomoedas />
                            </Route>
                            <Route exact path="/cripto/:coinId" >
                                <CriptoDetalhes />
                            </Route>
                            <Route exact path="/novidades" >
                                <Novidades />
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }} >
                        CryptoApp <br />
                        Todos os direitos reservados
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/novidades">Novidades</Link>
                    </Space>
                </div>
            </div>


        </div>
    )
}

export default App;
