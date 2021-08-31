import copyImg from '../../assets/images/copy.svg';
import { Button, Div, Span } from './style';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <Button className="room-code" onClick={copyRoomCodeToClipboard}>
      <Div>
        <img src={copyImg} alt="Copy room code" />
      </Div>
      <Span>Sala #{props.code}</Span>
    </Button>
  );
}
