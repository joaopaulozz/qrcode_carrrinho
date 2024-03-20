import { Html5QrcodeScanner } from "html5-qrcode";

function verifyCart(code: string): string | null {
  const carts = {
    carrinho_1: [1266026, 541651616516],
    carrinho_2: [14981668995, 651652315189],
    carrinho_3: [52635963226, 85236523615],
    carrinho_4: [48491651651, 654181655615]
  }

  for (const cartKey in carts) {
    const cartItems = carts[cartKey];
    if (cartItems.includes(Number(code))) {
      console.log("carrinho ", cartKey)
      alert("LOCALIZADO NO "+ cartKey)
      return cartKey;
    }
  }
  
  return null; // Retorna null se o código não estiver em nenhum carrinho
}

function onScanSuccess(decodedText: string) {
  console.log(decodedText)
  const cartKey = verifyCart(decodedText);
  if (cartKey) {
    console.log(`O código ${decodedText} pertence ao carrinho ${cartKey}`);
  } else {
    console.log(`O código ${decodedText} não pertence a nenhum carrinho`);
  }
}

function onScanFailure(error: string) {
  //console.warn(`Code scan error = ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
  "reader",
  { fps: 10, qrbox: { width: 250, height: 250 } },
  /* verbose= */ false);

html5QrcodeScanner.render(onScanSuccess, onScanFailure);