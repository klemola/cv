'use strict';

import React from 'react';
import Radium from 'radium';
import Job from './Job';

const style = {};

class Work extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <section>
                <h1>{data.title}</h1>
                {data.items.map(function(job) {
                    return <Job data={job} />
                })}
            </section>
        )
    }
}

export default Radium(Work);
