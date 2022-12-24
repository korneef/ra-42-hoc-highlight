import { ArticleWithEffects, VideoWithEffects } from "./index";

export default function List(props) {
  // eslint-disable-next-line array-callback-return
  return props.list.map(item => {
    // eslint-disable-next-line default-case
    switch (item.type) {
      case 'video':
        return (
          <VideoWithEffects {...item}/>
        );

      case 'article':
        return (
          <ArticleWithEffects {...item}/>
        );
    }
  });
};