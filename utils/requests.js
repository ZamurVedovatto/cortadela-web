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
    fetchConhecimento: {
        title: 'Conhecimento',
        url: `${API_URL}/api/videos?genre=conhecimento`
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
}

// TODO change to pt-BR