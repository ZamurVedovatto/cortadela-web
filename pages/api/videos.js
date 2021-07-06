import videos from './../../utils/videos';

export default function handler(req, res) {

    // console.log(videos)

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
  