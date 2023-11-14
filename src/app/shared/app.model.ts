export interface IPlaylist {
  id: string;
  img: string;
  name: string;
  abstract: string;
  songs: ISongs[];
}

export interface ISongs {
  playlist_id: string;
  playlist_name: string;
  id: string;
  artist: string;
  title: string;
  img: string;
  path: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  billingDate: number; 
}
