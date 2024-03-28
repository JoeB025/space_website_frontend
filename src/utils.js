import axios from "axios"

const spaceWebsiteApi = axios.create({
  baseURL: "https://space-website-p8v4.onrender.com"
})

export function getArticles() {
  return spaceWebsiteApi.get("/api/articles");
}

export function getArticlesById(article_id) {
  return spaceWebsiteApi.get(`/api/articles/${article_id}`);
}

export function getPlanets() {
  return spaceWebsiteApi.get("/api/planets");
}

export function getPlanetsById(planets_id) {
  return spaceWebsiteApi.get(`/api/planets/${planets_id}`);
}

export function getImages() {
  return spaceWebsiteApi.get("/api/images");
}

export function getUsers() {
  return spaceWebsiteApi.get("/api/users"); 
} 

export function getMoons() {
  return spaceWebsiteApi.get("/api/moons");
}


