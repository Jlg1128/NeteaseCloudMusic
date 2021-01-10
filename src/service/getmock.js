import { request } from 'umi';

export function getComment() {
  return request('/api/comment');
}

export function getmusicinfo() {
  return request('/api/musicinfo');
}

export function getToplist() {
  return request('/api/Toplist');
}

export function getToplist2() {
  return request('/api/Toplist2');
}

export function getImages() {
  return request('/api/images');
}
