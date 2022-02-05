import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  console.log(data);

  return (
    <>
      <Title level={2} className="heading">
        Estatisticas Globais de CryptoMoedas
        <Row>
          <Col span={12}>
            <Statistic title="Total Cryptocurrencies" value="5" />
          </Col>
          <Col span={12}>
            <Statistic title="Exchanges" value="5" />
          </Col>
          <Col span={12}>
            <Statistic title="Capitalização de Mercado Total" value="5" />
          </Col>
          <Col span={12}>
            <Statistic title="Total 24h Volume" value="5" />
          </Col>
          <Col span={12}>
            <Statistic title="Mercados Totais " value="5" />
          </Col>
        </Row>
      </Title>
    </>
  );
};

export default Homepage;
