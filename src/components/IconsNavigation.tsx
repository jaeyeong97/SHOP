import { NavLink } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { iconsState, scrollState } from "../recoil/atom";
import { Icon } from "../Types";
import { useEffect, useRef } from "react";

type IconsNavigationProps = {
  className: string;
};

const IconsNavigation: React.FC<IconsNavigationProps> = ({ className }) => {
  const icons = useRecoilValue<Icon[]>(iconsState);
  const [scrollNow, setScrollNow] = useRecoilState(scrollState);
  const containerRef = useRef<HTMLDivElement>(null);

  // 스크롤 상태 복원
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollNow;
    }
  }, [scrollNow]);

  // 스크롤 상태 저장
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollNow(containerRef.current.scrollLeft);
    }
  };

  return (
    <nav id="inner-category">
      <div className={className} ref={containerRef} onScroll={handleScroll}>
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
