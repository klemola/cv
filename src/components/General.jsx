'use strict';

import React from 'react';
import Radium from 'radium';
import Column from './Column'
import Row from './Row'
import StringFormatter from '../utils/StringFormatter'
import ElementUtil from '../utils/ElementUtil'

const style = {};

class General extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <section>
                <Row>
                    <Column>
                        <Row><strong>{data.name}</strong></Row>
                        <Row>{data.occupation}</Row>
                        <Row><span>Tel. {data.phonenumber}</span></Row>
                        <Row><span>CV {StringFormatter.formatDate(data.date)}</span></Row>
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
                {ElementUtil.textToParagraph(data.description)}
            </section>
        )
    }
}

export default Radium(General);
