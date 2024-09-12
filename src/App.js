import { GoSearch } from "react-icons/go";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/navbar";
import "./index.css"
import Lists from "./components/lists";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase';
import AddandUpdatecontact from "./components/AddandUpdatecontact";
import useDisclose from "./hooks/useDisclose";
import NoContacts from "./components/NoContacts";

function App() {

  const [contact, setcontact] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose()

  const filter = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef, (snapshot) => {

      const contactlist = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })

      const filteredContacts = contactlist.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));
      setcontact(filteredContacts);
      return filteredContacts;
    });
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {

          const contactlist = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setcontact(contactlist);
          return contactlist;
        });
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  }, [])




  return (
    <>
      <div className=" border-2 rounded-2xl px-4 max-w-[370px] h-screen bg-[#006989] m-auto">
        <Navbar />
        <div className="flex relative">
          <GoSearch className="text-[#1F316F] text-2xl absolute left-2 top-2" />
          <input onChange={filter} type="text" className="bg-transparent rounded-md border-[#1F316F] border-2 flex-grow h-10 px-10 text-[#1F316F]" placeholder="Search Contact" />
          <button><BsFillPlusCircleFill onClick={onOpen} className="text-white text-4xl ml-2 cursor-pointer" />
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contact.length <= 0 ? <NoContacts /> :
            contact.map((contact) =>
              <Lists contact={contact} />)}
        </div>


      </div>
      <AddandUpdatecontact isOpen={isOpen} onClose={onClose} />
      <ToastContainer position="bottom-center" />
    </>);
}

export default App;
