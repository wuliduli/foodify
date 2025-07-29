import { header, plainText, inputFieldEnvironmentColumn, inputField, button, buttonRed } from "../tailwind";
import { CarouselRezeptBilder } from "./carousel"
import Image from "next/image";
import Bild1 from "./Italienische-Rinderrouladen.png";
import Bild2 from "./Italienische-Rinderrouladen2.png";
import Bild3 from "./Italienische-Rinderrouladen3.png";
import Bild4 from "./Italienische-Rinderrouladen4.png";

export default function rezeptansicht() {
    return (
        <div>
            <div>
                <h1 className={header}>Rezeptname</h1>
            </div>
            <div>
                <CarouselRezeptBilder />
            </div>
            <div className="flex flex-row gap-5">
                <div>
                    <Image
                        src={Bild2}
                        alt="Bild 1"
                        className="w-[200px] h-[200px] object-cover rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src={Bild3}
                        alt="Bild 1"
                        className="w-[200px] h-[200px] object-cover rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src={Bild4}
                        alt="Bild 1"
                        className="w-[200px] h-[200px] object-cover rounded-xl"
                    />
                </div>
            </div>
            <div className="flex flex-row gap-5">
                <div className="flex flex row items-center gap-3">
                    <div>
                        <p className={plainText}>Bewertung:</p>
                    </div>
                    <div>
                        <p className={plainText}>$Beispiel</p>
                    </div>
                </div>
            </div>
        </div>
    );
}