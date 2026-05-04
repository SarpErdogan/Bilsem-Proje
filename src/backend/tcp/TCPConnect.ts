import TcpSocket from "react-native-tcp-socket";
import { Alert } from "react-native";

let socket: any = null;

const ip = "192.168.4.1";
const port = 5000;

export const connectTCPServer = () => {
  if (socket) {
    socket.destroy();
    socket = null;
  }

  socket = TcpSocket.createConnection(
    { host: ip, port: port },
    () => {
      console.log("Bağlandı");
      sendTime(); // bağlanınca saat gönder
    }
  );

  socket.on("data", (data: any) => {
    console.log("Server:", data.toString());
  });

  socket.on("error", (err: any) => {
    console.log("Hata:", err);
    Alert.alert("Bağlantı Hatası", err.message);
  });

  socket.on("close", () => {
    console.log("Bağlantı kapandı");
  });
};

export const sendTCP = (msg: string) => {
  if (!socket) {
    Alert.alert("Hata", "Önce bağlan");
    return;
  }

  socket.write(msg + "\n");
};

export const sendTime = () => {
  const now = new Date();

  const timeOnly =
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0") +
    ":" +
    String(now.getSeconds()).padStart(2, "0");

  sendTCP("SET_TIME " + timeOnly);
};