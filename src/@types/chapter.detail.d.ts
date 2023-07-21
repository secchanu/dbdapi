type ChapterDetail = {
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
	trailer: string;
	videoDelay?: number;
	affiliates_chapters: AffiliatesChapter[];
	animatedKeyart?: AnimatedKeyart;
	legalContent?: LegalContent;
	chapterClasses?: string;
	contentSections: ContentSection[];
	metadata: Metadata;
	localizations: Localization[];
	fields?: Fields;
};

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

interface AffiliatesChapter {
	logo: Logo2;
	customLogo?: CustomLogo2;
	locale: string;
	logoPosition: string;
	slug: string;
	title: string;
	announcementDate: any;
	releaseDate: string;
	customReleaseDate: any;
	keyart: Keyart2;
}

interface Logo2 {
	alternativeText: string;
	url: string;
	localFile: LocalFile5;
}

interface LocalFile5 {
	childImageSharp: ChildImageSharp5;
}

interface ChildImageSharp5 {
	gatsbyImageData: GatsbyImageData5;
}

interface GatsbyImageData5 {
	layout: string;
	placeholder: Placeholder5;
	backgroundColor: string;
	images: Images5;
	width: number;
	height: number;
}

interface Placeholder5 {
	fallback: string;
}

interface Images5 {
	fallback: Fallback5;
	sources: Source5[];
}

interface Fallback5 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source5 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface CustomLogo2 {
	alternativeText: string;
	url: string;
	localFile: LocalFile6;
}

interface LocalFile6 {
	childImageSharp: ChildImageSharp6;
}

interface ChildImageSharp6 {
	gatsbyImageData: GatsbyImageData6;
}

interface GatsbyImageData6 {
	layout: string;
	placeholder: Placeholder6;
	backgroundColor: string;
	images: Images6;
	width: number;
	height: number;
}

interface Placeholder6 {
	fallback: string;
}

interface Images6 {
	fallback: Fallback6;
	sources: Source6[];
}

interface Fallback6 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source6 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface Keyart2 {
	alternativeText: string;
	url: string;
	localFile: LocalFile7;
}

interface LocalFile7 {
	childImageSharp: ChildImageSharp7;
}

interface ChildImageSharp7 {
	gatsbyImageData: GatsbyImageData7;
}

interface GatsbyImageData7 {
	layout: string;
	placeholder: Placeholder7;
	backgroundColor: string;
	images: Images7;
	width: number;
	height: number;
}

interface Placeholder7 {
	fallback: string;
}

interface Images7 {
	fallback: Fallback7;
	sources: Source7[];
}

interface Fallback7 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source7 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface AnimatedKeyart {
	url: string;
}

interface LegalContent {
	text: string;
}

interface ContentSection {
	id: number;
	title: string;
	titleTag: string;
	subtitle: string;
	subtitleTag: string;
	text: string;
	additionnalText: any;
	mediaPosition: any;
	layout: string;
	anchorID: any;
	class: any;
	surTitle: any;
	buttons: any[];
	medias: MediaD[];
	backgroundImage: any;
	mobileImage: any;
	surTitleIcon: any;
	strapi_component: string;
}

interface MediaD {
	id: number;
	name: string;
	alternativeText: string;
	caption: string;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	created_at: string;
	updated_at: string;
	localFile___NODE: string;
}

interface Formats {
	large: Large;
	small: Small;
	medium: Medium;
	thumbnail: Thumbnail;
}

interface Large {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

interface Small {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

interface Medium {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

interface Thumbnail {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: any;
	size: number;
	width: number;
	height: number;
}

interface Metadata {
	metaDescription: string;
	metaTitle: string;
	shareImage: any;
}

interface Localization {
	id: number;
	locale: string;
}

interface Fields {
	images: Image2[];
}

interface Image2 {
	id: string;
	url: string;
	alternativeText: string;
	localFile: LocalFile8;
}

interface LocalFile8 {
	publicURL: string;
	childImageSharp: ChildImageSharp8;
}

interface ChildImageSharp8 {
	gatsbyImageData: GatsbyImageData8;
}

interface GatsbyImageData8 {
	layout: string;
	placeholder: Placeholder8;
	backgroundColor: string;
	images: Images8;
	width: number;
	height: number;
}

interface Placeholder8 {
	fallback: string;
}

interface Images8 {
	fallback: Fallback8;
	sources: Source8[];
}

interface Fallback8 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source8 {
	srcSet: string;
	type: string;
	sizes: string;
}
