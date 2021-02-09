import useLocalStorage from "../../hooks/useLocalStore";
import styles from "../../styles/components/Checkbox/Checkbox.module.scss";

const Checkbox = ({ name, text }) => {
  const localName = String(name + text.length);

  const [Value, setValue] = useLocalStorage(localName, false);
  console.log(Value);

  return (
    <label className={styles.checkbox} htmlFor={localName}>
      <input
        className={styles.checkbox__input}
        type="checkbox"
        name={localName}
        id={localName}
        onChange={() => setValue(!Value)}
        checked={Value}
      />
      <p className={styles.checkbox__text}>{text}</p>
    </label>
  );
};
export default Checkbox;
