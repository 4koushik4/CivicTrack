import { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  try {
    const { render } = await import('../../dist/server/node-build.mjs');

    // Render page based on requested path
    const html = await render(event.path);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html',
      },
      body: html,
    };
  } catch (err) {
    console.error('SSR error:', err);
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
