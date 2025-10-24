import { additionalWebsites } from "@/data/additional-websites";
import IndividualItems from "./IndividualItems";

export default function AdditionalProjectList({
  start,
  end,
}: {
  start: number;
  end: number;
}) {
  return (
    <ul className=" w-full py-5 ">
      {additionalWebsites
        .filter((item, index) => index >= start && index <= end)
        .map((item) => (
          <IndividualItems key={item.url} item={item} />
        ))}
    </ul>
  );
}
