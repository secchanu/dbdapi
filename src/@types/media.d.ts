type Media = Medium[];

interface Medium {
	titleEN: string;
	titleFR: string;
	titleJA: string;
	titleDE: string;
	titlePT: string;
	media: MediaD;
	published_at: string;
	media_category: MediaCategory;
}

interface MediaD {
	alternativeText: string;
	url: string;
	localFile: LocalFile;
}

interface LocalFile {
	publicURL: string;
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

interface MediaCategory {
	slug: string;
	titleEN: string;
	titleFR: string;
	titleJA: string;
	titleDE: string;
	titlePT: string;
}
