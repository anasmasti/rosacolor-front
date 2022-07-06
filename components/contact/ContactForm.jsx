import Input from "./Input";
import SendMessageBtn from "./SendMessageBtn";
import Textarea from "./Textarea";

export default function ContactForm() {
  return (
    <form>
      <div>
        <Input />
      </div>
    
      <div className="mb-6">
        <Textarea />
       
      </div>
      <div>
        <SendMessageBtn />
       
      </div>
    </form>
  );
}
