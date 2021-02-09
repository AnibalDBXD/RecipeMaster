import styles from "../../../../styles/components/Preparation/Instructions/Instruction/Instruction.module.scss";

const Instruction = ({ children, number }) => (
  <li className={styles.instruction}>
    <div className={styles.numbercontainer}>
      <p>{number}</p>
    </div>
    <p className={styles.instruction__text}>{children}</p>
  </li>
);
export default Instruction;
