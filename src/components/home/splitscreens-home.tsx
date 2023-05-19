import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../../redux/actions';

interface SplitScreenProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function SplitScreen({title, description, image, link}: SplitScreenProps) {
    return (
    <div className="box">
      <div className="wrapper images-box">
        <img src={image} className="screenshots" />
      </div>
      <div className="wrapper text-box">
        <div className="text">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link}><button className="seemore">SEE MORE</button></a>
        </div>
      </div>
    </div>
    )
  }


  interface RootState {
  data: any;
  shortData: any;
  stackData: any;
}

export function SplitScreens() {
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <section id="splitscreen">
      {data?.description?.slice(0, 3).map(({title, description, image, link}: SplitScreenProps) => (
        <SplitScreen key={title} title={title} description={description} image={image} link={link} />
      ))}
    </section>
  )
}