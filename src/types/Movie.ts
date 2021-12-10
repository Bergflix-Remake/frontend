import { Series } from "./Series";

export interface Movie {
	id: number;
	title: string;
	description: string;
	video_id: string;
	background_image: string;
	thumbnail: string;
	duration: string;
	age: string;
	original: boolean;
	year: number;
	genre: string;
	rating: string;
	series?: Series;
}
