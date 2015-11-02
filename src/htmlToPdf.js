'use strict';

import pdf from 'html-pdf';
import fs from 'fs';

const config = {
    'phantomPath': '/usr/local/bin/phantomjs'
};

export default function (sourceFilePath, targetFilePath) {
    const html = fs.readFileSync(sourceFilePath, 'utf-8');
    pdf.create(html, config).toFile(targetFilePath, (err, res) => {
        if (err) {
            console.log(err);
        }

        return res.filename;
    });
}
