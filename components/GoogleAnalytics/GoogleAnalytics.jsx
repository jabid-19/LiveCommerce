import Script from 'next/script'
import React from 'react'

const GoogleAnalytics = () => {
  const googleID = process.env.GOOGLE_ID
  return (
    <>
      <meta name="google-site-verification" content={`${process.env.GOOGLE_VERIFICATION_ID}`} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleID}', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
    </>
  )
}

export default GoogleAnalytics
