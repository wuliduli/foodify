import { generalPadding, header, subHeader, button } from "../../tailwind";
import RezeptSchnellAnsicht from "../rezeptSchnellAnsicht/rezeptSchnellAnsicht";
import { Button } from "../../../components/ui/button";
import { RotateCw } from "lucide-react"
export default function AngemeldetStartseite() {
    return(
        <div className={generalPadding}>
            <div><p className={header}>Rezeptempfehlungen</p></div>
            <div><p className={subHeader}>Rezepte ausgewählt nach ihrem Geschmack</p></div>
            <div><RotateCw></RotateCw></div>
                        <div className="flex flex-row items-center justify-between gap-5">
                            <RezeptSchnellAnsicht />
                            <RezeptSchnellAnsicht />
                            <RezeptSchnellAnsicht />
                        </div>
            <div>
                <Button className={button}>Rezept erstellen</Button>
            </div>
            <div><p className={header}>Kochbuch</p></div>
        </div>
    );
}