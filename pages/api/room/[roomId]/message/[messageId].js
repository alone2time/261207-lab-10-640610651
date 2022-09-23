import { writeDB, readDB } from "../../../../../backendLibs/dbLib";

export default function roomIdMessageIdRoute(req, res) {
  if (req.method === "DELETE") {
    const rooms = readDB();
    //read value from URL
    const roomId = req.query.roomId;
    const messageId = req.query.messageId;
    const checkRoom = rooms.findIndex((x) => x.roomId === roomId);
    if (checkRoom === -1)
      return res.status(404).json({ ok: false, message: "Invalid room id" });
    const message = rooms[checkRoom].messages;
    const checkMessage = message.findIndex((x) => x.messageId === messageId);
    if (checkMessage === -1)
      return res.status(404).json({ ok: false, message: "Invalid message id" });
    message.splice(checkMessage, 1);
    writeDB(rooms);
    return res.json({ ok: true });
  }
}
