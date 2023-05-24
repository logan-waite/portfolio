import useInterval from "@/lib/useInterval";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

type TransporterProps = {
    triggered: boolean;
    onFinish: () => void;
    onClick: () => void;
};
export default function Transporter({
    triggered = false,
    onFinish,
    onClick,
}: TransporterProps) {
    const [transporterState, setTransporterState] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    useInterval(
        () => {
            switch (isAtStart) {
                case true:
                    setTransporterState(transporterState + 1);
                    if (transporterState > 6) {
                        setIsAtStart(false);
                        onFinish();
                    }
                    break;
                case false:
                    setTransporterState(transporterState - 1);
                    if (transporterState <= 1) {
                        setIsAtStart(true);
                        onFinish();
                    }
            }
        },
        triggered ? 500 : null
    );

    const transporterStage =
        transporterState === 0
            ? ""
            : transporterState > 0 && transporterState <= 7
            ? `-${transporterState}`
            : `-empty`;
    const icon = `transporter${transporterStage}` as IconName;
    return <FontAwesomeIcon icon={["fas", icon]} onClick={onClick} />;
}
