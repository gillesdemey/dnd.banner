import React, { ForwardedRef, ReactNode } from "react";
import { Textfit } from "react-textfit";

import styles from "./Poster.module.css";
import { css, cx } from "@emotion/css";

const LOGO = "dnd-gent-logo.svg";

export type PosterProps = {
  title: string;
  subtitle: string;

  image: ReactNode;

  when: string;
  where: string;

  fontColor?: string;
  backgroundColor?: string;
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
            {/* title (of the campaign, etc) */}
            <h1 className={cx(styles.Title, fontColorStyle)}>{title}</h1>

            <div className={styles.SubtitleWrapper}>
              {/* DND Gent logo */}
              <img height={140} src={LOGO} />
              {/* subtitle */}
              <div className={cx(styles.Subtitle, fontColorStyle)}>
                <Textfit mode="single">{subtitle}</Textfit>
              </div>
            </div>
          </div>
          {/* hero image, make it look epic! */}
          <div className={styles.ImageWrapper}>{image}</div>
        </div>
        {/* when? */}
        <div className={cx(styles.When, fontColorStyle)}>
          <Textfit mode="single" max={56}>
            <span dangerouslySetInnerHTML={{ __html: when }} />
          </Textfit>
        </div>
        {/* where? */}
        <div className={cx(styles.Where, fontColorStyle)}>{where}</div>
      </div>
    );
  },
);

export default Poster;
