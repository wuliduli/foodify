import { Input } from "../../../components/ui/input";
import { User } from "lucide-react"

export default function Header() {
    return (
        <header className="w-full bg-white p-5 text-center fixed top-0 left-0 text-grey shadow-lg">
            <div className="flex flex-row w-full items-center justify-center gap-15">
                <div className="text-3xl font-semibold">
                    <p>Foodify</p>
                </div>
                <div className="w-[300px]">
                    <Input placeholder="Suche..." />
                </div>
                <div>
                    <p>
                        Filtern
                    </p>
                </div>
                <div>
                    <p>
                        Anmelden
                    </p>
                </div>
                <div>
                    <User className="w-6 h-6 inline-block" />
                </div>
            </div>
        </header>
    );
}