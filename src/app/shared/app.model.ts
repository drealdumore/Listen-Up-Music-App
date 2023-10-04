export interface IPlaylist {
  id: string;
  img: string;
  name: string;
  abstract: string;
  songs: ISongs[];
}

export interface ISongs {
  playlist_id: string;
  id: string;
  artist: string;
  title: string;
  img: string;
  path: string;
}

// export interface IPlaylist {
//   id: string;
//   img: string;
//   name: string;
//   abstract: string;
//   songs: string[];
// }

// getSongs() {
//   playlists.forEach((playlistItem) => {
//     const filteredSongs = songs.filter((song) =>
//       playlistItem.songs.includes(song.id)
//     );

//     console.log(`Playlist: ${playlistItem.name}`);
//     console.log(filteredSongs);
//   });
// }



// const playlists: IPlaylist[] = [
//   {
//     id: 'peaceful-sounds',
//     img: '/assets/img/img-1.jpg',
//     name: 'peaceful sounds',
//     abstract: 'Peaceful sounds to help you slow down, breathe and relax.',
//     songs: ['1', '2', '3', '4', '5'],
//   },
//   {
//     id: 'deep-focus',
//     img: '/assets/img/img-2.jpg',
//     abstract: 'Keep calm and focus with ambient and post-rock music.',
//     name: 'deep focus',
//     songs: ['6', '7', '8', '9', '10'],
//   },
//   {
//     id: 'international-study',
//     img: '/assets/img/img-3.jpg',
//     abstract: 'Focus with soft study music in the background.',
//     name: 'international study',
//     songs: ['11', '12', '13', '14', '15'],
//   },
//   {
//     id: 'focus-flow',
//     img: '/assets/img/img-4.jpg',
//     abstract: 'Uptempo instrumental hip hop beats.',
//     name: 'focus flow',
//     songs: ['17'],
//   },
//   {
//     id: 'break-limits',
//     img: '/assets/img/img-1.jpg',
//     abstract: 'Words beyond action.',
//     name: 'break limits',
//     songs: ['18', '19'],
//   },
//   {
//     id: 'Motivational-Speeches',
//     img: '/assets/img/img-2.jpg',
//     abstract: 'Learning to enjoy being alone',
//     name: 'Motivational Speeches',
//     songs: ['20', '21'],
//   },
//   {
//     id: 'repeat-rewind',
//     img: '/assets/img/img-3.jpg',
//     abstract: 'Your past favorites.',
//     name: 'repeat rewind',
//     songs: ['1', '9'],
//   },
//   {
//     id: 'release-radar',
//     img: '/assets/img/img-4.jpg',
//     abstract: 'Catch all the latest music from artist you follow.',
//     name: 'release radar',
//     songs: ['22', '23'],
//   },
// ];


// const songs: ISongs[] = [
//   {
//     playlist_id: 'peaceful',
//     id: '1',
//     artist: 'Markotopa',
//     title: 'A call to the soul',
//     img: 'img/apemultiverse-20220823-0001.jpg',
//     path: 'audio/a-call-to-the-soul-149262.mp3',
//   },
//   {
//     playlist_id: 'peaceful',
//     id: '2',
//     artist: 'SergePavkinMusic',
//     title: 'reflected light',
//     img: 'img/IMG_20230504_173418.jpg',
//     path: 'audio/reflected-light-147979.mp3',
//   },
//   {
//     playlist_id: 'peaceful',
//     id: '3',
//     artist: 'Music_For_Videos',
//     title: 'Relaxing',
//     img: 'img/fass.webp',
//     path: 'audio/relaxing-145038.mp3',
//   },
//   {
//     playlist_id: 'peaceful',
//     id: '4',
//     artist: 'Olexy',
//     title: 'Summer walk',
//     img: 'img/Snapchat-1925539984.jpg',
//     path: 'audio/summer-walk-152722.mp3',
//   },
//   {
//     playlist_id: 'peaceful',
//     id: '5',
//     artist: 'FASSounds',
//     title: 'Good Night',
//     img: 'img/fass.webp',
//     path: 'audio/good-night-160166.mp3',
//   },

//   {
//     playlist_id: 'deepfocus',
//     id: '6',
//     artist: 'Purrple Cat',
//     title: 'Wondering',
//     img: 'img/IMG_20230503_230400.jpg',
//     path: 'audio/Wondering by Purrple Cat__.mp3',
//   },
//   {
//     playlist_id: 'deepfocus',
//     id: '7',
//     artist: 'Tokyo Music Walker',
//     title: 'Memories of Spring',
//     img: 'img/Snapchat-256539643.jpg',
//     path: 'audio/Memories of Spring by Tokyo Music Walker__.mp3',
//   },
//   {
//     playlist_id: 'deepfocus',
//     id: '8',
//     artist: 'Sakura Girl',
//     title: 'Late at Night',
//     img: 'img/IMG_20230503_230400.jpg',
//     path: 'audio/Late at Night by Sakura Girl__.mp3',
//   },
//   {
//     playlist_id: 'deepfocus',
//     id: '9',
//     artist: 'Purrple Cat',
//     title: 'Signs of Life',
//     img: 'img/Snapchat-440746153.jpg',
//     path: 'audio/Signs of Life by Purrple Cat__.mp3',
//   },
//   {
//     playlist_id: 'deepfocus',
//     id: '10',
//     artist: 'Purrple Cat',
//     title: 'Lost and Found',
//     img: 'img/IMG_20230503_230400.jpg',
//     path: 'audio/Lost-and-Found by purple cat.mp3',
//   },

//   {
//     playlist_id: 'international',
//     id: '11',
//     artist: 'Late Coder',
//     title: 'Coding Night',
//     img: 'img/IMG_20230504_173342.jpg',
//     path: 'audio/coding-night-112186.mp3',
//   },
//   {
//     playlist_id: 'international',
//     id: '12',
//     artist: 'Unknown',
//     title: 'Meditation Sounds',
//     img: 'img/_nogginsworld_-20220507-0002.jpg',
//     path: 'audio/meditation-sounds-122698.mp3',
//   },
//   {
//     playlist_id: 'international',
//     id: '13',
//     artist: 'unknown',
//     title: 'Eco Technology',
//     img: 'img/alecmonopolyart-0008.jpg',
//     path: 'audio/eco-technology-145636.mp3',
//   },
//   {
//     playlist_id: 'international',
//     id: '14',
//     artist: 'Late Coder',
//     title: 'please calm my mind',
//     img: 'img/IMG_20230504_173342.jpg',
//     path: 'audio/please-calm-my-mind-125566.mp3',
//   },
//   {
//     playlist_id: 'international',
//     id: '15',
//     artist: 'Lofi',
//     title: 'Lofi Study',
//     img: 'img/billionaire_ape_nft-20220823-0001.jpg',
//     path: 'audio/lofi-study-112191.mp3',
//   },

//   {
//     playlist_id: 'enjoyalone',
//     id: '16',
//     artist: 'Juice Wrld',
//     title: 'All Alone',
//     img: 'img/blythe_behindthelens-20230805-0001.jpg',
//     path: 'audio/Juice_WRLD_-_All_Alone.mp3',
//   },
//   {
//     playlist_id: 'enjoyalone',
//     id: '17',
//     artist: 'ArrDee',
//     title: 'Come Go',
//     img: 'img/blythe_behindthelens-20230805-0002.jpg',
//     path: 'audio/ArrDee_Come_Go_(thinkNews.com.ng).mp3',
//   },

//   {
//     playlist_id: 'releaseradar',
//     id: '18',
//     artist: 'unknown',
//     title: 'prank',
//     img: 'img/dariocarlucci-20220718-0025.jpg',
//     path: 'audio/prank-157083.mp3',
//   },
//   {
//     playlist_id: 'releaseradar',
//     id: '19',
//     artist: 'unknown',
//     title: 'ferrari spa',
//     img: 'img/ziadrizkalla-20230209-0005.jpg',
//     path: 'audio/ferrari-spa-149172.mp3',
//   },
//   {
//     playlist_id: 'releaseradar',
//     id: '20',
//     artist: 'unknown',
//     title: 'Teenagers having fun',
//     img: 'img/ziadrizkalla-20230209-0008.jpg',
//     path: 'audio/teenagers-having-fun-114806.mp3',
//   },
//   {
//     playlist_id: 'releaseradar',
//     id: '21',
//     artist: 'unknown',
//     title: 'i cant fall in love',
//     img: 'img/reflected light.webp',
//     path: 'audio/i-canx27t-fall-in-love-106865.mp3',
//   },
//   {
//     playlist_id: 'releaseradar',
//     id: '22',
//     artist: 'unknown',
//     title: 'pour up',
//     img: 'img/Snapchat-440746153.jpg',
//     path: 'audio/pour-up-21684.mp3',
//   },
//   {
//     playlist_id: 'releaseradar',
//     id: '23',
//     artist: 'unknown',
//     title: 'heavystone',
//     img: 'img/Snapchat-748836033.jpg',
//     path: 'audio/heavystone_-_info-official-audio-prod-by-razzo-beat-hitz-triff-records-156366.mp3',
//   },
// ];
