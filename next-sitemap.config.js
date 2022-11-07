/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL
module.exports = {
  siteUrl,
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
    additionalSitemaps: [`${siteUrl}sitemap.xml`, `${siteUrl}server-sitemap.xml`],
  },
}
