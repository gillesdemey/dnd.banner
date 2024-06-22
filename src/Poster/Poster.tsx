import { CSSProperties, ReactNode, useCallback } from "react";
import { Textfit } from "react-textfit";

import styles from "./Poster.module.css";
import { css, cx } from "@emotion/css";
import { useToPng } from "@hugocxl/react-to-image";

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
  const savePng = useCallback((data: string) => {
    const link = document.createElement("a");

    link.download = "banner.png";
    link.href = data;

    link.click();
  }, []);

  const [_state, convert, ref] = useToPng<HTMLDivElement>({
    onError: (err) => console.error(err),
    onSuccess: savePng,
  });

  const fontColorStyle = css({
    color: fontColor,
    borderColor: fontColor,
  });

  const backgroundColorStyle = css({ background: backgroundColor });

  return (
    <>
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
      <button className={styles.Save} onClick={convert}>
        Save to PNG
      </button>
    </>
  );
};

export default Poster;
