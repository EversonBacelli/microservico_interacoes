// api/index.js
import express from 'express';
import { connectDB } from './DAO/conexao.js';

const app = express();
app.use(express.json());


// Sua rota de busca
app.get('/interacoes', async (req, res) => {
    try {
        const db = await connectDB();
        // Substitua pelo nome da sua coleçãoooo
        const colecao = db.collection("colecao_de_interacoes");
        
        const dados = await colecao.find({}).toArray();
        
        res.status(200).json({
            status: "sucesso",
            total_registros: dados.length,
            dados: dados
        });
    } catch (error) {
        res.status(500).json({ status: "erro", mensagem: error.message });
    }
});

// Para rodar localmente
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando em ES6 na porta ${PORT}`);
    });
}

// No ES6, exportamos o app usando export default para a Vercel encontrar
export default app;