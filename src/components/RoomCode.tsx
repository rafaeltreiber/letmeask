import copyImg from "../assets/images/copy.svg";
import "../styles/room-code.scss";

type roomCodeProps = {
    code: string;
}

export function RoomCode(props: roomCodeProps) {
    function copyRoomCodeToClippboard() {
        navigator.clipboard.writeText(props.code)
    }


    return (
        <button className="room-code" onClick = {copyRoomCodeToClippboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}
