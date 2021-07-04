const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

// hots, finanças, humor, nonsense, conhecimento, fitness, alimentação, nerd

export default {
    fetchTrending: {
        title: 'Trending',
        url: `${API_URL}/api/videos?genre=trending`
    },
    fetchHots: {
        title: 'Hots',
        url: `${API_URL}/api/videos?genre=hots`
    },
    fetchNegocios: {
        title: 'Negócios',
        url: `${API_URL}/api/videos?genre=negocios`
    },
    fetchPolemicos: {
        title: 'Polêmicos',
        url: `${API_URL}/api/videos?genre=polemicos`
    },
    // fetchHumor: {
    //     title: 'Humor',
    //     url: `${API_URL}/api/videos?genre=humor`
    // },
    fetchNonsense: {
        title: 'Nonsense',
        url: `${API_URL}/api/videos?genre=nonsense`
    },
    // fetchCuriosidade: {
    //     title: 'Curiosidade',
    //     url: `${API_URL}/api/videos?genre=curiosidade`
    // },
    // fetchFitness: {
    //     title: 'Fitness',
    //     url: `${API_URL}/api/videos?genre=fitness`
    // },
    // fetchAlimentacao: {
    //     title: 'Alimentação',
    //     url: `${API_URL}/api/videos?genre=alimentacao`
    // },
    // fetchNerd: {
    //     title: 'Nerd',
    //     url: `${API_URL}/api/videos?genre=nerd`
    // },
    fetchTeologia: {
        title: 'Teologia',
        url: `${API_URL}/api/videos?genre=teologia`
    },
    fetchPills: {
        title: 'Pills',
        url: `${API_URL}/api/videos?genre=pills`
    },
    fetchPillsHot: {
        title: 'PillsHot',
        url: `${API_URL}/api/videos?genre=pillshot`
    },
}

// TODO change to pt-BR