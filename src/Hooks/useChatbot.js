import { useState } from "react";

const responses = {
    "hola": "¡Hola! ¿Cómo estás?",
    "adiós": "¡Adiós! Que tengas un buen día.",
    "cómo estás": "Estoy bien, gracias por preguntar.",
    "qué puedes hacer": "Puedo responder a tus preguntas básicas.",
    "quién eres": "Soy un chatbot creado para ayudarte.",
    "qué día es hoy": `Hoy es ${new Date().toLocaleDateString()}.`,
    "qué hora es": `La hora actual es ${new Date().toLocaleTimeString()}.`,
    "cuál es tu nombre": "Me llamo ChatGPT.",
    "dónde vives": "Vivo en la nube, listo para ayudarte.",
    "qué tal": "Todo bien, gracias por preguntar.",
    "te gusta la música": "Sí, la música es increíble.",
    "qué música te gusta": "Me gustan todos los géneros, pero no puedo escuchar.",
    "conoces a Siri": "Sí, es una asistente de Apple.",
    "conoces a Alexa": "Sí, es una asistente de Amazon.",
    "qué es la inteligencia artificial": "Es la simulación de inteligencia humana en máquinas.",
    "me puedes ayudar": "¡Por supuesto! ¿En qué necesitas ayuda?",
    "qué es el amor": "El amor es un sentimiento profundo de afecto y conexión.",
    "cuál es el significado de la vida": "42, según 'La guía del autoestopista galáctico'. 😃",
    "qué opinas de los humanos": "Son seres fascinantes y muy creativos.",
    "cuál es tu color favorito": "No tengo ojos, pero el azul es popular.",
    "me puedes contar un chiste": "¿Por qué el libro de matemáticas estaba triste? Porque tenía demasiados problemas. 😆",
    "cuánto es 2+2": "Es 4. Fácil.",
    "cuál es tu comida favorita": "No como, pero escuché que la pizza es deliciosa.",
    "quién es el presidente de EE.UU.": "Déjame buscarlo... 🕵️‍♂️",
    "qué significa LOL": "LOL significa 'Laugh Out Loud', o 'reír en voz alta'.",
    "cómo se dice 'hola' en francés": "Se dice 'Bonjour'.",
    "cuánto mide una cancha de fútbol": "Depende, pero suele ser de 90 a 120 metros de largo.",
    "quién fue Albert Einstein": "Fue un físico famoso por la teoría de la relatividad.",
    "cuántos planetas hay en el sistema solar": "Hay 8 planetas en el sistema solar.",
    "qué es un agujero negro": "Es una región del espacio donde la gravedad es tan fuerte que nada puede escapar.",
    "cuál es la velocidad de la luz": "La velocidad de la luz es aproximadamente 299,792,458 m/s.",
    "cuál es el animal más rápido": "El halcón peregrino, que puede superar los 300 km/h en picada.",
    "qué temperatura hace hoy": "Déjame verificar... ☀️🌧️",
    "me puedes dar una receta": "Claro, ¿qué quieres cocinar?",
    "cuántos continentes hay": "Hay 7 continentes en el mundo.",
    "qué idioma se habla en Brasil": "En Brasil se habla portugués.",
    "cuál es la montaña más alta": "El Monte Everest, con 8,848 metros.",
    "qué es un código QR": "Es un tipo de código de barras que almacena información.",
    "qué es JavaScript": "Es un lenguaje de programación muy usado en la web.",
    "quién fue Leonardo da Vinci": "Un artista y científico renacentista famoso por la Mona Lisa."
};

export const useChatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        const newMessages = [
            ...messages,
            { text: input, isUser: true },
            { text: responses[input.toLowerCase()] || "Lo siento, no entiendo.", isUser: false }
        ];

        setMessages(newMessages);
        setInput("");
    };

    return {
        messages,
        input,
        setInput,
        sendMessage
    };
};
