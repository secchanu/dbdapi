import axios from "axios";

type Language = "en" | "fr" | "ja";

const getPageData = async (path: string, lang: Language = "en") => {
	const langPath = lang === "en" ? "" : `/${lang}`;
	const url = `https://deadbydaylight.com/page-data${langPath}${path}page-data.json`;
	const res = await axios.get(url);
	const pageData = res.data;
	return pageData;
};

export const getCharacter = async (slug: string, lang: Language = "en") => {
	const path = `/game/characters/${slug}/`;
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const postData = result.data.postData;
	return postData;
};

export const getChapter = async (slug: string, lang: Language = "en") => {
	const path = `/game/chapters/${slug}/`;
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const postData = result.data.postData;
	return postData;
};

export const getNews = async (slug: string, lang: Language = "en") => {
	const path = `/news/${slug}/`;
	const pageData = await getPageData(path, lang);
	const result = pageData.result;
	const postData = result.data.postData;
	return postData;
};
