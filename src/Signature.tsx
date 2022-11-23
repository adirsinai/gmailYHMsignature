import { PhotoSignatureProps } from './App';
import Logo from './assets/Logo-removebg-preview.png';

const Signature = (props: PhotoSignatureProps) => {
  return (
    <table cellPadding={0} cellSpacing={0} className={'signature'}>
      <tbody>
        <tr>
          <td rowSpan={0}>
            <img
              className={'main-image'}
              src='https://dev.yhm.co.il/wp-content/uploads/2022/11/rsz_1yhm_logo.png'
              alt={''}
            />
          </td>
          <td rowSpan={0}>
            <div className={'vertical-line'} />
          </td>
          <td className='firstName'>{props.fullName}</td>
        </tr>
        <tr>
          <td colSpan={0}>{props.position}</td>
        </tr>
        <tr>
          <td colSpan={0} className='text'>
            <img
              src='https://dev.yhm.co.il/wp-content/uploads/2022/11/rsz_15874.png'
              alt=''
            />
            <a href={`tel://${props.phone}`}>{props.phone}</a>
          </td>
        </tr>
        <tr>
          <td colSpan={0} className='text'>
            <img
              src='https://dev.yhm.co.il/wp-content/uploads/2022/11/rsz_2099199.png'
              alt=''
            />
            {props.email}
          </td>
        </tr>
        <tr>
          <td colSpan={0} className='text'>
            <img
              src='https://dev.yhm.co.il/wp-content/uploads/2022/11/rsz_2721688.png'
              alt=''
            />
            {props.website}
          </td>
        </tr>
        <tr></tr>
      </tbody>
    </table>
  );
};

export default Signature;
