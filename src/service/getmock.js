import { request } from 'umi';

export function getComment() {
  return request('/api/comment');
}

export function getmusicinfo() {
  return request('/api/musicinfo');
}

export function getToplist(params) {
  return request('/api/Toplist');
}

export function getToplist2(params) {
  return request('/api/Toplist2');
}

export function getImages(params) {
  return request('/api/images');
}
