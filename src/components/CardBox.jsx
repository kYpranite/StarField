import Card from "./Card";

export default function Cardbox() {
  return (
    <div className="flex flex-wrap w-[80%] h-[35%] my-5 gap-y-7 gap-10 overflow-y-auto border-2 border-gray-700 rounded-md justify-center py-7">
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
      <Card title="abcd" image="images/95.png" />
    </div>
  );
}
