/**
 * Gera uma URL de WhatsApp com uma mensagem pré-definida
 * @param phoneNumber O número de telefone no formato internacional (por exemplo, +5547997931736)
 * @param message A mensagem que será enviada
 * @returns A URL completa do WhatsApp com a mensagem
 */
export const generateWhatsAppUrl = (
  phoneNumber: string,
  message: string,
): string => {
  return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
}
