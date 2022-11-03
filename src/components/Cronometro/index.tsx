import Button from "../Button";
import Relogio from "./Relogio";

export function Cronometro() {
    return(
        <div>
            <p>Escolha um card e inicie o cronômetro</p>
            <div>
            <Relogio/>
            </div>
            <Button
                texto="Começar!"
            />
        </div>
    );
}