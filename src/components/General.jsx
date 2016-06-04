import React from 'react';
import Radium from '../utils/ConfiguredRadium';
import Column from './Column';
import Row from './Row';
import { textToParagraph } from '../utils/ElementUtil';

const imgStyle = {
  width: '90%',
  marginLeft: '10%',
  borderRadius: '5px',
};

const General = ({ data, i18n }) => (
  <section>
    <Row>
      <Column>
        <Row>
          <Column>
            <Row>
              <strong>{data.name}</strong>
            </Row>
            <Row>{data.occupation}</Row>
            <Row>
              <span>{i18n.telephoneNumber} {data.phonenumber}</span>
            </Row>
            <Row>{data.location}</Row>
          </Column>
          <Column>
            <Row>
              <a href={`mailto: ${data.email}`}>{data.email}</a>
            </Row>
            {data.links.map((link) => (
              <Row>
                <a href={link.url}>{link.url}</a>
              </Row>
            ))}
          </Column>
        </Row>
        {textToParagraph(data.description)}
      </Column>
      <Column width={'20%'}>
        <img style={imgStyle} src={`file://%dirname%${data.pictureUrl}`} alt="Profile" />
      </Column>
    </Row>
  </section>
);

export default Radium(General);
