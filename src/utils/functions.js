import moment from 'moment';

export const getStories = (page) => {
    return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => res.json())
    .then((data) => {
        let stories = data.slice(0 + (page - 1) * 10, page * 10).map((story)=>{
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json?print=pretty`).then(r => r.json());
        });

        return Promise.all(stories)
    }).catch(err => console.log(err))
}

export const makeURL = (urlString) => {
    try {
        return (new URL(urlString)).hostname;
    } catch (err) {
        console.warn("make failed: ", urlString)
        return urlString;
    }
 }

 export const getTime = time => {
    return moment(time).fromNow();  
}