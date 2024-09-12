
import { FaRegCircleUser } from "react-icons/fa6";
import { RiEditCircleLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from '../config/firebase'
import AddandUpdatecontact from "./AddandUpdatecontact";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";
export default function Lists({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclose()




  const deleteContact = async (id) => {

    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div>
      <div className="bg-[#6EACDA] flex justify-between p-2 rounded-lg " key={contact.id}>
        <div className="flex gap-2"> <FaRegCircleUser className="text-4xl text-[#1E2A5E]" />
          <div>
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div></div>
        <div className="flex">
          <RiEditCircleLine onClick={onOpen} className="text-3xl  text-[#EEEEEE] cursor-pointer" />
          <MdDelete onClick={() => deleteContact(contact.id)} className="text-3xl text-[#921A40] cursor-pointer" />

        </div>
      </div>
      <AddandUpdatecontact isUpdate contact={contact} isOpen={isOpen} onClose={onClose} />
    </div>
  );

}
