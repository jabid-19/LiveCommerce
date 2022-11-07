import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => {
  return (
    <>
      <meta name="google-site-verification" content="HcyrSpbHnnH_3KiHPJqKJau4p-tpZomlKChdrLCyqTY" />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QNJEF70917"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QNJEF70917', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
