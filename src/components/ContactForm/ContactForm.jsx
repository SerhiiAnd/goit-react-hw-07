import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { useDispatch } from "react-redux";
// import { addContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsOps";
import css from "./ContactForm.module.css";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = e.target.elements;

    if (!name.value || !number.value) {
      alert("Please fill in all fields!");
      return;
    }

    dispatch(
      addContact({
        name: name.value,
        number: number.value,
        id: nanoid(),
      })
    );

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label} htmlFor="name">
        Name
      </label>
      <input className={css.field} id="name" name="name" />

      <label className={css.label} htmlFor="number">
        Number
      </label>
      <input className={css.field} id="number" name="number" />

      <button className={css.buttonStyle} type="submit">
        Add contact
      </button>
    </form>
  );
}
