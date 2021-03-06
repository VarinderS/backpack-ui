import React, { PropTypes } from "react";
import radium from "radium";
import CoverPhoto from "../coverPhoto";
import { color, timing } from "../../../settings.json";

const styles = {
  container: {
    position: "relative",
  },

  anchor: {
    display: "block",
  },
};

const imageSizes = {
  video: {
    width: 412,
    height: 232,
  },
  poster: {
    width: 290,
    height: 378,
  },
};

const CardImage = ({
  href,
  src,
  aspectRatio,
  children,
  opacity,
  style,
}) => (
  <div
    className="Card-image"
    style={[
      styles.container,
      opacity && { backgroundColor: color.black },
      style,
    ]}
  >
    <a
      href={href}
      tabIndex={-1}
      style={styles.anchor}
    >
      {src &&
        <CoverPhoto
          src={src}
          width={imageSizes[aspectRatio].width}
          height={imageSizes[aspectRatio].height}
          style={[
            styles.coverPhoto,
            opacity && {
              opacity,
              transition: `opacity ${timing.default} ease-in-out`,
            },
          ]}
        />
      }

      {children}
    </a>
  </div>
);

CardImage.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf([
    "video",
    "poster",
  ]).isRequired,
  children: PropTypes.node,
  opacity: PropTypes.number,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

CardImage.defaultProps = {
  aspectRatio: "video",
};

export default radium(CardImage);
