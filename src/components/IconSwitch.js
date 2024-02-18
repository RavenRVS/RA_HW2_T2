import './css/IconSwitch.css';

/***************************************
*  Кнопка изменения вида отображения   *
***************************************/
export default function IconSwitch(props) {
  const { icon, onSwitch } = props;
  return (
    <i className="material-icons" onClick={onSwitch}>
      {icon}
    </i>
  )
}