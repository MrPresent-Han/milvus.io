import { Milvus } from '@zilliz/toolkit';

export const markdownToHtml = Milvus.md2html;

export const copyToCommand = async (value: string, callback = () => {}) => {
  await navigator.clipboard.writeText(value);
  callback();
};

export const resetCookie = () => {
  let cookieKeys = document.cookie.match(/[^ =;]+(?=\=)/g); // fetch cookie
  let date = new Date();
  date.setTime(date.getTime() - 10000);
  if (cookieKeys) {
    // set cookie expire time
    for (var i = 0; i < cookieKeys.length; i++) {
      document.cookie =
        cookieKeys[i] + '=0; expires=' + date.toUTCString() + '; path=/';
    }
  }
};
