/* eslint-disable jsx-a11y/iframe-has-title */
export default function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} allow="autoplay; encrypted-media"></iframe>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
};