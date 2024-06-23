import React, { ForwardedRef } from "react";
import { Textfit } from "react-textfit";

import styles from "./Poster.module.css";
import { css, cx } from "@emotion/css";

export type PosterProps = {
  title: string;
  subtitle: string;

  image: string;

  when: string;
  where: string;

  fontColor?: string;
  backgroundColor?: string;

  imageOffset?: [number, number];
};

const Poster = React.forwardRef(
  (
    {
      title,
      subtitle,
      image,
      when,
      where,

      fontColor,
      backgroundColor,

      imageOffset,
    }: PosterProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const fontColorStyle = css({
      color: fontColor,
      borderColor: fontColor,
    });

    const backgroundColorStyle = css({ background: backgroundColor });

    return (
      <div ref={ref} className={cx(styles.Wrapper, backgroundColorStyle)}>
        <div>
          <div className={styles.Titles}>
            <h1 className={cx(styles.Title, fontColorStyle)}>{title}</h1>
            <div className={styles.SubtitleWrapper}>
              <img height={140} src="logo.7c6e5452.svg" />
              <div className={cx(styles.Subtitle, fontColorStyle)}>
                <Textfit mode="single">{subtitle}</Textfit>
              </div>
            </div>
          </div>
          <div className={styles.ImageWrapper}>
            <img
              className={styles.Image}
              style={{
                marginTop: imageOffset?.[0],
                marginLeft: imageOffset?.[1],
              }}
              src={image}
            />
          </div>
        </div>
        <div className={cx(styles.When, fontColorStyle)}>
          <Textfit mode="single" max={56}>
            <span dangerouslySetInnerHTML={{ __html: when }} />
          </Textfit>
        </div>
        <div className={cx(styles.Where, fontColorStyle)}>{where}</div>
      </div>
    );
  },
);

export default Poster;
