import { PhotoSignatureProps } from './App';
import Logo from './assets/Logo-removebg-preview.png';

const Signature = (props: PhotoSignatureProps) => {
  return (
    <table cellPadding={0} cellSpacing={0} className={'signature'}>
      <tbody>
        <tr>
          <td rowSpan={5}>
            <img
              className={'main-image'}
              src={props.photo === 'no-photo' ? Logo : props.photo}
              alt={''}
            />
          </td>
          <td rowSpan={5}>
            <div className={'vertical-line'} />
          </td>
          <td>{props.fullName}</td>
        </tr>
        <tr>
          <td colSpan={3}>{props.position}</td>
        </tr>
        <tr>
          <td colSpan={3}>Telephone: {props.phone}</td>
        </tr>
        <tr>
          <td colSpan={3}>Email: {props.email}</td>
        </tr>
        <tr>
          <td colSpan={3}>Website: {props.website}</td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Signature;
