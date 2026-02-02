import QRCode from "react-qr-code";

export function QrSitioCompleto() {
  const url = "https://conceptocreativopym.com"; // tu dominio completo

  return (
    <div className="flex flex-col items-center gap-4">
      <QRCode value={url} size={180} />
      <p className="text-sm text-gray-600">
        Escanea para abrir la página completa
      </p>
    </div>
  );
}
