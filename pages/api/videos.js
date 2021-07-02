const example = [
    {
        genre: "trending",
        title: "video 1",
        img: "/img/videos/000016/001.png",
        iframe: `<iframe 
        style="height:86vh;width:100%;border:none;overflow:hidden;"
        src="https://www.youtube.com/embed/PMgOr1O4wag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" mute=1 allow="autoplay; fullscreen"></iframe>`,
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: true
    }
]

import videos from './../../utils/videos';

export default function handler(req, res) {

    console.log(videos)

    let genre = req.query.genre;

    const results = videos.filter(video => {
        let shouldEnter = false;
        let genres = video.genre;
        if (genres) {
            for (let i = 0; i < genres.length; i++) {
                const videoGenre = genres[i];
                if (videoGenre === genre) shouldEnter = true;
            }
        }
        if (shouldEnter) return true;
        // if (video.genre[0] === genre || video.genre[1] === genre) return true;
    })

    res.status(200).json(results)
  }
  