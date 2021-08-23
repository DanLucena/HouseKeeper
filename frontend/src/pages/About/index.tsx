import { BoxInfo } from './components/BoxInfo';
import { ImStack } from 'react-icons/im';
import { BsGear } from 'react-icons/bs';
import { IoRocketOutline } from 'react-icons/io5';
import './style.scss';

export function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <span>Some informations about our system.</span>
      <div className="box-info-container">
        <BoxInfo icon={<ImStack size="1.7rem" />} title="Construct you workspace" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta magna lacinia, eleifend nunc et, varius ante. Curabitur ullamcorper libero ante, a fermentum orci sagittis condimentum. Proin dignissim tortor sit amet ligula tempor consequat. Maecenas et mauris vitae arcu consectetur interdum et tristique diam. Fusce bibendum nunc mi, vel lobortis ex sollicitudin bibendum. In hac habitasse platea dictumst. Vestibulum ut lorem et tellus dapibus convallis ..." />
        <BoxInfo icon={<BsGear size="1.7rem" />} title="Automatize your home" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta magna lacinia, eleifend nunc et, varius ante. Curabitur ullamcorper libero ante, a fermentum orci sagittis condimentum. Proin dignissim tortor sit amet ligula tempor consequat. Maecenas et mauris vitae arcu consectetur interdum et tristique diam. Fusce bibendum nunc mi, vel lobortis ex sollicitudin bibendum. In hac habitasse platea dictumst. Vestibulum ut lorem et tellus dapibus convallis ..." />
        <BoxInfo icon={<IoRocketOutline size="1.7rem" />} title="Manage your free time" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta magna lacinia, eleifend nunc et, varius ante. Curabitur ullamcorper libero ante, a fermentum orci sagittis condimentum. Proin dignissim tortor sit amet ligula tempor consequat. Maecenas et mauris vitae arcu consectetur interdum et tristique diam. Fusce bibendum nunc mi, vel lobortis ex sollicitudin bibendum. In hac habitasse platea dictumst. Vestibulum ut lorem et tellus dapibus convallis ..." />
      </div>
    </div>
  );
}