import  Example from "./componentes/TableCurd";
import ContactForm from "./componentes/ContactForm";
import FormSamples from "./componentes/FormSamples";
import EmailForm from "./componentes/EmailForm";
import ControlContactForm from "./componentes/ControlContactForm";
import Modal from "./componentes/Modal";
import FormDialog from "./componentes/FormDialog";
import ShowUsers from "./componentes/ShowUsers";
import Toaggle from "./componentes/Toaggle"
import LocalStorage from "./componentes/LocalStorage";

export default function Home() {
  return (
    <main>
     <Example/>
     <br/>
     <LocalStorage/>
     <br/>
     <div className="bg-clolor=read">
     Toggle :
     <Toaggle/>
     </div>
      <br/>
  <ShowUsers/>
      <br/>
      
     
    </main>
  )
}
