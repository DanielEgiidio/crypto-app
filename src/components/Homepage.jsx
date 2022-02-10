import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";
import { Criptomoedas, Novidades } from "../components";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="heading">
        Estatisticas Globais de CryptoMoedas
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Capitalização de Mercado Total"
            value={millify(globalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Mercados Totais "
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies no mundo
        </Title>
        <Title level={3} className="show-more">
          <Link to="/criptomoedas">Mostrar mais</Link>
        </Title>
      </div>
      <Criptomoedas simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Ultimas Crypto Novidades
        </Title>
        <Title level={3} className="show-more">
          <Link to="/novidades">Mostrar mais</Link>
        </Title>
      </div>
      <Novidades simplified />
    </>
  );
};

export default Homepage;
