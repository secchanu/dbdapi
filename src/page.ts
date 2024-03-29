import axios from "axios";
import {
	ArticleDetail,
	Articles,
	ArticlesCategories,
	ChapterDetail,
	Chapters,
	CharacterDetail,
	Characters,
	Maps,
	Media,
	MediaCategories,
} from "./types";

type Language = "en" | "ja";

const getPageData = async (path: string, lang: Language = "en") => {
	const langPath = lang === "en" ? "" : `/${lang}`;
	const url = `https://deadbydaylight.com/page-data${langPath}${path}page-data.json`;
	const res = await axios.get(url, {
		headers: {
			"User-Agent": "dbdapi (+https://github.com/secchanu/dbdapi.git)",
		},
	});
	const pageData = res?.data;
	return pageData;
};

export const getChapters = async (lang: Language = "en") => {
	const path = "/game/chapters/";
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const chaptersData = result.pageContext.postsData.chapters;
	const chapters = chaptersData.edges.map((edge: any) => edge.node);
	return chapters as Chapters;
};

export const getChapter = async (slug: string, lang: Language = "en") => {
	const path = `/game/chapters/${slug}/`;
	const pageData = await getPageData(path, lang).catch(() => {
		return;
	});
	if (!pageData) return undefined;
	const result = pageData.result;
	const chapter = result.data.pageData;
	return chapter as ChapterDetail;
};

export const getCharacters = async (lang: Language = "en") => {
	const path = "/game/characters/";
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const charactersData = result.pageContext.postsData.characters;
	const characters = charactersData.edges.map((edge: any) => edge.node);
	return characters as Characters;
};

export const getCharacter = async (slug: string, lang: Language = "en") => {
	const path = `/game/characters/${slug}/`;
	const pageData = await getPageData(path, lang).catch(() => {
		return;
	});
	if (!pageData) return undefined;
	const result = pageData.result;
	const character = result.data.pageData;
	return character as CharacterDetail;
};

export const getMaps = async (lang: Language = "en") => {
	const path = "/game/maps/";
	const pageData = await getPageData(path, lang).catch(() => {
		return;
	});
	if (!pageData) return undefined;
	const result = pageData.result;
	const mapsData = result.pageContext.postsData.maps;
	const maps = mapsData.edges.map((edge: any) => edge.node);
	return maps as Maps;
};

export const getArticles = async (lang: Language = "en") => {
	const path = "/news/";
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const articlesData = result.pageContext.postsData.articles;
	const articles = articlesData.edges.map((edge: any) => edge.node);
	return articles as Articles;
};

export const getArticle = async (slug: string, lang: Language = "en") => {
	const path = `/news/${slug}/`;
	const pageData = await getPageData(path, lang).catch(() => {
		return;
	});
	if (!pageData) return undefined;
	const result = pageData.result;
	const article = result.data.pageData;
	return article as ArticleDetail;
};

export const getArticlesCategories = async (lang: Language = "en") => {
	const path = "/news/";
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const articlesCategoriesData =
		result.pageContext.postsData.articlesCategories;
	const articlesCategories = articlesCategoriesData.edges.map(
		(edge: any) => edge.node,
	);
	return articlesCategories as ArticlesCategories;
};

export const getMedia = async () => {
	const path = "/media/";
	const pageData = await getPageData(path);
	const result = pageData.result;
	const mediaData = result.pageContext.postsData.media;
	const media = mediaData.edges.map((edge: any) => edge.node);
	return media as Media;
};

export const getMediaCategories = async () => {
	const path = "/media/";
	const pageData = await getPageData(path);
	const result = pageData.result;
	const mediaCategoriesData = result.pageContext.postsData.mediaCategories;
	const mediaCategories = mediaCategoriesData.edges.map(
		(edge: any) => edge.node,
	);
	return mediaCategories as MediaCategories;
};
