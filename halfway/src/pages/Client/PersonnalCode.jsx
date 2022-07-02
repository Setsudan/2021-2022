// Page where user custom qr code can be seen
import { useState, useEffect } from "react";
export const PersonnalCode = () => {
  // userUid will be replaced with the userUid stored in supabase
  const userUid = "HETIC - Groupe 6";
  // call an api to generate a qr code based on the uid
  const [qrCode, setQrCode] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userUid}`
    ).then((res) => {
      setLoading(false);
      setQrCode(res.url);
    });
  }, []);
  return (
    <>
      <h1 className="TitreQR">Votre QR Code</h1>
      {loading ? (
        <div className="loader">
          <div className="loader__text">Loading...</div>
        </div>
      ) : (
        <img
          src={qrCode}
          alt="frame"
          border="0"
          height={250}
          className="unique-code"
        />
      )}
      <h3 className="SousTitreQR">HETIC JCEP Groupe 6</h3>
      {/* Faudra mettre le code pour afficher le QR code */}
    </>
  );
};
