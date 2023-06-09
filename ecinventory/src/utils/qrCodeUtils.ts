// utils/qrCodeUtils.ts

import QRCode from 'qrcode';

export const generateQRCode = (item: Item) => {
  const data = JSON.stringify(item);
  QRCode.toDataURL(data, (err, url) => {
    if (err) {
      console.error('Error generating QR code:', err);
      return;
    }
    console.log('QR code generated:', url);
    // You can save or use the QR code URL as needed
    // For example, you can display the QR code in your app using an <Image> component
  });
};
