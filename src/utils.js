import axios from "axios"

const spaceWebsiteApi = axios.create({
  baseURL: "https://space-website-1.onrender.com"
})

export function getArticles() {
  return spaceWebsiteApi.get("/api/articles");
}

export function getArticlesById(article_id) {
  return spaceWebsiteApi.get(`/api/articles/${article_id}`);
}


