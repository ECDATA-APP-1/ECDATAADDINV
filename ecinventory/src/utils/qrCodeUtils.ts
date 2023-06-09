import qrcode from 'qrcode';

// Generate a unique QR code for an item
export const generateUniqueQRCode = async (itemId: number): Promise<string> => {
  const qrCodeData = `item_${itemId}`; // Unique identifier for the item, e.g., item ID

  try {
    const qrCode = await qrcode.toDataURL(qrCodeData);
    return qrCode;
  } catch (error) {
    console.error('Error generating QR code:', error);
    throw error;
  }
};
