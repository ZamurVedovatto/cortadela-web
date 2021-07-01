const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

// hots, finanças, humor, nonsense, conhecimento, fitness, alimentação, nerd

export default {
    fetchTrending: {
        title: 'Trending',
        url: `${API_URL}/api/videos?genre=trending`
    },
    fetchPills: {
        title: 'Pills',
        url: `${API_URL}/api/videos?genre=pills`
    },
    fetchHots: {
        title: 'Hots',
        url: `${API_URL}/api/videos?genre=hots`
    },
    fetchFinancas: {
        title: 'Finanças',
        url: `${API_URL}/api/videos?genre=financas`
    },
    fetchHumor: {
        title: 'Humor',
        url: `${API_URL}/api/videos?genre=humor`
    },
    fetchNonsense: {
        title: 'Nonsense',
        url: `${API_URL}/api/videos?genre=nonsense`
    },
    fetchCuriosidade: {
        title: 'Curiosidade',
        url: `${API_URL}/api/videos?genre=curiosidade`
    },
    fetchFitness: {
        title: 'Fitness',
        url: `${API_URL}/api/videos?genre=fitness`
    },
    fetchAlimentacao: {
        title: 'Alimentação',
        url: `${API_URL}/api/videos?genre=alimentacao`
    },
    fetchNerd: {
        title: 'Nerd',
        url: `${API_URL}/api/videos?genre=nerd`
    },
    fetchTeologia: {
        title: 'Teologia',
        url: `${API_URL}/api/videos?genre=teologia`
    },
}

// TODO change to pt-BR