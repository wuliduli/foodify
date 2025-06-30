import { header, plainText, inputField, inputFieldEnvironmentColumn, hintText } from "../tailwind";
import { Button } from "../../components/ui/button";

export default function anmelden() {
  return (
    <div className="flex flex-col justify-center min-h-screen md:pl-143 py-2">
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
            <input type="email" id="email" name="email" className={inputField} required />
          </form>
        </div>
      </div>
      <div>
        <div>
          <form className={inputFieldEnvironmentColumn}>
            <label htmlFor="password" className={plainText}>Passwort:</label>
            <input type="password" id="password" name="password" className={inputField} required />
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