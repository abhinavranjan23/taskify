const admin = require("firebase-admin");
require("dotenv").config();

// Replace \\n with an actual newline character in the private key
const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDJ1rTkyKIKW+p1\nXptwUZurII8BrZZbr57WqYFTf/D0rtkeHxbOWEItlVTfxFqrsWZ5Y57ZXzVJdemk\nt0ZO7wD+zuq5XHytLgedU5d+e4PqfKiNhV4y/5z7VyE8bd/6PR4FNK28DY+ppnHn\n6Ntsd3Dz5RPZEts1wchQ6JRg5g8me5XojlGDJ7Z3Vuj6I3NQmvSswk2Wfi2RmVfg\n1ci6henM+/saDr7vFXw01ThXR6JXtR12FG7jsMZ+UmLMZUW4BXh4kSBvj/X2JBzC\n1ApTTvJmIIj6d5LOY+LNcAG3u4j1dgkYRtezKC+ccCwaLvGgSaXL8WNZZEr7w3p5\nP63brib5AgMBAAECggEAAW2yFmPEddNPC6lG61rAgcu3XLktn79/SHX8UtV3JJwv\nhYg4dpm8T4Cc5aqI7mnRLQRt+uGIHy7Pn66mYjz3IlaKOxPy/pzH9APum2K6EnOd\nvnFWXdZeS48YeUoudCHGRR4pfp5lSRDtrHOtneJohmlgJGtUPtinbMnV8aufKX63\niUJlHbZjEFSkceDwESXzlwmEaOSYXZz+WdNkKDgjW4FuIvhSpVLkUv0Bazhwrf6B\nyyrGt4k4tdaY+Pga5zSjIqpKU+t8jIq4KQQ65nIdB9mk5Bb4F6Y7OALWSfDen9iP\nrkducTys0yg1M/inUlkbjlQkibNdmiYOHA6hWEn72wKBgQDtR7b8Vpj9wcql1a1d\n08K11Ycx+8oo3HIAcLmPUMcXN1FtxIYFOXCyGvaEl5kxdZkYJkgLaaDvRPvU3Kxe\nDE2eI+DaEj7CuKllMXUzHM/V0eO1io+OWFo3zQPEJ5ENGnJ43wb0TgUirJZi82d7\nazJjciv0EGVLn3mAyHQmLgf5GwKBgQDZwzC4jYKcWVrlrAXjxGaCjKmFh+9kKsp0\nVGFocw6gASHfcQ+DuWT18/knV/9x1uBBGWU+O9ISzHCB2WsnhbSJfcF69QOsGHHG\nVu1f5o1h9RhzLn0etDnxJV7ruagaI2Wy5h+SE9j3gSwZcwYJBI+KCzJUPENcWf6W\nX+XkciLVewKBgH2lzDAzazB0vmqyi+tzh1fiioTdYF/i3Dt/dcN+cu7ITEZkGtQJ\nZrPps0DjRiv6qecv3lasyJvrW6+Ma3oh6bgkJ51SrAlQ3+LGHdnDGAuR6ZLonLwz\n7RI/bg8hJJ5bsuJut7AG4JFL8xbS7aldSoF+o+fKBtnUyPJ5M4hEN9ShAoGALlDQ\npQAcHor2xVCwNACK2Qt35tnBtelQBCwKR7/pBWkYPkD6zsZ4zcMlZBPYVesg6Vew\na+snRC5NY6DNpKtQecnQhAlmzYypbkkA1dvgiEwr9huWKxikFkEfjj1/noeW0tUV\nM+maxRGpQoRvbS2WJgM5oibrINJXTr540/zeoc8CgYEAiW3Z3nSYzpEkB1Eib5QH\nSCylpAOh1TNwJFcVjWtZK8t4fKxcE5DTw+zuy3jL3BeuXmC61NaU7C+xrWzUE6Yk\nmOwwVwAM/A888gPk40cztV5fFg4G9xIZyKsbX94QmIXRcBPXhc7HF3zQ3xpOtyzz\nzirZzaLR3/zLNo7qo7wEQfA=\n-----END PRIVATE KEY-----\n`,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
