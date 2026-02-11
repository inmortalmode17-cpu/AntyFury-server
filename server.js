const express = require("express");
const cors = require("cors");
const { analyzeText } = require("./analyzer");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/analyze", (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({
      error: "No se proporcionó texto para analizar"
    });
  }

  const result = analyzeText(text);

  res.json({
    success: true,
    result
  });
});

app.get("/", (req, res) => {
  res.send("AntyFury API funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`🚀 AntyFury backend activo en el puerto ${PORT}`);
});
