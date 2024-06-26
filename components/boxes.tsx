interface boxProps {
  textList: string[];
}

export default function Boxes({ textList }: boxProps) {
  return (
    <div>
      {textList.map((text, index) => (
        <div key={index}>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
