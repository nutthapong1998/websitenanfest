Place your Cloudflare Origin Certificate here:

  cloudflare-origin.pem   <- the certificate (PEM)
  cloudflare-origin.key   <- the private key (PEM)

How to get them:
  1. Cloudflare Dashboard -> your domain -> SSL/TLS -> Origin Server
  2. "Create Certificate" (leave RSA/ECC default, set hostnames e.g. example.com, *.example.com)
  3. Copy "Origin Certificate"  -> save as cloudflare-origin.pem
     Copy "Private Key"         -> save as cloudflare-origin.key

Then set SSL/TLS encryption mode to "Full (strict)" in the Cloudflare dashboard.

Optional (Authenticated Origin Pulls): download the Cloudflare CA and save as
  cloudflare-origin-pull-ca.pem
then uncomment the ssl_client_certificate / ssl_verify_client lines in
nginx/conf.d/default.conf.

NOTE: never commit the real .key file to git.
