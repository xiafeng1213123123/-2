"""Generate the QR for this Pages deployment; never retain the previous host URL."""
import os
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit

import qrcode
import qrcode.image.svg

root = Path(__file__).resolve().parents[1]
value = os.environ.get('PAGES_BASE_URL', '').strip()
parts = urlsplit(value)
if parts.scheme != 'https' or not parts.netloc or parts.username or parts.password:
    raise SystemExit('PAGES_BASE_URL must be the HTTPS base URL returned by configure-pages.')
if parts.query or parts.fragment:
    raise SystemExit('PAGES_BASE_URL must not contain a query or fragment.')
entry = urlunsplit((parts.scheme, parts.netloc, parts.path.rstrip('/') + '/', '', ''))
if len(entry) > 512:
    raise SystemExit('The deployment URL is too long.')

qr = qrcode.QRCode(error_correction=qrcode.constants.ERROR_CORRECT_M, box_size=8, border=4)
qr.add_data(entry)
qr.make(fit=True)
qr.make_image(image_factory=qrcode.image.svg.SvgPathImage).save(root / 'dist/assets/entry-qr.svg')
(root / 'dist/.nojekyll').touch()
print('Share-card QR destination: ' + entry)
