import React, { PropTypes } from "react";
import radium from "radium";
import cn from "classnames";
import {
  Card,
  CardImage,
  CardText,
  CardDescription,
  CardAnchor,
  CardActionIcon,
} from "../card";
import TextBubble from "../textBubble";
import { Play as PlayIcon, ClockOutline as ClockIcon } from "../icon";
import { color } from "../../../settings.json";
import { duration } from "../../utils/time";

const styles = {
  playIcon: {
    bottom: "17px",
    color: color.white,
    fontSize: "20px",
    left: "24px",
    position: "absolute",
  },

  textBubble: {
    bottom: "9px",
    minWidth: "76px",
    position: "absolute",
    right: "10px",
  },

  action: {
    position: "absolute",
    right: "22px",
    top: "25px",
  },
};


const CardVideo = ({
  href,
  imageSrc,
  aspectRatio,
  runtime,
  heading,
  bullets,
  onClick,
  layout,
  className,
  runtimeUnit,
  style,
}) => (
  <Card
    className={cn("Card--video", className)}
    layout={layout}
    style={style}
  >
    <CardImage
      href={href}
      src={imageSrc}
      aspectRatio={aspectRatio}
      opacity={0.8}
    >
      <PlayIcon style={styles.playIcon} />

      {runtime &&
        <TextBubble style={styles.textBubble}>
          {duration(runtime, runtimeUnit)}
        </TextBubble>
      }
    </CardImage>

    <CardText>
      <CardAnchor
        href={href}
        layout={layout}
      >
        <CardDescription
          heading={heading}
          bullets={bullets}
        />
      </CardAnchor>

      {onClick &&
        <CardActionIcon
          style={[
            styles.action,
            layout === "tile" && { right: "3px" },
          ]}
          onClick={onClick}
        >
          <ClockIcon label="Watch later" />
        </CardActionIcon>
      }
    </CardText>
  </Card>
);

CardVideo.propTypes = {
  href: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  aspectRatio: PropTypes.oneOf([
    "video",
    "poster",
  ]).isRequired,
  runtime: PropTypes.number.isRequired,
  runtimeUnit: PropTypes.oneOf([
    "seconds",
    "milliseconds",
  ]),
  heading: PropTypes.string.isRequired,
  bullets: PropTypes.arrayOf(PropTypes.string).isRequired,
  layout: PropTypes.oneOf([
    "card",
    "tile",
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.object,
    ]),
  ),
};

CardVideo.defaultProps = {
  aspectRatio: "video",
  layout: "card",
};

export default radium(CardVideo);
