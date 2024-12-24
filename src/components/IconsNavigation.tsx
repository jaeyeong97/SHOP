import { NavLink } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { iconsState } from "../recoil/atom";
import { Icon } from "../Types";

type IconsNavigationProps = {
  className: string;
};

const IconsNavigation: React.FC<IconsNavigationProps> = ({ className }) => {
  const icons = useRecoilValue<Icon[]>(iconsState);

  return (
    <nav id="inner-category">
      <div className={className}>
        {icons.map((icon: Icon) => (
          <NavLink
            key={icon.path}
            to={icon.path}
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "icon active" : "icon"
            }
          >
            <img src={icon.src} alt={icon.alt} />
            <span className="txt">{icon.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default IconsNavigation;
