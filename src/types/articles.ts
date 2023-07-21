export type Articles = Article[];

interface Article {
	id: string;
	locale: string;
	slug: string;
	title: string;
	excerpt: string;
	pageRedirect?: string;
	image: Image;
	thumbnailImage?: ThumbnailImage;
	publication_date?: string;
	published_at: string;
	article_category: ArticleCategory;
}

interface Image {
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

interface ThumbnailImage {
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

interface ArticleCategory {
	name: string;
	slug: string;
}
