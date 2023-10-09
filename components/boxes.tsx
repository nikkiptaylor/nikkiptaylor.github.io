import styles from "../styles/box.module.css";

interface boxProps {
  textList: string[];
}

export default function Boxes({ textList }: boxProps) {
  return (
    <div>
      {textList.map((text, index) => (
        <div className={styles.box} key={index}>
          <p className={styles.box2}>{text}</p>
        </div>
      ))}
    </div>
  );
}
