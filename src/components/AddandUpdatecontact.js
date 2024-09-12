import Modal from "./modal";
import { Formik, Form, Field } from 'formik';
import { addDoc, collection, updateDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase'
import { toast } from "react-toastify";


export default function AddandUpdatecontact({ isOpen, onClose, isUpdate, contact }) {
  const addcontact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact)
      onClose();
      toast.success("Contact Added Successfully")


    } catch (error) {
      console.log("error");
    }
  }
  const updatecontact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact)
      onClose();
      toast.success("Contact Updated Successfully")


    } catch (error) {
      console.log("error");
    }
  }


  return (
    <div><Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        initialValues={
          isUpdate ?
            {
              name: contact.name,
              email: contact.email,
            } :
            {
              name: "",
              email: "",
            }}
        onSubmit={(values) => {
          isUpdate ? updatecontact(values, contact.id) :
            addcontact(values);
        }}
      >
        <Form className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="border-2 rounded-lg h-10  p-2" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" className="border-2 rounded-lg  h-10  p-2" required />
          </div>
          <button className=" border border-[#086609] rounded-xl bg-[#A2CA71] p-2 text-sm self-end font-mono"> {isUpdate ? "Update" : "Add"} Contact</button>
        </Form>
      </Formik>
    </Modal></div>
  )
}
