// This page will allow the shop to scan the client qr code to get the client's information

export const QrCodeScanner = () => {
  // ask the user for camera permission
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  useEffect(() => {
    (async () => {
      const { status } = await Barttery.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  return (
    <>
      <h1>Scanner QR Code</h1>
      {/* Faudra mettre le code pour scanner le QR code */}
    </>
  );
};
