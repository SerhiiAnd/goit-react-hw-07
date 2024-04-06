import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectedContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

export default function ContactList() {
  const contacts = useSelector(selectedContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => {
        return (
          <li className={css.listItem} key={contact.id}>
            <Contact data={contact}></Contact>
          </li>
        );
      })}
    </ul>
  );
}
