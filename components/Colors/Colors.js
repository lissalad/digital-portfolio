import styles from "./Colors.module.css";

export default function Colors() {
  let lines = [];
  for (let i = 0; i < 8; i += 1) {
    lines.push(i);
  }

  // can i put the id as an input to my animation???
  // STYLES !! thanks alex

  return (
    <div className={styles.container}>
      {lines.map((id) => (
        <div
          key={id}
          className={styles.cure}
          style={{ animationDelay: `${id * 200}ms` }}
        />
      ))}
    </div>
  );
}
