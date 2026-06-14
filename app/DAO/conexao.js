import { MongoClient } from 'mongodb';
import path from 'path';
import dotenv from 'dotenv'; // <-- Essa linha faltou para definir o 'dotenv'!

// Agora o Node sabe o que é 'dotenv' e consegue ler o seu arquivo .env
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const uri = process.env.MONGO_URI;

if (!uri) {
    console.error("❌ ERRO NO DAO: A variável MONGO_URI não foi carregada. Verifique o arquivo .env");
}

let dbInstance = null;
let client = null;

async function connectDB() {
    if (dbInstance) return dbInstance;

    try {
        client = new MongoClient(uri);
        await client.connect();
        console.log("🔌 [DAO] Conexão com o MongoDB estabelecida com sucesso!");
        
        dbInstance = client.db("db_fatec");
        return dbInstance;
    } catch (error) {
        console.error("❌ [DAO] Erro ao tentar conectar ao banco:", error.message);
        throw error;
    }
}

export { connectDB };