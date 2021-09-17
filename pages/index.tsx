import { useId } from "@radix-ui/react-id";

export default function Home() {
  const id = useId();
  console.log(id);
  return <h1 id={id}>My page</h1>;
}
