import React from 'react';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';
import Row from 'reactstrap/lib/Row';
import styles from './AboutUs.module.css'
import FooterNav from './FooterNav';
import {HeaderNav} from './HeaderNav';
import h1 from '../images/hero-image.jpg'
import HomeImages from '../images/c3.jpg'
import h2 from '../images/c4.jpg'
import h4 from '../images/o.jpg'
import { Divider } from '@material-ui/core';

export default () => {

  const Card = ({ text, name }) => {
    return (
      <div className={styles.card}>
       <img src={h1} alt="patil" />
        <p className={styles.note}>{text}</p>
        <p className={styles.name}>{name}<br />india</p>
      </div>
    )
  }
  const Card1 = ({ text, name }) => {
    return (
      <div className={styles.card}>
       <img src={h2} alt="patil1"/>
        <p className={styles.note}>{text}</p>
        <p className={styles.name}>{name}<br />india</p>
      </div>
    )
  }
  const Card3 = ({ text, name }) => {
    return (
      <div className={styles.card}>
       <img src={h4} alt="patil3"/>
        <p className={styles.note}>{text}</p>
        <p className={styles.name}>{name}<br />india</p>
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <HeaderNav />
      <div className={styles.main}>
        <Container className={styles.container}>
          <h2 style={{marginLeft:'80px'}}>About Us</h2>
          <Row className={styles.row}>
            <Col lg={1} />
            <Col lg={3}>
              <img src={HomeImages} className={styles.image}  alt="patil5" style={{marginLeft:'-35px'}}/>
            </Col>
            
            <Col lg={5}>
              <p className={styles.note}>Launched in 2021, propertyHub.com, India’s No. 1 property portal, deals with every aspect of the consumers’ needs in the real estate industry. It is an online forum where buyers and sellers can exchange information about real estate properties quickly, effectively and inexpensively. At propertyHub.com, you can advertise a property, search for a property, browse through properties, build your own property microsite, and keep yourself updated with the latest news and trends making headlines in the realty sector.</p>
              <p className={styles.note}>With the ever-evolving online search behaviour, propertyHub.com shares updated information pertinent to real estate activities, assisting prospective buyers to make informed buying decision. We make online property search easier, quicker and smarter!</p>
            </Col>
            
          </Row>
          <Divider style={{ marginBlock: 30 }} />
          <h2 style={{ marginBottom: 0, textAlign: 'center' }}>Our Team</h2>
          <p className={styles.note} style={{ marginBottom: 30, textAlign: 'center' }}>Read our testimonials, check our Founder and Co-Founder.</p>
          <Row style={{marginLeft:'20px'}}>             
            <Col lg={4}>            
              <Card1             
                text="Would like to have another trip arranged from them. Thank you HungryTripper for ur support!"
                name="Shailesh Patil"
                style={{ marginBottom: '35px' }}                
              />
              <p style={{ marginTop: '-65px', padding: '8px' }}>Founder & CEO</p>
            </Col>
            
            <Col lg={4}>
              <Card
                text="I loved the entire process of booking. I was given multiple options for hotels and activities"
                name="Huzaifa"
              />
              <p style={{ marginTop: '-65px', padding: '8px' }}>Co-Founder</p>
            </Col>
            <Col lg={4}>
              <Card3
                text="The Bali adventure was great. It has so much to offer culturally and spiritually Thanks for wishes."
                name="Pankaj shah"
              />
              <p style={{ marginTop: '-65px', padding: '8px' }}>Manager</p>
            </Col>
          </Row>
        </Container>
      </div>
      <FooterNav />
    </div>
  )
}