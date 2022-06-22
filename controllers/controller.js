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
        const result = num1 * num2
        res.send(result, { resultado })
        console.log(num1, num2)
        console.log(resultado)
    },

}
