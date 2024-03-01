import '../styles/globals.css'

import Script from 'next/script'

import * as snippet from '@segment/snippet'


function renderSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    host: 'cdn.persio.io',
    page: true,

  }

  if (process.env.NODE_ENV === 'development') {
    return snippet.max(opts)
  }

  return snippet.min(opts)
}

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Script
            id="segment-script"
            dangerouslySetInnerHTML={{ __html: renderSnippet() }}
        />
        <Component {...pageProps} />
      </>)
}

export default MyApp
