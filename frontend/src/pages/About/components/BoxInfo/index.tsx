import { IconBaseProps } from 'react-icons';
import { BiRightArrowAlt } from 'react-icons/bi';
import './style.scss';

interface BoxProps {
  icon: IconBaseProps;
  title: string;
  text: string;
}

export function BoxInfo(props: BoxProps) {
  return (
    <div className="box-info">
      <div className="box-content">
        {props.icon}
        <h2 className="title">{props.title}</h2>
        <p>{props.text}</p>
      </div>
      <button className="read">Read More <BiRightArrowAlt size="1.3rem" className="arrow-esquerda" /></button>
    </div>
  );
}