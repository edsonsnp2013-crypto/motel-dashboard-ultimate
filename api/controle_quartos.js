export default function handler(req, res) {
  const quartos = {
    "101": "livre",
    "102": "ocupado",
    "103": "limpeza",
    "104": "livre",
    "105": "ocupado"
  };

  res.status(200).json(quartos);
}
