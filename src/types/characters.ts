export type Characters = Character[];

interface Character {
	id: string;
	title: string;
	locale: string;
	slug: string;
	difficulty?: string;
	inclusion: string;
	role: string;
	description: string;
	releaseDate: string;
	previewMode?: boolean;
	headshot: Headshot;
}

interface Headshot {
	alternativeText: string;
	url: string;
	localFile: LocalFile;
}

interface LocalFile {
	childImageSharp: ChildImageSharp;
}

interface ChildImageSharp {
	gatsbyImageData: GatsbyImageData;
}

interface GatsbyImageData {
	layout: string;
	placeholder: Placeholder;
	backgroundColor: string;
	images: Images;
	width: number;
	height: number;
}

interface Placeholder {
	fallback: string;
}

interface Images {
	fallback: Fallback;
	sources: Source[];
}

interface Fallback {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source {
	srcSet: string;
	type: string;
	sizes: string;
}
