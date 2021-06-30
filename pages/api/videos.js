// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const config = require('config');
// const mongoose = require('mongoose');

// const connection_url = !process.env.NODE_ENV ?
// 'mongodb+srv://<user>:<pass>@nazgul-prod.oyymt.mongodb.net/nazgul-prod?retryWrites=true&w=majority'
//   .replace('<user>', "user1")
//   .replace('<pass>', "mongo5f6j") 
//   :
// 'mongodb+srv://admin:<password>@cluster0.kce9c.mongodb.net/dizimo?retryWrites=true&w=majority'
//   .replace('<password>', '2StIeuKeajNIfOHy')

// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

// const db = mongoose.connection;
// db.once('connected', function () {
//   console.log('Connection is ok!');
// });
// db.on('error', console.error.bind(console, 'connection error:'));

const videos = [
    {
        genre: "trending",
        title: "video 1",
        img: "/img/videos/000001/001.png",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: true
    },
    {
        genre: "hots",
        title: "video 2",
        img: "/img/videos/000001/002.png",
        iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: false
    },
    {
        genre: "financas",
        title: "video 3",
        img: "/img/videos/000002/001.png",
        iframe: '<iframe src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: true
    },
    {
        genre: "trending",
        title: "video 4",
        img: "/img/videos/000002/002.png",
        iframe: '<iframe src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: false
    },
    ,
    {
        genre: "trending",
        title: "video 5",
        img: "/img/videos/000002/003.png",
        iframe: '<iframe src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: true
    },
    ,
    {
        genre: "trending",
        title: "video 6",
        img: "/img/videos/000002/004.png",
        iframe: '<iframe src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: false
    },
    ,
    {
        genre: "trending",
        title: "video 7",
        img: "/img/videos/000001/001.png",
        iframe: '<iframe src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: true
    },
    ,
    {
        genre: "trending",
        title: "video 8",
        img: "/img/videos/000001/002.png",
        iframe: '<iframe src="https://www.youtube.com/embed/GvPwnCAmnCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        overview: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        title: "Eu fui o primeiro digital influencer do Brasil - Rica Perrone (PodihhCast)",
        liked: false
    },
]

export default function handler(req, res) {
    let genre = req.query.genre;
    const results = videos.filter(video => video.genre === genre)
    res.status(200).json(results)
  }
  