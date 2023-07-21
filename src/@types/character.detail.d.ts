type CharacterDetail =
	| undefined
	| {
			id: string;
			title: string;
			locale: string;
			slug: string;
			difficulty?: string;
			inclusion: string;
			role: string;
			description: string;
			releaseDate: string;
			previewMode: any;
			headshot: Headshot;
			relatedChapter?: RelatedChapter;
			powerPerks: PowerPerk[];
			outfits: Outfit[];
			lore: Lore;
			legalContent?: LegalContent;
			contentSections: any[];
			metadata: Metadata;
			localizations: Localization[];
			videoPresentation?: VideoPresentation;
			videoPosition?: string;
			imagePresentation: any;
			characterRender?: CharacterRender;
			characterBackground: CharacterBackground;
			characterRenderAlt?: CharacterRenderAlt;
			characterBackgroundAlt?: CharacterBackgroundAlt;
	  };

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

interface RelatedChapter {
	title: string;
	slug: string;
	chapterNumber: string;
	contentOverview: string;
	logoPosition: string;
	logo: Logo;
	customLogo?: CustomLogo;
	keyart: Keyart;
	id: number;
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

interface Keyart {
	alternativeText: string;
	url: string;
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

interface PowerPerk {
	title: string;
	content: string;
	eyebrow: string;
	id: string;
	preview: Preview;
	thumbnail: Thumbnail;
}

interface Preview {
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

interface Thumbnail {
	alternativeText: string;
	url: string;
	localFile: LocalFile6;
}

interface LocalFile6 {
	childImageSharp?: ChildImageSharp6;
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

interface Outfit {
	title: string;
	content: string;
	eyebrow?: string;
	id: string;
	preview: Preview2;
	thumbnail: Thumbnail2;
}

interface Preview2 {
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

interface Thumbnail2 {
	alternativeText: string;
	url: string;
	localFile: LocalFile8;
}

interface LocalFile8 {
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

interface Lore {
	title: string;
	titleTag: string;
	subtitle: any;
	subtitleTag: string;
	text: string;
	medias: MediaD[];
	buttons: any[];
}

interface MediaD {
	alternativeText: string;
	url: string;
	localFile: LocalFile9;
}

interface LocalFile9 {
	childImageSharp: ChildImageSharp9;
}

interface ChildImageSharp9 {
	gatsbyImageData: GatsbyImageData9;
}

interface GatsbyImageData9 {
	layout: string;
	placeholder: Placeholder9;
	backgroundColor: string;
	images: Images9;
	width: number;
	height: number;
}

interface Placeholder9 {
	fallback: string;
}

interface Images9 {
	fallback: Fallback9;
	sources: Source9[];
}

interface Fallback9 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source9 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface LegalContent {
	text: string;
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

interface VideoPresentation {
	url: string;
	localFile: LocalFile10;
}

interface LocalFile10 {
	childImageSharp: any;
}

interface CharacterRender {
	alternativeText: string;
	url: string;
	localFile: LocalFile11;
}

interface LocalFile11 {
	childImageSharp: ChildImageSharp10;
}

interface ChildImageSharp10 {
	gatsbyImageData: GatsbyImageData10;
}

interface GatsbyImageData10 {
	layout: string;
	placeholder: Placeholder10;
	backgroundColor: string;
	images: Images10;
	width: number;
	height: number;
}

interface Placeholder10 {
	fallback: string;
}

interface Images10 {
	fallback: Fallback10;
	sources: Source10[];
}

interface Fallback10 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source10 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface CharacterBackground {
	alternativeText: string;
	url: string;
	localFile: LocalFile12;
}

interface LocalFile12 {
	childImageSharp: ChildImageSharp11;
}

interface ChildImageSharp11 {
	gatsbyImageData: GatsbyImageData11;
}

interface GatsbyImageData11 {
	layout: string;
	placeholder: Placeholder11;
	backgroundColor: string;
	images: Images11;
	width: number;
	height: number;
}

interface Placeholder11 {
	fallback: string;
}

interface Images11 {
	fallback: Fallback11;
	sources: Source11[];
}

interface Fallback11 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source11 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface CharacterRenderAlt {
	alternativeText: string;
	url: string;
	localFile: LocalFile13;
}

interface LocalFile13 {
	childImageSharp: ChildImageSharp12;
}

interface ChildImageSharp12 {
	gatsbyImageData: GatsbyImageData12;
}

interface GatsbyImageData12 {
	layout: string;
	placeholder: Placeholder12;
	backgroundColor: string;
	images: Images12;
	width: number;
	height: number;
}

interface Placeholder12 {
	fallback: string;
}

interface Images12 {
	fallback: Fallback12;
	sources: Source12[];
}

interface Fallback12 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source12 {
	srcSet: string;
	type: string;
	sizes: string;
}

interface CharacterBackgroundAlt {
	alternativeText: string;
	url: string;
	localFile: LocalFile14;
}

interface LocalFile14 {
	childImageSharp: ChildImageSharp13;
}

interface ChildImageSharp13 {
	gatsbyImageData: GatsbyImageData13;
}

interface GatsbyImageData13 {
	layout: string;
	placeholder: Placeholder13;
	backgroundColor: string;
	images: Images13;
	width: number;
	height: number;
}

interface Placeholder13 {
	fallback: string;
}

interface Images13 {
	fallback: Fallback13;
	sources: Source13[];
}

interface Fallback13 {
	src: string;
	srcSet: string;
	sizes: string;
}

interface Source13 {
	srcSet: string;
	type: string;
	sizes: string;
}
