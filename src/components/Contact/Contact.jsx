import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ data }) {
  const dispatch = useDispatch();

  return (
    <div className={css.contact}>
      <div>
        <div className={css.container}>
          <span role="img" aria-label="person">
            👤
          </span>{" "}
          {data.name}
          <h1 className={css.text}></h1>
        </div>

        <div className={css.container}>
          ☎️
          <p className={css.text}>{data.number}</p>
        </div>
      </div>

      <button
        onClick={() => dispatch(deleteContact(data.id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
}
