'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column';
import Row from './Row';
import {dateString} from '../utils/StringFormatter';
import {textToParagraph} from '../utils/ElementUtil';

const style = {};

const General = ({data}) => (
    <section>
        <Row>
            <Column>
                <Row><strong>{data.name}</strong></Row>
                <Row>{data.occupation}</Row>
                <Row><span>Tel. {data.phonenumber}</span></Row>
                <Row><span>CV {dateString(data.date)}</span></Row>
            </Column>
            <Column>
                <Row>
                    <a href={'mailto:' + data.email}>{data.email}</a>
                </Row>
                {data.links.map((link) => {
                    return (
                        <Row>
                            <a href={link.url}>{link.title}</a>
                        </Row>
                    )
                })}
            </Column>
        </Row>
        {textToParagraph(data.description)}
    </section>
);


export default Radium(General);
