import React from "react";
import { ShareButtons } from "react-share";
import "./PostShare.css";

const formatSiteUrl = (siteUrl, pathPrefix, path) =>
  siteUrl + (pathPrefix === "/" ? "" : pathPrefix) + path;

// const getCover = post => {
//   const { cover } = post;
//   if (cover && cover.childImageSharp && cover.childImageSharp.original) {
//     return cover.childImageSharp.original.src;
//   }
//   return "";
// };

class PostShare extends React.Component {
  render() {
    const { postNode, postPath, config } = this.props;
    const post = postNode.frontmatter;
    const url = formatSiteUrl(config.siteUrl, config.pathPrefix, postPath);

    const {
      FacebookShareButton,
      GooglePlusShareButton,
      // PinterestShareButton,
      TwitterShareButton
    } = ShareButtons;

    return (
      <section className="share">
        
      </section>
    );
  }
}

export default PostShare;
