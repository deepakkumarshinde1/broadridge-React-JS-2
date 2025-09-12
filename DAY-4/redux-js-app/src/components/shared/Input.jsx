import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  let { type = "text", placeholder = "missing", label = "NA" } = props;
  let inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      getValue: () => inputRef.current.value,
      setValue: (value) => {
        inputRef.current.value = value;
      },
      getFocus: () => inputRef.current.focus(),
    };
  });
  return (
    <>
      <section className="form-control">
        <label htmlFor="">{label}</label>
        <input type={type} placeholder={placeholder} ref={inputRef} />
      </section>
    </>
  );
}

export default forwardRef(Input);
