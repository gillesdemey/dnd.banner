import { useCallback } from "react";
import { useToPng } from "@hugocxl/react-to-image";
import { useForm } from "react-hook-form";

import styles from "./Editor.module.css";
import Poster from "../Poster/Poster";
import styled from "@emotion/styled";
import { marked } from "marked";

function Editor() {
  const form = useForm({
    defaultValues: {
      title: "Echoes of the Abyss",
      subTitle: "The Shadowspire",
      image: "/the shadowspire/_9184f7ad-d139-4bc6-9d1f-9e028d1ec395.jpg",
      imageOffset: [0, 0] as [number, number],
      when: "Wednesday, **June 19** at **19h**",
      where: "World's End Comics & Games",
      fontColor: "#e9b3e7",
      backgroundColor: "#270845",
    },
  });

  const onSubmit = () => {
    saveAsPNG();
  };

  const downloadBlob = useCallback(
    (data: string) => {
      const link = document.createElement("a");

      link.download = `${form.getValues("title")} - ${form.getValues("subTitle")}.png`;
      link.href = data;

      link.click();
    },
    [form],
  );

  const [_state, saveAsPNG, ref] = useToPng<HTMLDivElement>({
    onError: (err) => console.error(err),
    onSuccess: downloadBlob,
  });

  return (
    <div className={styles.EditorWrapper}>
      <Form onSubmit={form.handleSubmit(onSubmit)}>
        {/* title */}
        <Field>
          <label htmlFor="title">Title</label>
          <Input {...form.register("title")} />
        </Field>
        {/* subtitle */}
        <Field>
          <label htmlFor="subTitle">Subtitle</label>
          <Input {...form.register("subTitle")} />
        </Field>
        {/* image */}
        <Field>
          <label htmlFor={"image"}>Image</label>
          <Input
            type="file"
            accept="image/png, image/jpeg, image/webp"
            {...form.register("image")}
          />
        </Field>
        {/* when */}
        <Field>
          <label htmlFor={"when"}>When</label>
          <Input {...form.register("when")} />
        </Field>
        {/* where */}
        <Field>
          <label htmlFor={"where"}>Where</label>
          <Input {...form.register("where")} />
        </Field>

        {/* fontColor */}
        <Field>
          <label htmlFor={"fontColor"}>Text color</label>
          <Input type="color" {...form.register("fontColor")} />
        </Field>

        {/* backgroundColor */}
        <Field>
          <label htmlFor={"backgroundColor"}>Background color</label>
          <Input type="color" {...form.register("backgroundColor")} />
        </Field>

        <Submit type="submit">Save as PNG</Submit>
      </Form>

      <div className={styles.Preview}>
        {/* render the poster with the form values */}
        <Poster
          ref={ref}
          title={form.watch("title")}
          subtitle={form.watch("subTitle")}
          image={form.watch("image")}
          imageOffset={form.watch("imageOffset")}
          // @ts-expect-error parseInline only return Promise<string> when async is true
          when={marked.parseInline(form.watch("when"), { async: false })}
          where={form.watch("where")}
          fontColor={form.watch("fontColor")}
          backgroundColor={form.watch("backgroundColor")}
        />
      </div>
    </div>
  );
}

const Form = styled.form({
  display: "flex",
  flexDirection: "column",
  gap: 10,

  padding: "0 40px",

  flex: 1,
  width: 600,
});

const Field = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Input = styled.input({
  fontSize: 18,
  lineHeight: "1.5em",
});

const Submit = styled.button({
  fontSize: 18,
  alignSelf: "start",
});

export default Editor;
