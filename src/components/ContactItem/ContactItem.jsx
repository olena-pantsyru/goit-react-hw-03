import css from "./ContactItem.module.css";

export default function ContactItem({ contact }) {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
    </li>
  );
}