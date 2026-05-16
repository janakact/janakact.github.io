import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export function renderWithStyles(element) {
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      React.createElement(
        StyleSheetManager,
        { sheet: sheet.instance },
        element
      )
    );
    const styles = sheet.getStyleTags();
    return { html, styles };
  } finally {
    sheet.seal();
  }
}
