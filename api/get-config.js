// api/get-config.js
// Esta función se ejecutará en los servidores de Vercel.

export default function handler(request, response) {
  try {
    // 1. Comprueba si la variable de entorno está configurada en Vercel.
    if (!process.env.APIKEYS_GOOGLE) {
      // Si no está, devuelve un error 500 (Error de Servidor)
      return response.status(500).json({ error: 'La clave de API no está configurada en el servidor.' });
    }

    // 2. Construye el objeto de configuración usando la clave secreta.
    const config = {
      apiKey: process.env.APIKEYS_GOOGLE, // Lee la clave desde las variables de Vercel
      authDomain: "torneo-interclases.firebaseapp.com",
      projectId: "torneo-interclases",
      storageBucket: "torneo-interclases.appspot.com",
      messagingSenderId: "676891636137",
      appId: "1:676891636137:web:06562e91b7680ad7ad54b8"
    };

    // 3. Envía el objeto de configuración de vuelta al navegador.
    response.status(200).json(config);

  } catch (error) {
    // Manejo de cualquier otro error inesperado.
    response.status(500).json({ error: 'Fallo al cargar la configuración.' });
  }
}
