import axios from "axios";

export enum RequestId {
	Characters = "1075122185",
	Medias = "1459093957",
	Strings = "1689782684",
	Chapters = "1803734063",
	Maps = "2610538813",
	CharactersHead = "2885526788",
	Game = "2923112708",
	ChaptersHead = "670152182",
	Articles = "930870018",
}

const getQuery = async (id: RequestId) => {
	const url = `https://deadbydaylight.com/page-data/sq/d/${id}.json`;
	const res = await axios.get(url);
	const data = res.data.data;
	return data;
};

export const getCharacters = async () => {
	const id = RequestId.Characters;
	const data = getQuery(id);
	return data;
};

export const getMedias = async () => {
	const id = RequestId.Medias;
	const data = getQuery(id);
	return data;
};

export const getStrings = async () => {
	const id = RequestId.Strings;
	const data = getQuery(id);
	return data;
};

export const getChapters = async () => {
	const id = RequestId.Chapters;
	const data = getQuery(id);
	return data;
};

export const getMaps = async () => {
	const id = RequestId.Maps;
	const data = getQuery(id);
	return data;
};

export const getCharactersHead = async () => {
	const id = RequestId.CharactersHead;
	const data = getQuery(id);
	return data;
};

export const getGame = async () => {
	const id = RequestId.Game;
	const data = getQuery(id);
	return data;
};

export const getChaptersHead = async () => {
	const id = RequestId.ChaptersHead;
	const data = getQuery(id);
	return data;
};

export const getArticles = async () => {
	const id = RequestId.Articles;
	const data = getQuery(id);
	return data;
};
