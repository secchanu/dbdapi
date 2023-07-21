type ArticleDetail = {
	slug: string;
	title: string;
	content: string;
	locale: string;
	published_at: string;
	publication_date?: string;
	localizations: Localization[];
	metadata: Metadata;
	article_category: ArticleCategory;
	image: Image;
};

interface Localization {
	id: string;
	locale: string;
}

interface Metadata {
	metaDescription: string;
	metaTitle: string;
	shareImage?: ShareImage;
}

interface ShareImage {
	alternativeText: string;
	url: string;
}

interface ArticleCategory {
	name: string;
	id: string;
	slug: string;
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
