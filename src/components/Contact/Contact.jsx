import { BiSolidUser, BiPhone } from "react-icons/bi";
import css from "./Contact.module.css";
export default function ContactItem({ contact: { id, name, number }, onDelete }) {
  return (
    <li className={css.item} id={id}>
      <div className={css.info}>
        <div className={css.row}>
          <BiSolidUser className={css.icon} />
          <span className={css.text}>{name}</span>
        </div>
        <div className={css.row}>
          <BiPhone className={css.icon} />
          <span className={css.text}>{number}</span>
        </div>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}