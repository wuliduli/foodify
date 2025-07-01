import { header, plainText, inputField, inputFieldEnvironmentColumn, hintText, generalPadding } from "../tailwind";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

export default function anmelden() {
  return (
    <div className={generalPadding}>
      <div>
        <p className={header}>
          Anmelden
        </p>
      </div>
      <div>
        <p className={plainText}>Loggen sie sich hier in Ihren Account an, um Zugriff auf weitere Funktionen zu erhalten.</p>
      </div>
      <div>
        <div>
          <form className={inputFieldEnvironmentColumn}>
            <label htmlFor="email" className={plainText}>E-Mail:</label>
            <Input className={inputField} placeholder="email..." />
          </form>
        </div>
      </div>
      <div>
        <div>
          <form className={inputFieldEnvironmentColumn}>
            <label htmlFor="password" className={plainText}>Passwort:</label>
            <input type="password" id="password" name="password" className={inputField} required />
            <Input className={inputField} placeholder="passwort..." />
          </form>
        </div>
      </div>
      <div>
        <p className={hintText}>passwort vergessen?</p>
      </div>
      <div className="items-center">
        <Button
          className="bg-[#678164] hover:bg-[#8fc98a]">
          Anmelden
        </Button>
      </div>
    </div>
  );
}