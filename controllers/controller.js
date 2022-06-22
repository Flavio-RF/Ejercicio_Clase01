const { format } = require("date-fns"); // importamos solo la funcion format de todo el modulo date-fns
const { es } = require("date-fns/locale"); // configuracion de date-fns en español


module.exports = {
    showHome: (req, res) => {
        res.render("home")
    },
    showFecha: (req, res) => {
        res.render("fecha", {
            fecha:
                format(
                    new Date(),
                    "'Hoy es 'dd 'de' MMMM 'de' yyyy 'y son las' HH:mm:ss (EEEE).",
                    { locale: es })
        })
    },
    showMultiplicar: (req, res) => {
        res.render("multiplicar")
    },
    multiplicar: (req, res) => {
        const { num1, num2 } = req.body;
        res.end(String(num1 * num2)); // Notar que no es posible retornar un número. Sólo se puede retornar strings, objetos o arrays.
    },

}
