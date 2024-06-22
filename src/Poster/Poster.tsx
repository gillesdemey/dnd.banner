import { CSSProperties, ReactNode } from "react";
import { Textfit } from "react-textfit";

import styles from "./Poster.module.css";
import { css, cx } from "@emotion/css";

type Props = {
  title: string;
  subtitle: string;

  image: string;

  when: ReactNode;
  where: string;

  fontColor?: string;
  backgroundColor?: string;

  imageOffset?: CSSProperties;
};

const Poster = ({
  title,
  subtitle,
  image,
  when,
  where,

  fontColor,
  backgroundColor,

  imageOffset,
}: Props) => {
  const fontColorStyle = css({
    color: fontColor,
    borderColor: fontColor,
  });

  const backgroundColorStyle = css({ background: backgroundColor });

  return (
    <div className={cx(styles.Wrapper, backgroundColorStyle)}>
      <div>
        <div className={styles.Titles}>
          <h1 className={cx(styles.Title, fontColorStyle)}>{title}</h1>
          <div className={styles.SubtitleWrapper}>
            <img height={140} src="src/assets/logo.7c6e5452.svg" />
            <div className={cx(styles.Subtitle, fontColorStyle)}>
              <Textfit mode="single">{subtitle}</Textfit>
            </div>
          </div>
        </div>
        <div className={styles.ImageWrapper}>
          <img className={styles.Image} style={imageOffset} src={image} />
        </div>
      </div>
      <div className={cx(styles.When, fontColorStyle)}>
        <Textfit mode="single" max={56}>
          {when}
        </Textfit>
      </div>
      <div className={cx(styles.Where, fontColorStyle)}>{where}</div>
    </div>
  );
};

export default Poster;
