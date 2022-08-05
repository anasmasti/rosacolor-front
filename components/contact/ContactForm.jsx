import MainButton from "../shared/MainButton";
import Input from "./Input";
import Textarea from "./Textarea";

export default function ContactForm() {
  function sendMessage() {
    console.log('Done');
  }
  return (
    <form>

      <div>
        <Input />
      </div>
    
      <div className="mb-6">
        <Textarea />
      </div>

      <div>
        <MainButton value="Envoyer" styleClass={"w-full"} onClick={() => sendMessage()}/>
      </div>

    </form>
  );
}
