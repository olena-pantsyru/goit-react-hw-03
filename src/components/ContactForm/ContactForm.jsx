import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length > 7) return cleaned.slice(0, 7);
    return cleaned
      .replace(/(\d{3})(\d{0,2})(\d{0,2})/, (_, g1, g2, g3) =>
        [g1, g2, g3].filter(Boolean).join("-")
      );
  };

  const handleNameChange = (e) => setName(e.target.value);
  
  const handleNumberChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setNumber(formatted);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Ім'я обов'язкове для введення!");
      return;
    }
    if (!/^\d{3}-\d{2}-\d{2}$/.test(number)) {
      setError("Номер телефону має бути у форматі XXX-XX-XX!");
      return;
    }

    onAdd({ id: nanoid(), name, number });
    setName("");
    setNumber("");
    setError("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Ім'я"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className={css.input}
        type="tel"
        placeholder="Номер (XXX-XX-XX)"
        value={number}
        onChange={handleNumberChange}
      />
      {error && <p className={css.error}>{error}</p>}
      <button className={css.button} type="submit">Додати контакт</button>
    </form>
  );
}
