'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column';
import Row from './Row';
import {textToParagraph} from '../utils/ElementUtil';

const imgStyle = {
    width: '90%',
    marginLeft: '10%',
    borderRadius: '5px'
};

const General = ({data}) => (
    <section>
        <Row>
            <Column>
                <Row>
                    <Column>
                        <Row><strong>{data.name}</strong></Row>
                        <Row>{data.occupation}</Row>
                        <Row><span>Tel. {data.phonenumber}</span></Row>
                        <Row>{data.location}</Row>
                    </Column>
                    <Column>
                        <Row>
                            <a href={'mailto:' + data.email}>{data.email}</a>
                        </Row>
                        {data.links.map((link) => {
                            return (
                                <Row>
                                    <a href={link.url}>{link.url}</a>
                                </Row>
                            )
                        })}
                    </Column>
                </Row>
                {textToParagraph(data.description)}
            </Column>
            <Column width={'20%'}>
                <img style={imgStyle} src={'file://%dirname%' + data.pictureUrl} alt='Profile'/>
            </Column>
        </Row>
    </section>
);


export default Radium(General);
