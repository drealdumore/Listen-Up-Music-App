import { EventEmitter, Injectable } from '@angular/core';
import { IPlaylist, ISongs } from './app.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class AppService {
  getAllSongs(): Observable<ISongs[]> {
    const allSongs: ISongs[] = [];

    playlists.forEach((playlist) => {
      allSongs.push(...playlist.songs);
    });

    return of(allSongs);
  }

  getSongs(): ISongs[] {
    const playlistSongs = playlists[0];
    return playlistSongs ? playlistSongs.songs : [];
  }

  getPlaylists() {
    return playlists;
  }

  getPlaylist(id: string): Observable<IPlaylist | undefined> {
    return of(playlists.find((playlist) => playlist.id === id));
  }

  // getPlaylist(id: string) {
  //   return playlists.find((playlist) => playlist.id === id);
  // }

  searchSongs(searchTerm: string) {
    var term = searchTerm.toLocaleLowerCase();
    var results: ISongs[] = [];

    playlists.forEach((playlist) => {
      var matchingSongs = playlist.songs.filter(
        (song) => song.title.toLocaleLowerCase().indexOf(term) > -1
      );
      matchingSongs = matchingSongs.map((song: any) => {
        song.id = playlist.id;
        return song;
      });
      results = results.concat(matchingSongs);
    });

    var emitter = new EventEmitter(true);
    setTimeout(() => {
      emitter.emit(results);
    }, 100);
    return emitter;
  }
}

const playlists: IPlaylist[] = [
  {
    id: 'peaceful-sounds',
    img: '/assets/img/img-1.jpg',
    name: 'peaceful sounds',
    abstract: 'Peaceful sounds to help you slow down, breathe and relax.',
    songs: [
      {
        playlist_id: 'peaceful-sounds',
        id: '1',
        artist: 'Markotopa',
        title: 'A call to the soul',
        img: '/assets/img/apemultiverse-20220823-0001.jpg',
        path: '/assets/audio/a-call-to-the-soul-149262.mp3',
        playlist_name: 'peaceful sounds',
      },
      {
        playlist_id: 'peaceful-sounds',
        id: '2',
        artist: 'SergePavkinMusic',
        title: 'reflected light',
        img: '/assets/img/IMG_20230504_173418.jpg',
        path: '/assets/audio/reflected-light-147979.mp3',
        playlist_name: 'peaceful sounds',
      },
      {
        playlist_id: 'peaceful-sounds',
        id: '3',
        artist: 'Music_For_Videos',
        title: 'Relaxing',
        img: '/assets/img/fass.webp',
        path: '/assets/audio/relaxing-145038.mp3',
        playlist_name: 'peaceful sounds',
      },
      {
        playlist_id: 'peaceful-sounds',
        id: '4',
        artist: 'Olexy',
        title: 'Summer walk',
        img: '/assets/img/Snapchat-1925539984.jpg',
        path: '/assets/audio/summer-walk-152722.mp3',
        playlist_name: 'peaceful sounds',
      },
      {
        playlist_id: 'peaceful-sounds',
        id: '5',
        artist: 'FASSounds',
        title: 'Good Night',
        img: '/assets/img/fass.webp',
        path: '/assets/audio/good-night-160166.mp3',
        playlist_name: 'peaceful sounds',
      },
    ],
  },
  {
    id: 'deep-focus',
    img: '/assets/img/img-2.jpg',
    abstract: 'Keep calm and focus with ambient and post-rock music.',
    name: 'deep focus',
    songs: [
      {
        playlist_id: 'deep-focus',
        id: '6',
        artist: 'Purrple Cat',
        title: 'Wondering',
        img: '/assets/img/IMG_20230503_230400.jpg',
        path: '/assets/audio/Wondering by Purrple Cat__.mp3',
        playlist_name: 'deep focus',
      },
      {
        playlist_id: 'deep-focus',
        id: '7',
        artist: 'Tokyo Music Walker',
        title: 'Memories of Spring',
        img: '/assets/img/Snapchat-256539643.jpg',
        path: '/assets/audio/Memories of Spring by Tokyo Music Walker__.mp3',
        playlist_name: 'deep focus',
      },
      {
        playlist_id: 'deep-focus',
        id: '8',
        artist: 'Sakura Girl',
        title: 'Late at Night',
        img: '/assets/img/IMG_20230503_230400.jpg',
        path: '/assets/audio/Late at Night by Sakura Girl__.mp3',
        playlist_name: 'deep focus',
      },
      {
        playlist_id: 'deep-focus',
        id: '9',
        artist: 'Purrple Cat',
        title: 'Signs of Life',
        img: '/assets/img/Snapchat-440746153.jpg',
        path: '/assets/audio/Signs of Life by Purrple Cat__.mp3',
        playlist_name: 'deep focus',
      },
      {
        playlist_id: 'deep-focus',
        id: '10',
        artist: 'Purrple Cat',
        title: 'Lost and Found',
        img: '/assets/img/IMG_20230503_230400.jpg',
        path: '/assets/audio/Lost-and-Found by purple cat.mp3',
        playlist_name: 'deep focus',
      },
    ],
  },
  {
    id: 'international-study',
    img: '/assets/img/img-3.jpg',
    abstract: 'Focus with soft study music in the background.',
    name: 'international study',
    songs: [
      {
        playlist_id: 'international-study',
        id: '11',
        artist: 'Late Coder',
        title: 'Coding Night',
        img: '/assets/img/IMG_20230504_173342.jpg',
        path: '/assets/audio/coding-night-112186.mp3',
        playlist_name: 'international study',
      },
      {
        playlist_id: 'international-study',
        id: '12',
        artist: 'Unknown',
        title: 'Meditation Sounds',
        img: '/assets/img/_nogginsworld_-20220507-0002.jpg',
        path: '/assets/audio/meditation-sounds-122698.mp3',
        playlist_name: 'international study',
      },
      {
        playlist_id: 'international-study',
        id: '13',
        artist: 'unknown',
        title: 'Eco Technology',
        img: '/assets/img/alecmonopolyart-0008.jpg',
        path: '/assets/audio/eco-technology-145636.mp3',
        playlist_name: 'international study',
      },
      {
        playlist_id: 'international-study',
        id: '14',
        artist: 'Late Coder',
        title: 'please calm my mind',
        img: '/assets/img/IMG_20230504_173342.jpg',
        path: '/assets/audio/please-calm-my-mind-125566.mp3',
        playlist_name: 'international study',
      },
      {
        playlist_id: 'international-study',
        id: '15',
        artist: 'Lofi',
        title: 'Lofi Study',
        img: '/assets/img/billionaire_ape_nft-20220823-0001.jpg',
        path: '/assets/audio/lofi-study-112191.mp3',
        playlist_name: 'international study',
      },
    ],
  },
  {
    id: 'focus-flow',
    img: '/assets/img/img-4.jpg',
    abstract: 'Uptempo instrumental hip hop beats.',
    name: 'focus flow',
    songs: [
      {
        playlist_id: 'focus-flow',
        id: '17',
        artist: 'ArrDee',
        title: 'Come Go',
        img: '/assets/img/blythe_behindthelens-20230805-0002.jpg',
        path: '/assets/audio/ArrDee_Come_Go_(thinkNews.com.ng).mp3',
        playlist_name: 'focus flow',
      },
    ],
  },
  {
    id: 'break-limits',
    img: '/assets/img/img-1.jpg',
    abstract: 'Words beyond action.',
    name: 'break limits',
    songs: [
      {
        playlist_id: 'break-limits',
        id: '18',
        artist: 'unknown',
        title: 'prank',
        img: '/assets/img/dariocarlucci-20220718-0025.jpg',
        path: '/assets/audio/prank-157083.mp3',
        playlist_name: 'break limits',
      },
      {
        playlist_id: 'break-limits',
        id: '19',
        artist: 'unknown',
        title: 'ferrari spa',
        img: '/assets/img/ziadrizkalla-20230209-0005.jpg',
        path: '/assets/audio/ferrari-spa-149172.mp3',
        playlist_name: 'break limits',
      },
    ],
  },
  {
    id: 'Motivational-Speeches',
    img: '/assets/img/img-2.jpg',
    abstract: 'Learning to enjoy being alone',
    name: 'Motivational Speeches',
    songs: [
      {
        playlist_id: 'Motivational-Speeches',
        id: '16',
        artist: 'Juice Wrld',
        title: 'All Alone',
        img: '/assets/img/blythe_behindthelens-20230805-0001.jpg',
        path: '/assets/audio/Juice_WRLD_-_All_Alone.mp3',
        playlist_name: 'Motivational Speeches',
      },
      {
        playlist_id: 'Motivational-Speeches',
        id: '17',
        artist: 'ArrDee',
        title: 'Come Go',
        img: '/assets/img/blythe_behindthelens-20230805-0002.jpg',
        path: '/assets/audio/ArrDee_Come_Go_(thinkNews.com.ng).mp3',
        playlist_name: 'Motivational Speeches',
      },
    ],
  },
  {
    id: 'repeat-rewind',
    img: '/assets/img/img-3.jpg',
    abstract: 'Your past favorites.',
    name: 'repeat rewind',
    songs: [
      {
        playlist_id: 'repeat-rewind',
        id: '1',
        artist: 'Markotopa',
        title: 'A call to the soul',
        img: '/assets/img/apemultiverse-20220823-0001.jpg',
        path: '/assets/audio/a-call-to-the-soul-149262.mp3',
        playlist_name: 'repeat rewind',
      },
      {
        playlist_id: 'repeat-rewind',
        id: '9',
        artist: 'Purrple Cat',
        title: 'Signs of Life',
        img: '/assets/img/Snapchat-440746153.jpg',
        path: '/assets/audio/Signs of Life by Purrple Cat__.mp3',
        playlist_name: 'repeat rewind',
      },
    ],
  },
  {
    id: 'release-radar',
    img: '/assets/img/img-4.jpg',
    abstract: 'Catch all the latest music from artist you follow.',
    name: 'release radar',
    songs: [
      {
        playlist_id: 'release-radar',
        id: '18',
        artist: 'unknown',
        title: 'prank',
        img: '/assets/img/dariocarlucci-20220718-0025.jpg',
        path: '/assets/audio/prank-157083.mp3',
        playlist_name: 'release radar',
      },
      {
        playlist_id: 'release-radar',
        id: '19',
        artist: 'unknown',
        title: 'ferrari spa',
        img: '/assets/img/ziadrizkalla-20230209-0005.jpg',
        path: '/assets/audio/ferrari-spa-149172.mp3',
        playlist_name: 'release radar',
      },
      {
        playlist_id: 'release-radar',
        id: '20',
        artist: 'unknown',
        title: 'Teenagers having fun',
        img: '/assets/img/ziadrizkalla-20230209-0008.jpg',
        path: '/assets/audio/teenagers-having-fun-114806.mp3',
        playlist_name: 'release radar',
      },
      {
        playlist_id: 'release-radar',
        id: '21',
        artist: 'unknown',
        title: 'i cant fall in love',
        img: '/assets/img/reflected light.webp',
        path: '/assets/audio/i-canx27t-fall-in-love-106865.mp3',
        playlist_name: 'release radar',
      },
      {
        playlist_id: 'release-radar',
        id: '22',
        artist: 'unknown',
        title: 'pour up',
        img: '/assets/img/Snapchat-440746153.jpg',
        path: '/assets/audio/pour-up-21684.mp3',
        playlist_name: 'release radar',
      },
      {
        playlist_id: 'release-radar',
        id: '23',
        artist: 'unknown',
        title: 'heavystone',
        img: '/assets/img/Snapchat-748836033.jpg',
        path: '/assets/audio/heavystone_-_info-official-audio-prod-by-razzo-beat-hitz-triff-records-156366.mp3',
        playlist_name: 'release radar',
      },
    ],
  },
];
