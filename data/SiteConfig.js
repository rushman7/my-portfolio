module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  blogAuthorDir: "sample-authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "arthur", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "Arthur Pisakhov", // Site title.
  siteTitleAlt: "Software Engineer.", // Alternative site title for SEO.
  siteLogo:
    "/logos/logo-1024.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://arthurpisakhov.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "A portfolio by Arthur Pisakhov, A Software Engineer learning and discovering what the programming world has to offer.", // Website description used for RSS feeds/meta description tag.
  favicon: 'static/logos/logo-1024.png',
    siteCover:
    "https://i2.wp.com/churchmediadrop.com/wp-content/uploads/edd/2017/11/Night-Sky.jpg?fit=1280%2C720&ssl=1", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssAuthor: "Arthur Pisakhov", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights
  sitePaginationLimit: 10, // The max number of posts per page.
  googleAnalyticsID: "UA-111982167-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
    "https://github.com/rushman7",
    "http://www.linkedin.com/in/arthur-pisakhov",
    "https://docs.google.com/document/d/1_tO2nz78-ObbjWqlLsAVSlDheoBuOJ8xk-JsTjUe86g/edit?usp=sharing",
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/rushman7",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },
    {
      label: "LinkedIn",
      url: "http://www.linkedin.com/in/arthur-pisakhov",
      iconClassName: "fa fa-linkedin" // Disabled, see Navigation.jsx
    },
    {
      label: "Resume",
      url: "https://docs.google.com/document/d/1_tO2nz78-ObbjWqlLsAVSlDheoBuOJ8xk-JsTjUe86g/edit?usp=sharing",
      iconClassName: "far fa-file" // Disabled, see Navigation.jsx
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "Arthur Pisakhov", // Label used before the year
    year: "2020", // optional, set specific copyright year or range of years, defaults to current year
    url: "https://arthurpisakhov.com/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: true // Enables the GatsbyJS promotion information in footer.
};
