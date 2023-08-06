import TextareaAutosize from "react-textarea-autosize";
import { useEffect, useState } from "react";

export default function TextareaInput({
  value,
  setBusinessCardChild,
  businessCardChild,
}: {
  value: string;
  setBusinessCardChild: any;
  businessCardChild: any;
}) {
  const [text, setText] = useState(value);

  // useEffect(() => {
  //   setText(value);
  // }, [value]);

  useEffect(() => {
    setBusinessCardChild({
      ...businessCardChild,
      text,
    });
  }, [text]);

  // console.log("value", value);
  // console.log("text", text);

  return (
    <TextareaAutosize
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
      placeholder="Title"
      className="w-full resize-none overflow-hidden px-3 py-2 text-sm rounded-md border border-input bg-background focus:outline-none"
    />
  );
}
