import Link from "next/link"
import ContactForm from "./componentes/ContactForm";
import FormSamples from "./componentes/FormSamples";
import EmailForm from "./componentes/EmailForm";
import ControlContactForm from "./componentes/ControlContactForm";
import Modal from "./componentes/Modal";
import FormDialog from "./componentes/FormDialog";
import ShowUsers from "./componentes/ShowUsers";

export default function Home() {
  return (
    <main>
     <FormDialog/>
      <br/>
  <ShowUsers/>
      <br/>
      
     
    </main>
  )
}
