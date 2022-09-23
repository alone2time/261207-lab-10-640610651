import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  const rooms = readDB();
  const room = rooms.map((x) => {
    return {
      roomId: x.roomId,
      roomName: x.roomName,
    };
  });

  return res.status(200).json({
    ok: true,
    rooms: room,
  });
}
