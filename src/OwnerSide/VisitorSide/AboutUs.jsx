import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './AboutUs.module.css'
import FooterNav from './FooterNav';
import HeaderNav from './HeaderNav';
import HomeImage from '../images/hero-image.jpg'
import { Divider } from '@material-ui/core';

export default () => {

  const Card = ({ text, name }) => {
    return (
      <div className={styles.card}>
        <img src={HomeImage} />
        <p className={styles.note}>{text}</p>
        <p className={styles.name}>{name}<br/>india</p>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <HeaderNav />
      <div className={styles.main}>
        <Container className={styles.container}>
          <h2>About Us</h2>
          <Row className={styles.row}>
            <Col lg={1} />
            <Col lg={5}>
              <img src={HomeImage} className={styles.image}/>
            </Col>
            <Col lg={5}>
              <p className={styles.note}>Launched in 2021, propertyHub.com, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers, sellers and brokers/agents can exchange information about real estate properties quickly, effectively and inexpensively. At propertyHub.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
              <p className={styles.note}>At present, propertyHub.com prides itself for having around nine lakh property listings spanning across 600+ cities in India. Of all, the website held over 5.7 lakh paid listings at the end of FY 2018-19. In addition to providing an online platform to real estate developers, brokers and property owners for listing their property for sale, purchase or rent, propertyHub.com offers advertisement stints such as microsites, banners, home page links and project pages to the clients for better visibility and branding in the market.</p>
              <p className={styles.note}>With the ever-evolving online search behaviour, propertyHub.com shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!</p>
            </Col>
            <Col lg={1} />
          </Row>
          <Divider style={{ marginBlock: 30 }} />
          <h2 style={{ marginBottom: 0 }}>Our Testimonials! Read what our Users say</h2>
          <p className={styles.note} style={{ marginBottom: 30 }}>Read our testimonials, check our reviews and Deals your trip with us.</p>
          <Row>
            <Col lg={3}>
              <Card
                text="I loved the entire process of booking. I was given multiple options for hotels and activities I could choose from. Ground support was excellent. I loved the experience. Strongly Recommended!"
                name="Vaidehi K"
              />
            </Col>
            <Col lg={3}>
              <Card
                text="I really would like to recommend HungryTripper to my friends. Everything went smoothly as planned. Would like to have another trip arranged from them. Thank you HungryTripper for ur support!"
                name="Shailesh Patil"
              />
            </Col>
            <Col lg={3}>
              <Card
                text="The Bali adventure was great. It has so much to offer culturally and spiritually. We visited Nasa Dua and few more. Bali has something for everyone. :) Thank you very much team for awesome journey!"
                name="Pankaj "
              />
            </Col>
            <Col lg={3}>
              <Card
                text="I loved the entire process of booking. I was given multiple options for hotels and activities I could choose from. Ground support was excellent. I loved the experience. Strongly Recommended!"
                name="Huzefa "
              />
            </Col>
          </Row>
        </Container>
      </div>
      <FooterNav />
    </div>
  )
}