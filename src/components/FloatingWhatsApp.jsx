import { whatsAppLink } from '../utils/links'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      className="float-wa"
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <WhatsAppIcon className="whatsapp-icon" size={28} />
    </a>
  )
}
