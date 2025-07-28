import { inputFieldEnvironmentColumn, plainText, labelPadding, inputField, button } from "../tailwind";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { Upload, Plus } from "lucide-react"
import { FilterWithSearchbar } from "./popupWithSearch";

export default function rezepterstellung() {
    return (
        <div>
            <div>
                <form className={inputFieldEnvironmentColumn}>
                    <label htmlFor="email" className={plainText}>Rezeptname:</label>
                    <Input className={inputField} placeholder="Text..." />
                </form>
            </div>
            <div>
                <form className={inputFieldEnvironmentColumn}>

                    <label htmlFor="email" className={`${plainText} ${labelPadding}`}>Uploaden sie ihre Rezeptbilder::</label>
                    <div className="flex flex-row gap-5">
                        <div className="items-center">
                            <Button
                                className={button}>
                                <div>
                                    <Upload className="w-6 h-6 inline-block" />
                                </div>
                            </Button>
                        </div>
                        <p>50 MB Limit</p>
                    </div>
                </form>
            </div>
            <div className="flex flex-row gap-10">
                <div>
                    <form className={inputFieldEnvironmentColumn}>
                        <label htmlFor="email" className={`${plainText} ${labelPadding}`}>Zutaten:</label>
                        <FilterWithSearchbar />
                    </form>
                </div>
                <div>
                    <form className={inputFieldEnvironmentColumn}>
                        <label htmlFor="email" className={`${plainText} ${labelPadding}`}>Gewicht:</label>
                        <FilterWithSearchbar />
                    </form>
                </div>
            </div>
            <div className={"flex flex-row items-center gap-5 " + labelPadding}>
                <label className={plainText}>Hinzufügen</label>
                <Button className={button + " p-2"}>
                    <Plus className="w-6 h-6" />
                </Button>
            </div>
            <div className={"pt-3"}>
                <Textarea className="w-110 h-30" placeholder="Hier können Sie ihr Rezept beschreiben..." />
            </div>
                <div>
                    <form className={inputFieldEnvironmentColumn}>
                        <label htmlFor="email" className={`${plainText} ${labelPadding}`}>Portionen:</label>
                        <Select />
                    </form>
                </div>
                <div>
                    <form className={inputFieldEnvironmentColumn}>
                        <label htmlFor="email" className={`${plainText} ${labelPadding}`}>Zutaten:</label>
                        <Select />
                    </form>
                </div>                            
        </div>
    );
}