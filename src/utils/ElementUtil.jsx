import React from 'react';

export default class ElementUtil {
  static textToParagraph(text) {
    return text.split('\n').map((paragraph) => {
      if (!!paragraph) {
        return <p>{paragraph}</p>;
      }
      return '';
    });
  }
}
