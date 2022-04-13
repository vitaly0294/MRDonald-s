import { useState } from "react";

export function useChoices() {
  const [choice, setChoices] = useState();

  function changeChoices(e) {
    setChoices(e.target.value);
  }

  return { choice, changeChoices };
}