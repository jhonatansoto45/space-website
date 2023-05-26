export interface MenuItem {
  id: string;
  name: string;
  url: string;
}

export interface TabsItem {
  id: number;
  name: string;
}

export interface SliderItem {
  id: number;
}

export interface SpaceData {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

export interface Crew {
  name: string;
  images: TypeImage;
  role: string;
  bio: string;
}

export interface TypeImage {
  png: string;
  webp: string;
}

export interface Destination {
  name: string;
  images: TypeImage;
  description: string;
  distance: string;
  travel: string;
}

export interface Technology {
  id?: number;
  name: string;
  images: TechnologyImages;
  description: string;
}

export interface TechnologyImages {
  portrait: string;
  landscape: string;
}
