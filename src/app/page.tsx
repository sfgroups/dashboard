import Link from "next/link"
import ContactForm from "./componentes/ContactForm"
import FormSamples from "./componentes/FormSamples"

export default function Home() {
  return (
    <main>
      <ContactForm/>
      <br/>
      <FormSamples/>
     
    </main>
  )
}
