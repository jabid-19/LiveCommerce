/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.golaiv.com',
  exclude: ['/server-sitemap.xml'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    // policies: [
    //   {
    //     userAgent: '*',
    //     disallow: ['/server-sitemap.xml'],
    //   },
    //   {
    //     userAgent: '*',
    //     disallow: ['/api'],
    //   },
    //   { userAgent: '*', allow: '/' },
    // ],
    additionalSitemaps: [
      `https://www.golaiv.com/sitemap.xml`,
      `https://www.golaiv.com/server-sitemap.xml`,
    ],
  },
}
