import { useState } from "react";

export default function useFormInput(initialValue) {

  const [value, setValue] = useState(initialValue)

  function handleChange({target}) {
    setValue(target.value)
  }

  function clear() {
    setValue('')
  }

  return{
    value:value,
    onChange: handleChange,
    clear,
  }
}