import { ArticleWithEffects, VideoWithEffects } from "./index";

export default function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return (
          <VideoWithEffects key={item.url} {...item} />
        );

      case 'article':
        return (
          <ArticleWithEffects key={item.url} {...item} />
        );
      default:
        return null
    }
  });
};