import pdf from 'html-pdf';
import fs from 'fs';
import { dateString } from './utils/StringFormatter';

const date = dateString(new Date());
const footerStyles = [
  'padding: 0 20px',
  'color: #999',
  'font-family:"Century Gothic" Helvetica, Arial, sans-serif',
].join('; ');
const footerHtml = `
<div style="${footerStyles}">
    <span>
        CV ${date} - Matias Klemola
    <span>
    <span style="float:right; width:300px; text-align:right;">
        {{page}} / {{pages}}
    </span>
</span>
`;

const config = {
  phantomPath: '/usr/local/bin/phantomjs',
  footer: {
    height: '10mm',
    contents: footerHtml,
  },
};

export default (sourceFilePath, targetFilePath) => {
  const html = fs.readFileSync(sourceFilePath, 'utf-8');
  pdf.create(html, config).toFile(targetFilePath, (err, res) => {
    if (err) {
      console.log(err); // eslint-disable-line
    }
    return res.filename;
  });
};
