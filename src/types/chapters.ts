export type Chapters = Chapter[];

interface Chapter {
	id: string;
	chapterNumber: string;
	contentOverview: string;
	keyart: Keyart;
	locale: string;
	logo: Logo;
	customLogo?: CustomLogo;
	chapterClass: any;
	logoClasses?: string;
	logoPosition: string;
	slug: string;
	title: string;
	released: boolean;
	announcementDate?: string;
	releaseDate: string;
	customReleaseDate?: string;
	displayMaps?: boolean;
	displayCharacters?: boolean;
	screenshotGallery?: ScreenshotGallery;
}

interface Keyart {
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

interface Logo {
	alternativeText: string;
	url: string;
	localFile: LocalFile2;
}

interface LocalFile2 {
	childImageSharp: ChildImageSharp2;
}

interface ChildImageSharp2 {
	gatsbyImageData: GatsbyImageData2;
}

interface GatsbyImageData2 {
	layout: string;
	placeholder: Placeholder2;
	backgroundColor: string;
	images: Images2;
	width: number;
	height: number;
}

interface Placeholder2 {
	fallback: string;
}

interface Images2 {
	fallback: Fallback2;
	sources: Source2[];
}

interface Fallback2 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source2 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface CustomLogo {
	alternativeText: string;
	url: string;
	localFile: LocalFile3;
}

interface LocalFile3 {
	childImageSharp: ChildImageSharp3;
}

interface ChildImageSharp3 {
	gatsbyImageData: GatsbyImageData3;
}

interface GatsbyImageData3 {
	layout: string;
	placeholder: Placeholder3;
	backgroundColor: string;
	images: Images3;
	width: number;
	height: number;
}

interface Placeholder3 {
	fallback: string;
}

interface Images3 {
	fallback: Fallback3;
	sources: Source3[];
}

interface Fallback3 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source3 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface ScreenshotGallery {
	images: Image[];
}

interface Image {
	alternativeText: string;
	url: string;
	caption: string;
	localFile: LocalFile4;
}

interface LocalFile4 {
	childImageSharp: ChildImageSharp4;
}

interface ChildImageSharp4 {
	gatsbyImageData: GatsbyImageData4;
}

interface GatsbyImageData4 {
	layout: string;
	placeholder: Placeholder4;
	backgroundColor: string;
	images: Images4;
	width: number;
	height: number;
}

interface Placeholder4 {
	fallback: string;
}

interface Images4 {
	fallback: Fallback4;
	sources: Source4[];
}

interface Fallback4 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source4 {
	srcSet: string;
	type: string;
	sizes: string;
}
