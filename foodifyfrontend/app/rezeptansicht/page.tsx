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
            <div className="flex flex-col gap-5">
                <div>
                    <Image
                        src={Bild1}
                        alt="Bild 1"
                        className="w-[200px] h-[200px] object-cover rounded-xl"
                    />
                </div>
            </div>
        </div>
    );
}