function status(request, response) {
  response.status(200).json({ Mensagem: "Teste API" });
}

export default status;
