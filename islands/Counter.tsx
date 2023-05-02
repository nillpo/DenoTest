import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  let icon = "🐶";
  if (count % 5 === 0) icon = "😺";
  const inu = Array.from({ length: count }, (_, i) => icon);
  return (
    <div>
      <p>{inu}</p>
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
