export const replaceURL = (url) => {
    return url.replace(process.env.REACT_APP_URL, process.env.REACT_APP_API_URL);
}

export const fetchAndReplaceUrl = (watchFields, data) => {
    Object.keys(data).map((item) => {
      if(watchFields.indexOf(item) !== -1) {
        data[item] = data[item] ? replaceURL(data[item]) : null;
      }
      return item;
    });
  
    return data;
  }

  export const convertParagraph = (data) => {
      return data
        .replace(/<p><\/p>/gi, '<div class="paragraph"></div>')
        .replace(/<p>«(.*?)»/gi, '<div class="start-dialog"></div><p>«$1»<div class="end-dialog"></div>')
        .replace(/<hr>/gi, '<div class="time-separator"></div>')
    ;
  }

  export const extractTrailer = (post) => {
    const myRegexExp = /<figure.*class="post-trailer">(.*)<\/figure>/gm;
    const match = post.html ? post.html.match(myRegexExp) : null;
    post.html = post.html ? post.html.replace(myRegexExp, '') : null;
    return {
      ...post,
      trailer: match ? match[0] : null,
    };
  }